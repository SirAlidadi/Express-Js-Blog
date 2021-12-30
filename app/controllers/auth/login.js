const { login } = require('@services/auth');

exports.renderLogin = (req,res) => {
    const success = req.flash('succeed');
    const error = req.flash('failed');

    res.render('auth/login', { layout: false, success, error });
}

exports.login = async (req,res) => {
    const { email, password } = req.body;
    const user = await login(email, password);

    if (!user) {
        req.flash('failed', 'ایمیل یا کلمه ی عبور معتبر نمی باشد .');
        return res.redirect('/login');
    } else {
        req.session.user = user
        res.redirect('/admin/dashboard');
    }
}