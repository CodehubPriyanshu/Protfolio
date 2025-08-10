// Optional MongoDB storage for contact messages
// This module initializes a MongoDB connection via Mongoose if MONGODB_URI is provided.
// If not configured or if mongoose is not installed, it will no-op gracefully.

let mongoose;
try {
  mongoose = require('mongoose');
} catch (e) {
  console.warn('Mongoose not installed. Skipping DB features.');
}

let ContactMessage;
let isDbEnabled = false;

async function initDb() {
  try {
    if (!mongoose) return false;
    const uri = process.env.MONGODB_URI;
    if (!uri) return false;

    await mongoose.connect(uri, {
      dbName: process.env.MONGODB_DB || undefined,
    });

    // Define schema once
    if (!ContactMessage) {
      const contactSchema = new mongoose.Schema({
        name: { type: String, required: true, maxlength: 100 },
        email: { type: String, required: true },
        subject: { type: String, required: true, maxlength: 200 },
        message: { type: String, required: true, maxlength: 2000 },
        createdAt: { type: Date, default: Date.now },
      }, { collection: 'contact_messages' });

      ContactMessage = mongoose.model('ContactMessage', contactSchema);
    }

    isDbEnabled = true;
    return true;
  } catch (err) {
    console.warn('MongoDB connection failed:', err.message);
    isDbEnabled = false;
    return false;
  }
}

async function saveContact(data) {
  if (!isDbEnabled || !ContactMessage) return null;
  try {
    const doc = new ContactMessage({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    });
    await doc.save();
    return doc;
  } catch (err) {
    console.warn('Failed to store contact message:', err.message);
    return null;
  }
}

module.exports = { initDb, saveContact, isDbEnabled };

