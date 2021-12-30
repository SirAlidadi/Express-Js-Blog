const { findByEmail } = require('@models/auth');
const { compare } = require('@services/bcrypt');

exports.login = async (email, password) => {
    const user = await findByEmail(email);

    if(!user) {
        return false;
    }
    return compare(password, user.pass) ? user : false;
}