const bcrypt = require('bcrypt');

const user = require('../Models/user.js');

exports.singup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10);
    .then();
    .catch(erro => res.status())
};

exports.login = (req, res, next) => {

};