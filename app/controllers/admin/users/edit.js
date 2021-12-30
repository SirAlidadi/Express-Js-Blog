const { findOne } = require('@models/admin/users')

module.exports = async (req, res) => {
    const id = req.params.id;
    const user = await findOne(id);
    const success = req.flash('succeed');
    const error = req.flash('failed');

    if (user) {
        res.adminRender('admin/users/edit', { layout: 'admin', user, success, error, helpers: {
                isRole: function (role, options) {
                    return user.role === role ? options.fn(this) : options.inverse(this);
                }
            }
        });
    } else {
        req.flash('failed', 'کاربر مورد نظر یافت نشد .');
        res.redirect('/admin/users');
    }
}