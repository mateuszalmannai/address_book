
var Contact = {};

Contact.parseName = function(str) {
    // str is a string containing the name and phone number separated by a comma
    // extract and return the name from the str argument
    // str will always contiain only one comma character
    var parts = str.split(',');
    return parts[0].trim();
};

Contact.parseNumber = function(str){
    return str.split(',')[1].trim();
};

Contact.createContact = function(str){
    var contact = {
        name: this.parseName(str),
        number: this.parseNumber(str)
    };
    return contact;
};

Contact.loadContacts = function(done) {
    var util = require('./util'),
    jsonfile = require('jsonfile'),
    jsonpath = util.getDataPath();

    // read data.json using jsonfile.readFile
    jsonfile.readFile(jsonpath, done);
};

Contact.saveContacts = function(contacts, done) {
    var util = require('./util'),
    jsonfile = require('jsonfile'),
    jsonpath = util.getDataPath();
    jsonfile.writeFile(jsonpath, contacts, done);
};

Contact.saveContact = function(contact, done) {
    // save a reference to 'this', i.e. the Contact object for use
    // inside the anonymous callback function, which is not a method
    // of the Contact object
    var _this = this;
    // contact is a JavaScript object containing the contact info
    // e.g. { name: 'John Smith', number: '604-123-9090' }
    //
    // you need to load the existing contacts array from `data.json`
    // when the callback of the loadContacts function is invoked a new
    // 'this' object of its own is created, which is why we need to keep
    // a reference to this from saveContact if we want to use it inside the
    // callback of loadContacts
    this.loadContacts(function(err, contacts){
        // if loacContacts encounters an error it means that our saveContact
        // fails as well so we can immediately call its callback 'done' and
        // pass the error to it
        // note that we're also returning from the loadContacts callback, since
        // there's no point in continuing its execution when an error occurs
        // err is the value of the error (null if no error was encountered)
        if (err) { return done(err); }
        // if  no error is encountered then the contacts argument is the array
        // of contact objects from data.json
        // append the new contact to it
        contacts.push(contact);
        // store the contacts array to `data.json`
        // second argument is the callback function to call once the save operation
        // is complete; instead of providing an anonymous function here, we pass the
        // done argument from our saveContact method
        // call done(err) when the operation is complete
        _this.saveContacts(contacts, done);
        // saveContacts will call the done callback when it finishes its job, this
        // way we don't have to worry about calling the callback ourselves, since
        // saveContacts will do it for us
    });
};

Contact.findContacts = function(name, done) {
    this.loadContacts(function(err, contacts){
        if (err) {
            return done(err);
        }
        var filteredData = contacts.filter ( function (contact) {
            return contact.name === name;
        });
        done(null, filteredData);
    });
};

module.exports = Contact;
