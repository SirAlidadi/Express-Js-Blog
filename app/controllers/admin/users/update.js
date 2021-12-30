const { edit } = require('@models/admin/users')
const Validator = require('validatorjs');


module.exports = async (req, res) => {
    const data = req.body;
    const {id} = req.params;

    let rules = {
        full_name: 'required|min:3',
        email: 'required|email',
        role: 'max:1|numeric|required'
    };
    const validation = new Validator(data, rules);
    const validate = validation.passes();

    if(validate) {
        await edit(data, id);
        req.flash('succeed', 'کاربر با موفقیت بروزرسانی شد .');
        res.redirect(`/admin/users/edit/${id}`);
    } else {
        req.flash('failed', 'اطلاعات وارد شده صحیح نمی باشد لطفا دوباره امتحان کنید .');
        res.redirect(`/admin/users/edit/${id}`);
    }
}