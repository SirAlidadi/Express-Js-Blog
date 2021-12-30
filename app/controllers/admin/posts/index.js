const { findAll } = require('@models/admin/posts');
const jalaliDate = require('@services/jalaliDate');

const posts = async (req, res) => {
    const posts = await findAll();
    const deleteMessage = req.flash('deleteMessage');
    const deleteMessageError = req.flash('deleteMessageError');
    const findMessageError = req.flash('findMessageError');

    const finalPosts = posts.map(post => {
        post.jalali_date = jalaliDate(post.create_at);
        return post;
    });

    res.adminRender('admin/posts', { layout: 'admin',
        posts: finalPosts,
        deleteMessage,
        deleteMessageError,
        findMessageError
    });
}

module.exports = posts;
