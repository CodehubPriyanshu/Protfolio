# Netlify Deployment Guide

## Prerequisites
1. Create a Netlify account at https://netlify.com
2. Install Netlify CLI (optional): `npm install -g netlify-cli`

## Deployment Steps

### Method 1: Git-based Deployment (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify:
   - Go to Netlify dashboard
   - Click "New site from Git"
   - Choose your repository
   - Build settings will be automatically detected from `netlify.toml`

### Method 2: Manual Deployment
1. Build your project locally:
   ```bash
   npm install
   npm run build
   ```
2. Deploy the `dist` folder to Netlify:
   - Drag and drop the `dist` folder to Netlify dashboard
   - Or use Netlify CLI: `netlify deploy --prod --dir=dist`

## Environment Variables Setup
In your Netlify dashboard, go to Site settings > Environment variables and add:

### Required Variables:
- `NODE_ENV`: `production`
- `VITE_API_BASE_URL`: Your API base URL

### Optional Variables (based on your needs):
- `SENDGRID_API_KEY`: For email functionality
- `EMAIL_HOST`: SMTP host
- `EMAIL_PORT`: SMTP port
- `EMAIL_USER`: Email username
- `EMAIL_PASS`: Email password
- `EMAIL_TO`: Recipient email
- `FRONTEND_URL`: Your site URL
- `MONGODB_URI`: Database connection string
- `GOOGLE_ANALYTICS_ID`: Analytics ID

## Build Configuration
The `netlify.toml` file contains:
- Build command: `npm run build`
- Publish directory: `dist`
- Node.js version: 18
- Redirect rules for SPA routing
- Security headers

## Troubleshooting
1. **Build fails**: Check Node.js version compatibility
2. **404 on refresh**: Ensure `_redirects` file is in `public` folder
3. **API calls fail**: Check CORS settings and environment variables
4. **Environment variables not working**: Ensure they're prefixed with `VITE_` for client-side access

## Post-deployment
1. Test all routes and functionality
2. Check browser console for errors
3. Verify environment variables are working
4. Test contact form (if applicable)
5. Set up custom domain (optional)

## Continuous Deployment
Once connected to Git, Netlify will automatically deploy when you push to your main branch.