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

module.exports = Command;
