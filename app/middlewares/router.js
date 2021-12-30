module.exports = (req,res,next) => {
    const error = req.flash('error');
    const success = req.flash('success');

    const userDetail = req.session.user

    res.adminRender = (template, options) => {
        const opt = { layout: 'admin', error, success, userDetail, ...options }
        res.render(template, opt);
    }
    next();
}