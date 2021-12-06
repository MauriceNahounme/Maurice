const bcrypt = require('bcrypt');

const user = require('../Models/user.js');

exports.singup = (req, res, next) => {
    bcrypt.hash(req.body)
};

exports.login = (req, res, next) => {

};