var Contact = require('./contact');

Contact.loadContacts(function(err, data){
    console.log(data);
});
