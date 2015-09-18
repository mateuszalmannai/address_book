var Command = {};

Command.getOperation = function() {
    // return the value from the list of command line arguments
    // representing the operation to be performed  (add or find)
    // the first commanline argument provided is always the operation
    // this means that in process.argv the operation name will be at
    // index two, so we simply return the element at index two
    return process.argv[2];
};

Command.getOperationData = function() {
    // return the value from the list of command line arguments
    // representing the data to be used for the operation
    // Since the data is always provided as the next command-line
    // argument after the operation it can be accessed as the element
    // at index three in process.argv
    return process.argv[3];
};

Command.add = function(done){
    var Contact = require('./contact');
    // extracts the contact string from the command line arguments
    var data = Command.getOperationData();
    // converts the contact string into a contact objects using Contact.createContact
    var contact = Contact.createContact(data);
    // appends the contact object to data.json
    // calls the callback done(err)
    // err represents the error which will be null if no errors were encountered
    Contact.saveContact(contact, done);
};

Command.find = function(done){
    var Contact = require('./contact');
    // extracts the name from the command line arguments e.g. "John Smith"
    var data = Command.getOperationData();
    var name = Contact.parseName(data);
    // searches for the contacts matching the given name using Contact.findContacts
    // prints the matching contacts
    // returns the matched contacts array via done callback
    // e.g. done(err, foundContacts)
    // where foundContacts is the array of contacts that matched the search
    Contact.findContacts(name, function(err, result){
        // err is the value for the error (null if no error was encountered)
        if (err) {
            return done(err);
        }
        result.forEach(function(contact){
            console.log(contact.name, contact.number);
        });
        done(null, result);
    });
};

module.exports = Command;
