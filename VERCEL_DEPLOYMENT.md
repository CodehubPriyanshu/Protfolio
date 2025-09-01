# Vercel Deployment Guide

This guide will help you deploy your portfolio to Vercel successfully.

## 🚀 Quick Start

### 1. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click "New Project"
3. Import your portfolio repository
4. Vercel will automatically detect it as a Vite project

### 2. Configure Environment Variables

In your Vercel dashboard, go to **Settings > Environment Variables** and add:

#### Required Variables:
```bash
NODE_ENV=production
```

#### Optional (for contact form email functionality):
```bash
# Option 1: SendGrid (Recommended)
SENDGRID_API_KEY=your_sendgrid_api_key

# Option 2: SMTP (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=priyanshumails.bca2025@gmail.com
FRONTEND_URL=https://your-domain.vercel.app
```

### 3. Deploy

Click **Deploy** - Vercel will:
- Install dependencies (`npm install`)
- Build your project (`npm run build`)
- Deploy to a global CDN

## 📋 Project Structure

```
portfolio/
├── src/                    # React source code
├── api/                    # Vercel serverless functions
│   ├── contact.js         # Basic contact form handler
│   └── contact-with-email.js  # Enhanced with email sending
├── dist/                   # Build output (auto-generated)
├── vercel.json            # Vercel configuration
├── .vercelignore          # Files to exclude from deployment
└── package.json           # Dependencies and scripts
```

## ⚙️ Configuration Files

### vercel.json
The main configuration file that:
- Sets build command and output directory
- Configures serverless functions
- Sets up URL rewrites for SPA routing
- Adds security headers

### .vercelignore
Excludes unnecessary files from deployment:
- Backend development server
- Development configs
- Node modules
- Build artifacts

## 🔧 Troubleshooting

### Build Errors
1. **Module not found**: Check if all dependencies are in `package.json`
2. **TypeScript errors**: Run `npm run build` locally to check for issues
3. **Path issues**: Ensure all imports use relative paths

### API Issues
1. **CORS errors**: API functions already include CORS headers
2. **Contact form not working**: Check environment variables
3. **Timeout errors**: Functions have 10-second timeout limit

### Performance
1. **Large bundle size**: Check bundle analyzer in build output
2. **Slow loading**: Optimize images and lazy load components
3. **SEO issues**: Ensure proper meta tags in `index.html`

## 🎯 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All routes work (refresh test)
- [ ] Contact form submits successfully
- [ ] Images and assets load
- [ ] Mobile responsive
- [ ] Performance score >90 (use PageSpeed Insights)
- [ ] SEO meta tags working

## 🔄 Continuous Deployment

Vercel automatically redeploys when you:
1. Push to the main branch
2. Merge pull requests
3. Update environment variables

## 📞 Support

If you encounter issues:

1. Check Vercel deployment logs in the dashboard
2. Review the function logs for API errors
3. Test the build locally: `npm run build && npm run preview`
4. Ensure all environment variables are set correctly

## 🌟 Optimization Tips

### Performance
- Use WebP images where possible
- Enable compression in Vercel settings
- Implement lazy loading for images
- Minimize bundle size

### SEO
- Add proper meta descriptions
- Use semantic HTML
- Implement structured data
- Add sitemap.xml

### Security
- Use HTTPS only (automatic with Vercel)
- Implement CSP headers if needed
- Regular dependency updates
- Sanitize user inputs

## 📊 Monitoring

Consider adding:
- Google Analytics for traffic monitoring
- Error tracking (Sentry, etc.)
- Performance monitoring
- User feedback collection

---

**🎉 Your portfolio is now live on Vercel!**

Share your portfolio URL and enjoy your new professional presence online.
