const gravatar = require('gravatar');

module.exports = (email) => {
    return gravatar.url(email);
}
