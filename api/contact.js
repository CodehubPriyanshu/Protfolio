// Vercel serverless function for contact form
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

    // For now, we'll just return success
    // In a real implementation, you'd send email using a service like:
    // - SendGrid (recommended for Vercel)
    // - Resend
    // - EmailJS
    // - Nodemailer with Gmail API

    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully! I\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.'
    });
  }
}
