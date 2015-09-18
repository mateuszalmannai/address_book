var path = require('path');
var Util = {};

Util.getHomeDirectory = function() {
    if(process.platform === 'win32'){
        return process.env.USERPROFILE;
    }
    return process.env.HOME;
};

Util.getDataPath = function() {
    return path.join(Util.getHomeDirectory(), 'data.json');
};

module.exports = Util;
