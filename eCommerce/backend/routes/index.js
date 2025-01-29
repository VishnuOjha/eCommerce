const express = require('express');
const { registerUser } = require('../controller/authController');

const router = express.Router();

router.post('/signup', registerUser);

module.exports = router;