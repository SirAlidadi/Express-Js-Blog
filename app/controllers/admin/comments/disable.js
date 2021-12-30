const { disable } = require('@models/admin/comments');

module.exports = async (req, res) => {
    try {
        const id = req.params.id;
        const update = await disable(id);

        if(update) {
            req.flash('success', 'کامنت با موفقیت غیر فعال شد .');
            res.redirect('/admin/comments');
        }
    } catch {
        req.flash('error', 'مشکلی در غیر فعال کردن کامنت پیش امد .');
        res.redirect('/admin/comments');
    }
}