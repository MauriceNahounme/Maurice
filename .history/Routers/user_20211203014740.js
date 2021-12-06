const express = require('express');
const router = express.Router();
const userCtr = require('..controllers/user.js')

router.post('/signup', userCtr.signup);


module.exports = router;