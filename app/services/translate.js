const translate = require('translate-google');

module.exports = async (text) => {
    const message = await translate(text, {from: 'en', to: 'fa'});
    return message;
}
