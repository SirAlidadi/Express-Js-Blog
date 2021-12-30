const { remove } = require('@models/admin/users');

module.exports = async (req, res) => {
    const id = req.params.id;
    const result = await remove(id);

    if (result) {
        req.flash('succeed', 'یوزر با موفقیت حذف گردید .');
        res.redirect('/admin/users');
    } else {
        req.flash('failed', 'حذف یوزر با مشکل مواجه شد لطفا دوباره امتحان نمایید .');
        res.redirect('/admin/users');
    }
}