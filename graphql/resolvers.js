const bcrypt = require('bcryptjs');

const User = require('../models/user');

module.exports = {
    hello(){
        return {
            text: "Hello world",
            views : 154
        }
    }
};
