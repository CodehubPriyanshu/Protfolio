# Portfolio Backend

Backend API for handling contact form submissions from the portfolio website.

## Features

- Secure contact form handling
- Email notifications via Nodemailer
- Rate limiting to prevent spam
- Input validation and sanitization
- CORS protection
- Security headers with Helmet

## Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Configure your email settings in `.env`:
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=priyanshumails.bca2025@gmail.com
PORT=3001
FRONTEND_URL=http://localhost:8080
```

4. Start the server:
```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

### POST /api/contact
Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'd like to discuss a project..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message successfully sent!"
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2025-01-07T..."
}
```

## Security Features

- Rate limiting: 5 requests per 15 minutes per IP
- Input validation and length limits
- CORS protection
- Security headers
- Email sanitization

## Gmail Setup

To use Gmail as your email provider:

1. Enable 2-factor authentication on your Google account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. Use your Gmail address as `EMAIL_USER` and the app password as `EMAIL_PASS`
