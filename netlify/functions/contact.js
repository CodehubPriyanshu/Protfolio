// Netlify serverless function for the contact form.
// Deployed at /.netlify/functions/contact and reached by the frontend
// through the /api/contact rewrite defined in netlify.toml / _redirects.

import nodemailer from 'nodemailer';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-CSRF-Token',
};

const respond = (statusCode, body) => ({
  statusCode,
  headers: {
    ...CORS_HEADERS,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

const sendEmail = async ({ name, email, subject, message }) => {
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT || 587);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const to = process.env.EMAIL_TO;

  if (!user || !pass || !to) {
    console.log('Email not configured, skipping send:', { name, email, subject, message });
    return false;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${user}>`,
    to,
    replyTo: email,
    subject: `Portfolio Contact: ${subject}`,
    text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\nReceived: ${new Date().toISOString()}`,
  });

  return true;
};

export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: CORS_HEADERS, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return respond(405, { success: false, error: 'Method not allowed' });
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { name, email, subject, message, company } = body;

    if (!name || !email || !subject || !message) {
      return respond(400, { success: false, error: 'All fields are required' });
    }

    if (company && company.trim() !== '') {
      return respond(400, { success: false, error: 'Invalid submission' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return respond(400, { success: false, error: 'Invalid email format' });
    }

    if (name.length > 100 || subject.length > 200 || message.length > 2000) {
      return respond(400, { success: false, error: 'Content too long' });
    }

    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    await sendEmail({ name, email, subject, message });

    return respond(200, {
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return respond(500, {
      success: false,
      error: 'Failed to send message. Please try again later.',
    });
  }
};
