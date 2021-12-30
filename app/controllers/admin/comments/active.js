const { active } = require('@models/admin/comments');

module.exports = async (req, res) => {
    try {
        const id = req.params.id;
        const update = await active(id);

        if(update) {
            req.flash('success', 'کامنت با موفقیت پذیرفته شد .');
            res.redirect('/admin/comments');
        }
    } catch {
        req.flash('error', 'مشکلی در پذیرفتن کامنت پیش امد .');
        res.redirect('/admin/comments');
    }
}