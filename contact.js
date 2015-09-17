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

module.exports = Contact;
