const { findAll } = require('@models/admin/users');
const jalaliDate = require('@services/jalaliDate');

module.exports = async (req, res) => {
    const users = await findAll()
    const error = req.flash('failed')[0] ? req.flash('failed')[0] : req.flash('failed');

    const finalUsers = users.map(user => {
        user.jalali_date = jalaliDate(user.created_at);
        return user;
    })
    res.adminRender('admin/users', { users: finalUsers, error, helpers: {
            whatsRole: function (role, options) {
                switch (role) {
                    case 1:
                        return 'مدیر'
                    case 0:
                        return 'کاربر عادی'
                }
            },
            isAdmin: (role, options) => (role !== 1 ? options.fn(this) : options.inverse(this))
        }
    });
}