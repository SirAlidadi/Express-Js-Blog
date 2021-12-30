const { findUsersWithRole } = require('@models/admin/posts');

module.exports = async (req, res) => {
    const error = req.flash('failed');
    const success = req.flash('succeed');

    const users = await findUsersWithRole(1);
    res.adminRender("admin/posts/create", { layout: "admin", users, success, error });
}
