const express = require('express');
const router = express.Router();
const userCtr = require('../Controllers/user')

router.post('/register', userCtr.re);
router.post('/login', userCtr.login);


module.exports = router;