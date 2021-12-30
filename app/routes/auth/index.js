const express = require('express');
const router = express.Router();

const { renderLogin, login } = require('@controllers/auth/login');
const { renderRegister, register } = require('@controllers/auth/register');

router.get('/login', renderLogin);
router.post('/login', login);
router.get('/register', renderRegister);
router.post('/register', register);

module.exports = router;
