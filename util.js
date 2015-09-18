var Util = {};

Util.getHomeDirectory = function() {
    // returns the path to the home directory
    // e.g. "/home/talentbuddy"
    if(process.platform === 'win32'){
        return process.env.USERPROFILE;
    }
    return process.env.HOME;
};

module.exports = Util;
