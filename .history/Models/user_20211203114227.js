const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userhema = mongoose.Schema({
    email: { type: String, require: true, unique = true },
    password: { type: String, require: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('user', userSchema)