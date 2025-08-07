# 🌟 Modern AI Portfolio Web App

A stunning, dark-themed portfolio website built with React, TypeScript, and Tailwind CSS. Features dynamic animations, floating icons, and a complete backend for contact form handling.

## ✨ Features

### 🎨 Design & UI
- **Dark Theme Only**: Permanent dark mode with neon glowing effects
- **Floating Icons Animation**: 10 animated icons that appear only on home screen
- **Glass Morphism Cards**: Consistent styling across all sections
- **Responsive Design**: Mobile-first approach with smooth animations
- **Neon Glow Effects**: Beautiful gradient text and hover effects

### 🏠 Home Screen
- **Profile Layout**: Vertically larger profile photo, centered on long screens
- **Social Icons**: GitHub, LinkedIn, and Mail with subtle glow hover effects
- **Smart Floating Icons**: Disappear when scrolling, never overlap with content

### 💡 About Screen
- **Skill Cards**: Glowing cards instead of progress bars
- **Grid Layout**: Responsive grid showing technical skills
- **No Percentages**: Clean design focusing on skill names only

### 🎓 Education Screen
- **Graduation Status**: Shows "Graduated" status
- **Timeline & Location**: Inline display of dates and location
- **Consistent Styling**: Matches other card designs

### 🚀 Projects Screen
- **Flexible Cards**: Auto-expand based on content
- **Skills Overflow**: Show first 3 skills + expandable "+N" button
- **No Charging Icons**: Clean, minimal design
- **Uniform Grid**: Maintains consistent width

### 📬 Contact Screen
- **Styled Cards**: Consistent with education/project cards
- **Backend Integration**: Secure email handling
- **Form Validation**: Client and server-side validation
- **Success Messages**: Styled confirmation messages

### 🔚 Footer
- **Updated Copyright**: © 2025 Priyanshu Kumar. Built with React, Tailwind & CSS
- **Inspirational Quote**: "Transforming data into insight, code into impact."

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for fast development
- **Lucide React** for icons
- **Radix UI** components
- **React Router** for navigation

### Backend
- **Node.js** with Express
- **Nodemailer** for email handling
- **Rate Limiting** for security
- **CORS** protection
- **Input Validation**

## 🚀 Quick Start

### 1. Install Frontend Dependencies
```bash
npm install
```

### 2. Setup Backend (Automated)
```bash
npm run setup-backend
```

### 3. Configure Email Settings
Edit `backend/.env` with your email credentials:
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=priyanshumails.bca2025@gmail.com
```

### 4. Start Development Servers
```bash
# Start both frontend and backend
npm run start-full

# Or start individually
npm run dev              # Frontend only
npm run start-backend    # Backend only
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   ├── data/               # Centralized data configuration
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── pages/              # Page components
│   └── assets/             # Images and static files
├── backend/
│   ├── server.js           # Express server
│   ├── package.json        # Backend dependencies
│   └── .env.example        # Environment template
└── public/                 # Static assets
```

## 🎯 All Features Implemented ✅

- [x] **Dark Mode Only**: Light/dark toggle removed, forced dark theme
- [x] **Home Screen**: Name as "Priyanshu Kumar", larger profile photo, glow effects
- [x] **Floating Icons**: Only on home screen, disappear when scrolling
- [x] **About Screen**: Skill cards instead of bars, no percentages
- [x] **Education Screen**: "Graduated" status, inline timeline & location
- [x] **Projects Screen**: Flexible cards, skills overflow, no charging icons
- [x] **Contact Screen**: Consistent styling, backend integration
- [x] **Footer**: Updated copyright, inspirational quote
- [x] **Backend**: Node.js/Express server with email handling
- [x] **Data System**: Centralized configuration for easy management

## 🔧 Configuration

### Data Management
All content is centralized in `src/data/portfolioData.js`:
- Personal information
- Skills and technologies
- Education details
- Project information
- Contact details
- Social links

### Email Setup (Gmail)
1. Enable 2-factor authentication
2. Generate App Password in Google Account settings
3. Use Gmail address as `EMAIL_USER`
4. Use App Password as `EMAIL_PASS`

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
```

### Backend (Railway/Heroku)
```bash
cd backend
npm start
```

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/2eac1008-39f5-483d-80d6-cea11d71c2ff) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
