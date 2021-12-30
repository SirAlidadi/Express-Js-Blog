const { remove } = require('@models/admin/comments');

module.exports = async (req, res) => {
    try {
        const id = req.params.id;
        const update = await remove(id);

        if(update) {
            req.flash('success', 'کامنت با موفقیت حذف شد .');
            res.redirect('/admin/comments');
        }
    } catch {
        req.flash('error', 'مشکلی در حذف کردن کامنت پیش امد .');
        res.redirect('/admin/comments');
    }
}