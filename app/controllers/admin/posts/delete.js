const { deletePost } = require('@models/admin/posts');

module.exports = async (req, res) => {
    const ID = req.params.id;
    const result = await deletePost(ID);

    if(result) {
        req.flash('deleteMessage', `پست با ایدی ${ID} با موفقیت حذف گردید .`);
        res.redirect('/admin/posts');
    } else {
        req.flash('deleteMessageError', `حذف پست با ایدی ${ID} با مشکل مواجه شد .`);
        res.redirect('/admin/posts');
    }
}
