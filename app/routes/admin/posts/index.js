const express = require('express');
const router = express.Router();

const posts = require('@controllers/admin/posts');
const create = require('@controllers/admin/posts/create');
const store = require('@controllers/admin/posts/store');
const deletePost = require('@controllers/admin/posts/delete');
const editPost = require('@controllers/admin/posts/edit');
const updatePost = require('@controllers/admin/posts/update');

router.get('', posts);
router.get('/create', create);
router.post('/store', store);
router.get('/delete/:id', deletePost);
router.get('/edit/:id', editPost);
router.post('/update/:id', updatePost);

module.exports = router;