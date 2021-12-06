const bcrypt = require('bcrypt');

const user = require('../Models/user.js');

exports.singup = (req, res, next) => {
    bcrypt.hash(req.body.password, 6)
        .then(hash => {
            const user = new user({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur bien crée' }))
                .catch(erro => res.status(400).json({ error }));
        })
        .catch(erro => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    user.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    error: 'L\utilisateur n'

                })
            }
        })
        .catch(error => res.status(500).json({ error }));
};