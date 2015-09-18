var Contact = require('./contact');

var contact =  { name: "John Smith", number: "604-123-9090" };

Contact.saveContact(contact, function(err) {
  console.log('success');
  // after the 'success' message is printed
  // the contacts array
  // should be in your 'data.json'
});
