var Contact = require('./contact');

var contacts = [ { name: "John Smith", number: "604-123-9090" } ];

Contact.saveContacts(contacts, function(err) {
  console.log('success');
  // after the 'success' message is printed
  // the contacts array
  // should be in your 'data.json'
});
