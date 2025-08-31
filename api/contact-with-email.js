// Enhanced Vercel serverless function with email sending
// To use this version:
// 1. Install @sendgrid/mail: npm install @sendgrid/mail
// 2. Add SENDGRID_API_KEY to your Vercel environment variables
// 3. Rename this file to contact.js (replacing the basic version)

import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

  try {
    const { name, email, subject, message, company } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    // Honeypot check (company field should be empty)
    if (company && company.trim() !== '') {
      return res.status(400).json({
        success: false,
        error: 'Invalid submission'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    // Length validations
    if (name.length > 100 || subject.length > 200 || message.length > 2000) {
      return res.status(400).json({
        success: false,
        error: 'Content too long'
      });
    }

    // Sanitize inputs
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedSubject = subject.trim();
    const sanitizedMessage = message.trim();

    // Configure SendGrid
    if (process.env.SENDGRID_API_KEY) {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      const msg = {
        to: 'priyanshumails.bca2025@gmail.com', // Your email
        from: 'noreply@priyanshu-kumar-portfolio.vercel.app', // Must be verified in SendGrid
        replyTo: sanitizedEmail,
        subject: `Portfolio Contact: ${sanitizedSubject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #6366f1; margin-bottom: 20px; text-align: center; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
                💌 New Contact Form Submission
              </h2>
              
              <div style="margin-bottom: 25px; padding: 20px; background-color: #f8fafc; border-left: 4px solid #6366f1; border-radius: 5px;">
                <h3 style="color: #6366f1; margin: 0 0 15px 0;">📋 Contact Details</h3>
                <p style="margin: 8px 0;"><strong>👤 Name:</strong> ${sanitizedName}</p>
                <p style="margin: 8px 0;"><strong>📧 Email:</strong> ${sanitizedEmail}</p>
                <p style="margin: 8px 0;"><strong>📝 Subject:</strong> ${sanitizedSubject}</p>
              </div>

              <div style="margin-bottom: 25px; padding: 20px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 5px;">
                <h3 style="color: #6366f1; margin: 0 0 15px 0;">💬 Message</h3>
                <div style="line-height: 1.6; color: #334155; white-space: pre-wrap; background-color: #f8fafc; padding: 15px; border-radius: 5px; border-left: 3px solid #6366f1;">${sanitizedMessage}</div>
              </div>

              <div style="margin-top: 30px; padding: 15px; background-color: #f1f5f9; border-radius: 5px; text-align: center;">
                <p style="margin: 0; font-size: 12px; color: #64748b;">
                  🕒 <strong>Received:</strong> ${new Date().toLocaleString('en-US', {
                    timeZone: 'Asia/Kolkata',
                    dateStyle: 'full',
                    timeStyle: 'medium'
                  })} (IST)
                </p>
                <p style="margin: 5px 0 0 0; font-size: 12px; color: #64748b;">
                  📊 This email was automatically generated from your portfolio contact form.
                </p>
              </div>

              <div style="margin-top: 20px; padding: 15px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border-radius: 5px; text-align: center;">
                <p style="margin: 0; color: white; font-weight: bold;">
                  🚀 Ready to connect and create something amazing!
                </p>
              </div>
            </div>
          </div>
        `,
        text: `
New Contact Form Submission

Contact Details:
- Name: ${sanitizedName}
- Email: ${sanitizedEmail}
- Subject: ${sanitizedSubject}

Message:
${sanitizedMessage}

Received: ${new Date().toLocaleString('en-US', {
  timeZone: 'Asia/Kolkata',
  dateStyle: 'full',
  timeStyle: 'medium'
})} (IST)
        `.trim()
      };

      await sgMail.send(msg);
    } else {
      // Log to console if no SendGrid key
      console.log('📧 Contact form submission (no email service configured):', {
        name: sanitizedName,
        email: sanitizedEmail,
        subject: sanitizedSubject,
        message: sanitizedMessage,
        timestamp: new Date().toISOString(),
        userAgent: req.headers['user-agent'],
        ip: req.headers['x-forwarded-for'] || req.connection?.remoteAddress
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon. 🚀'
    });

  } catch (error) {
    console.error('❌ Contact form error:', error);
    
    // More specific error messages
    if (error.response?.body?.errors) {
      console.error('SendGrid errors:', error.response.body.errors);
    }

    return res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.'
    });
  }
}
