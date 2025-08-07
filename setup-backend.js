#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Portfolio Backend...\n');

// Check if backend directory exists
const backendDir = path.join(__dirname, 'backend');
if (!fs.existsSync(backendDir)) {
  console.error('❌ Backend directory not found!');
  process.exit(1);
}

try {
  // Change to backend directory
  process.chdir(backendDir);
  
  console.log('📦 Installing backend dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Check if .env exists, if not copy from .env.example
  const envPath = path.join(backendDir, '.env');
  const envExamplePath = path.join(backendDir, '.env.example');
  
  if (!fs.existsSync(envPath) && fs.existsSync(envExamplePath)) {
    console.log('📝 Creating .env file from .env.example...');
    fs.copyFileSync(envExamplePath, envPath);
    console.log('⚠️  Please configure your email settings in backend/.env');
  }
  
  console.log('\n✅ Backend setup complete!');
  console.log('\n📋 Next steps:');
  console.log('1. Configure your email settings in backend/.env');
  console.log('2. Start the backend server: cd backend && npm run dev');
  console.log('3. Start the frontend: npm run dev');
  console.log('\n🔧 For Gmail setup instructions, see backend/README.md');
  
} catch (error) {
  console.error('❌ Setup failed:', error.message);
  process.exit(1);
}
