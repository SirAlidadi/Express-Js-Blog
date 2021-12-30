const { find } = require('@models/admin/posts');
const { findUsersWithRole } = require('@models/admin/posts');

module.exports = async (req, res) => {
    const ID = req.params.id;
    const post = await find(ID);
    const users = await findUsersWithRole(1);

    const error = req.flash('failed');
    const success = req.flash('succeed');

    if(post) {
        res.adminRender('admin/posts/edit', { error, success, post, users, helpers: {
            isAuthor: function (userID, options){
                return post.author_id === userID ? options.fn(this) : options.inverse(this);
            },
            isStatus: function (status, options) {
                return post.status === status ? options.fn(this) : options.inverse(this);
            }
        }});
    } else {
        req.flash('findMessageError', `پیدا کردن پست با مشکل مواجه شد .`);
        res.redirect(`/admin/posts`);
    }
}