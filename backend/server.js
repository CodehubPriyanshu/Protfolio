const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

// Optional DB utilities (will no-op if MongoDB is not configured/installed)
let db = { initDb: async () => false, saveContact: async () => null, isDbEnabled: false };
try {
  db = require('./db');
} catch (e) {
  console.warn('Database module not available. Skipping DB storage.');
}

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize database if available
(async () => {
  try {
    if (db && typeof db.initDb === 'function') {
      const enabled = await db.initDb();
      db.isDbEnabled = enabled;
      if (enabled) {
        console.log('Database initialized: contact messages will be stored.');
      } else {
        console.log('Database not configured. Skipping storage.');
      }
    }
  } catch (err) {
    console.warn('Database initialization failed:', err.message);
  }
})();

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many contact form submissions, please try again later.'
  }
});

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:8080',
  credentials: true
}));

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Apply rate limiting to contact route
app.use('/api/contact', limiter);

// Email transporter configuration
// Configure your email credentials in backend/.env
// Example for Gmail:
// EMAIL_HOST=smtp.gmail.com
// EMAIL_PORT=587
// EMAIL_USER=your-email@gmail.com
// EMAIL_PASS=your-app-password
// EMAIL_TO=priyanshumails.bca2025@gmail.com
const createTransporter = () => {
  const port = Number(process.env.EMAIL_PORT || 587);
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Basic sanitization helpers
const escapeHtml = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const getTrimmedContactData = (data = {}) => ({
  name: (data.name || '').toString().trim(),
  email: (data.email || '').toString().trim(),
  subject: (data.subject || '').toString().trim(),
  message: (data.message || '').toString().trim(),
  // Honeypot field: should be empty for human submissions
  company: (data.company || '').toString().trim(),
});


// Validation function
const validateContactForm = (data) => {
  const { name, email, subject, message, company } = data;

  // Honeypot check: if filled, likely a bot
  if (company) {
    return { isValid: false, error: 'Invalid submission' };
  }

  if (!name || !email || !subject || !message) {
    return { isValid: false, error: 'All fields are required' };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Invalid email format' };
  }

  // Length validations
  if (name.length > 100) {
    return { isValid: false, error: 'Name must be less than 100 characters' };
  }

  if (subject.length > 200) {
    return { isValid: false, error: 'Subject must be less than 200 characters' };
  }

  if (message.length > 2000) {
    return { isValid: false, error: 'Message must be less than 2000 characters' };
  }

  return { isValid: true };
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const trimmed = getTrimmedContactData(req.body);
    const { name, email, subject, message } = trimmed;

    // Validate input (includes honeypot check)
    const validation = validateContactForm(trimmed);
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        error: validation.error
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Portfolio Contact: ${escapeHtml(subject)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          </div>

          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
            <h3 style="color: #007bff; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>

          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px; font-size: 12px; color: #6c757d;">
            <p>This email was sent from your portfolio contact form.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      replyTo: email
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: store to DB
    if (db && db.isDbEnabled && typeof db.saveContact === 'function') {
      await db.saveContact({ name, email, subject, message });
    }

    res.json({
      success: true,
      message: 'Message successfully sent!'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Portfolio backend server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
