const { updatePost } = require('@models/admin/posts')

module.exports = async (req, res) => {
    const ID = req.params.id;
    const field = req.body;
    if (ID) {
        const updated = await updatePost(ID, field);
        updated ? req.flash('succeed', 'پست شما با موفقیت بروزرسانی شد .') : req.flash('failed', 'بروزرسانی پست شما با خطا مواجه شد .');
        res.redirect(`/admin/posts/edit/${ID}`);
    } else {
        req.flash('error', 'خطایی در دریافت پست رخ داده است .');
    }
}