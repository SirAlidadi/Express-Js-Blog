const express = require('express');
const router  = express.Router();

const comments = require('@controllers/admin/comments');
const active = require('@controllers/admin/comments/active');
const disable = require('@controllers/admin/comments/disable');
const remove = require('@controllers/admin/comments/remove');

router.get('/', comments);
router.get('/active/:id', active);
router.get('/disable/:id', disable);
router.get('/remove/:id', remove);

module.exports = router;
