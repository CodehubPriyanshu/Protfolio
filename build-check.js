#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Checking build configuration for Netlify deployment...\n');

// Check if required files exist
const requiredFiles = [
  'package.json',
  'netlify.toml',
  'public/_redirects',
  'index.html',
  'vite.config.ts'
];

const missingFiles = [];
const existingFiles = [];

requiredFiles.forEach(file => {
  if (fs.existsSync(path.join(__dirname, file))) {
    existingFiles.push(file);
    console.log(`✅ ${file} - Found`);
  } else {
    missingFiles.push(file);
    console.log(`❌ ${file} - Missing`);
  }
});

console.log('\n📦 Checking package.json build script...');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  if (packageJson.scripts && packageJson.scripts.build) {
    console.log(`✅ Build script found: ${packageJson.scripts.build}`);
  } else {
    console.log('❌ No build script found in package.json');
  }
} catch (error) {
  console.log('❌ Error reading package.json');
}

console.log('\n🌐 Checking Netlify configuration...');
if (fs.existsSync('netlify.toml')) {
  console.log('✅ netlify.toml configuration file found');
} else {
  console.log('❌ netlify.toml configuration file missing');
}

console.log('\n🔄 Checking redirect configuration...');
if (fs.existsSync('public/_redirects')) {
  console.log('✅ _redirects file found in public directory');
} else {
  console.log('❌ _redirects file missing from public directory');
}

console.log('\n📋 Summary:');
console.log(`✅ ${existingFiles.length} required files found`);
if (missingFiles.length > 0) {
  console.log(`❌ ${missingFiles.length} required files missing: ${missingFiles.join(', ')}`);
} else {
  console.log('🎉 All required files are present!');
}

console.log('\n🚀 Ready for Netlify deployment!');
console.log('Next steps:');
console.log('1. Push your code to GitHub/GitLab/Bitbucket');
console.log('2. Connect your repository to Netlify');
console.log('3. Set up environment variables in Netlify dashboard');
console.log('4. Deploy!');