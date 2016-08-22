// Load required packages
var mongoose = require('mongoose');

// Define our contact schema
var ContactSchema   = new mongoose.Schema({
  title: String,
  firstName: String,
  lastName: String,
  mobileNumber: Number
});

// Export the Mongoose model
module.exports = mongoose.model('Contact', ContactSchema);