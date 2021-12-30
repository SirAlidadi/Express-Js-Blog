const auth = require('@middlewares/auth')
const routerComments = require('./admin/comments');
const routerDashboard = require('./admin/dashboard');
const routerPosts = require('./admin/posts');
const routerUsers = require('./admin/users');
const routerSettings = require('./admin/settings');
const routerAuth = require('./auth/index');

module.exports = app => {
    app.use('/admin', [auth], routerDashboard);
    app.use('/admin/comments', [auth], routerComments);
    app.use('/admin/posts', [auth], routerPosts);
    app.use('/admin/users', [auth], routerUsers);
    app.use('/admin/settings', [auth], routerSettings);
    app.use('/', routerAuth);

}