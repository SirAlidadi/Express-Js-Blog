module.exports = (req, res, next) => {
    try {
        const user = req.session.user;
        if(parseInt(user.role) === 1) {
            next();
        } else {
            req.flash('failed', 'شما امکان دسترسی به این صفحه را ندارید .');
            res.redirect('/login');
        }
    } catch {
        res.redirect('/login');
    }
}