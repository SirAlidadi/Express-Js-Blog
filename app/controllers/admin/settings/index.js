const {getSettings} = require('@models/admin/settings');

module.exports = async (req, res) => {
    const settings = await getSettings();

    const error = req.flash('failed');
    const success = req.flash('succeed');

    let options = {}
    settings.forEach(option => {
        options = {
            ...options,
            [option.name]: option.value
        }
    });

    res.adminRender('admin/settings', { options, error, success, helpers: {
            activeCommnets: function (option){
                return parseInt(options["enable_comment"]) === 1 ? 'checked' : '';
            },
            activeSignin: function (option){
                return parseInt(options["enable_signin"]) === 1 ? 'checked' : '';
            }
        }
    });
}