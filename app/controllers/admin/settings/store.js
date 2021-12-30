const { getSettings, setSettings } = require('@models/admin/settings');

module.exports = async (req, res) => {
    try {
        const settings = await getSettings()
        const keys = settings.map(setting => {
            return setting.name;
        });
        const data = req.body;
        keys.forEach(key => {
            setSettings(data[key] ? data[key] : '0', key);
        });
        req.flash('succeed', 'تنظیمات سایت با موفقیت ثبت شد .')
        res.redirect('/admin/settings');
    } catch (error) {
        req.flash('failed', 'ثبت تنظیمات سایت با مشکل مواجه شد .')
        res.redirect('/admin/settings');
    }
}