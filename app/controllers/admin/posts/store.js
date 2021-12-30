const Validator = require('validatorjs');
const { storePost } = require('@models/admin/posts');
const translate = require('@services/translate')

module.exports = async (req, res) => {
    const data = req.body;
    const rules = {
        title: 'required|min:3',
        slug: 'required|min:3',
        content: 'required|min:20',
        status: 'required|max:1',
        author_id: 'required|max:1'
    };
    const validation = new Validator(data, rules);

    if(validation.passes()) {
        storePost(req.body);
        req.flash('succeed', 'پست با موفقیت در دیتابیس ذخیره شد .');
        res.redirect('/admin/posts/create');
    } else {
        const errors = await translate(validation.errors.all());
        const faErrors = [];

        for (key in errors) {
            faErrors.push(errors[key][0]);
        }
        req.flash('failed', faErrors[0]);

        res.redirect('/admin/posts/create');
    }
}