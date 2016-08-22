// Get the packages we need
var express = require('express');
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
var contactController = require('./app/controllers/contact');

// Create our Express application
var connectyServer = express();

// Use the body-parser package in our application
connectyServer.use(bodyParser.urlencoded({
  extended: true
}));

// Connect to the connecty MongoDB
mongoose.connect('mongodb://localhost:27017/connecty');

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Create our Express router
var router = express.Router();

// Create endpoint handlers for /contacts
router.route('/contacts')
  .post(contactController.postContacts)
  .get(contactController.getContacts);

// Create endpoint handlers for /contacts/:beer_id
router.route('/contacts/:contact_id')
  .get(contactController.getContact)
  .put(contactController.putContact)
  .delete(contactController.deleteContact);

// Initial dummy route for testing
// http://localhost:3000/api
router.get('/', function(req, res) {
  res.json({ message: 'You are Welcome to connecty!' });
});

// Register all our routes with /api
connectyServer.use('/api', router);


// Start the server
connectyServer.listen(port);
console.log('Connecty Start on port ' + port);