const bcrypt = require('bcrypt');

const user = require('../Models/user.js');

exports.singup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10);
    .then(hash => {
        const
    });
    .catch(erro => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {

};