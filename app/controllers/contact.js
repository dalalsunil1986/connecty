// Load required packages
var Contact = require('../models/contact');

// Create endpoint /api/contacts for POSTS
exports.postContacts = function(req, res) {
  // Create a new instance of the Contact model
  var contact = new Contact();

  // Set the contact properties that came from the POST data
  contact.title = req.body.title;
  contact.firstName = req.body.firstName;
  contact.lastName = req.body.lastName;
  contact.mobileNumber = req.body.mobileNumber;

  // Save the contact and check for errors
  contact.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Contact added Successfully!', data: contact });
  });
}

// Create endpoint /api/contacts for GET
exports.getContacts = function(req, res) {
  // Use the Contact model to find all contacts
  Contact.find(function(err, contacts) {
    if (err)
      res.send(err);

    res.json(contacts);
  });
};

// Create endpoint /api/contacts/:contact_id for GET
exports.getContact = function(req, res) {
  // Use the Contact model to find a specific contact
  Contact.findById(req.params.contact_id, function(err, contact) {
    if (err)
      res.send(err);

    res.json(contact);
  });
};

// Create endpoint /api/contacts/:contact_id for PUT
exports.putContact = function(req, res) {
  // Use the Contact model to find a specific contact
  Contact.findById(req.params.contact_id, function(err, contact) {
    if (err)
      res.send(err);

    // Update the existing contact mobileNumber
    contact.mobileNumber = req.body.mobileNumber;

    // Save the contact and check for errors
    contact.save(function(err) {
      if (err)
        res.send(err);

      res.json(contact);
    });
  });
};

// Create endpoint /api/contacts/:contact_id for DELETE
exports.deleteContact = function(req, res) {
  // Use the Contact model to find a specific contact and remove it
  Contact.findByIdAndRemove(req.params.contact_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Contact removed Successfully!' });
  });
};