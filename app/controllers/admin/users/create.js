module.exports = (req, res) => {
    const success = req.flash('succeed');
    const error = req.flash('failed');

    res.adminRender('admin/users/create', { layout: 'admin', success, error });
}