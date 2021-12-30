const express = require('express');
const router = express.Router();

const dashboard = require('@controllers/admin/dashboard');

router.get('/dashboard', dashboard);

module.exports = router;