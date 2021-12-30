const { findAll } = require('@models/admin/comments');
const jalaliDate = require('@services/jalaliDate');
const avatar = require('@services/avatar');

module.exports = async (req, res) => {
    const comments = await findAll();

    const finalComments = comments.map(comment => {
        comment.perCreated_at = jalaliDate(comment.created_at);
        comment.avatar = avatar(comment.user_email);
        return comment;
    });

    res.adminRender('admin/comments', { comments: finalComments, helpers: {
            isActive: (status, options) => (status === 1 ? 'alert alert-success' : 'alert alert-danger')
        }
    });
}