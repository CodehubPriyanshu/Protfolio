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

    // MONGODB_URI should be copied from your MongoDB Atlas → "Connect" dialog.
    // Example:
    //   mongodb+srv://<username>:<password>@<cluster-host>/?retryWrites=true&w=majority&appName=<app>
    // Notes:
    // - Keep the scheme mongodb+srv for Atlas.
    // - Replace <username> and <password> with your database user credentials (NOT your Atlas account login).
    // - You can specify the database name in one of two ways:
    //   1) Set MONGODB_DB below (preferred for this code), OR
    //   2) Append "/<dbName>" to the URI before the query string.
    const uri = process.env.MONGODB_URI;
    if (!uri) return false;

    // If you see "Could not connect to any servers in your MongoDB Atlas cluster":
    // - In Atlas, go to Network Access → IP Access List and add your current IP (or 0.0.0.0/0 for local dev).
    // - Ensure your cluster is running (not paused).
    // - Verify username/password and that the user has permission to the database.
    await mongoose.connect(uri, {
      // Optionally set the DB to use; if not set, Mongoose will use the default database from the URI.
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

