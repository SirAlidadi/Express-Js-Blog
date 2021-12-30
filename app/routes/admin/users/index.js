const express = require('express');
const router = express.Router();

const users = require('@controllers/admin/users');
const create = require('@controllers/admin/users/create');
const store = require('@controllers/admin/users/store');
const editUser = require('@controllers/admin/users/edit');
const deleteUser = require('@controllers/admin/users/delete');
const updateUser = require('@controllers/admin/users/update');

router.get('/', users);
router.get('/create', create);
router.post('/store', store);
router.get('/edit/:id', editUser);
router.post('/update/:id', updateUser);
router.get('/delete/:id', deleteUser);

module.exports = router;
