const Validator = require('validatorjs');
const { create } = require('@models/admin/users')
const { hash } = require('@services/bcrypt');

module.exports = async (req, res) => {
    const data = req.body;

    let rules = {
        full_name: 'required|min:3',
        email: 'required|email',
        pass: 'min:8|required',
        role: 'max:1|numeric|required'
    };

    const validation = new Validator(data, rules);
    const validate = validation.passes();
    if(validate) {
        try {
            data.pass = hash(data.pass);
            await create(data);
            req.flash('succeed', 'یوزر با موفقیت در سایت ثبت نام شد .');
            res.redirect('/admin/users/create');
        } catch (error) {
            req.flash('failed', 'ایجاد یوزر با مشکل مواجه شد لطفا دوباره امتحان کنید .');
            res.redirect('/admin/users/create');
        }
    } else {
        req.flash('failed', 'اطلاعات وارد شده صحیح نمی باشد لطفا دوباره امتحان کنید .');
        res.redirect('/admin/users/create');
    }
}