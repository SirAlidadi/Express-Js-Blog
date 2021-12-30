const express = require('express');
const router = express.Router();

const settings = require('@controllers/admin/settings');
const store = require('@controllers/admin/settings/store');

router.get('/', settings);
router.post('/store', store);

module.exports = router;
