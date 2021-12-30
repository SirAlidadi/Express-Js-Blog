const Validator = require('validatorjs');
const { insertUser, findByEmail } = require('@models/auth');
const { hash } = require('@services/bcrypt');


exports.renderRegister = (req, res) => {
    const success = req.flash('succeed');
    const error = req.flash('failed');

    res.render('auth/register', { layout: false, success, error });
}

exports.register = async (req, res) => {
    try {
        const { full_name, email, pass } = req.body;
        const data = {
            full_name,
            email,
            pass
        }
        const rules = {
            full_name: 'required|min:5',
            email: 'required|email',
            pass: 'required|min:8'
        }
        const validation = new Validator(data, rules);

        if(validation.passes()) {
            const emailExists = await findByEmail(email);
            if(emailExists.email) {
                req.flash('failed', 'این ایمیل قبلا در سایت ثبت نام کرده است .');
                return res.redirect('/register');
            }
            data.pass = hash(data.pass);
            await insertUser(data);
            req.flash('succeed', 'شما با موفقیت در سایت ثبت نام کردید.');
            return res.redirect('/register');
        } else {
            req.flash('failed', 'اطلاعات واد شده معتبر نمی باشد لطفا دوباره تلاش کنید.');
            return res.redirect('/register');
        }
    } catch {
        req.flash('failed', ' ثبت نام شما با شکست رو به رو شد.');
        return res.redirect('/register');
    }

}
