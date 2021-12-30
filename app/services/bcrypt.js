const bcrypt = require('bcrypt');

exports.hash = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

exports.compare = (plainPassword ,hash) => {
    return bcrypt.compareSync(plainPassword, hash);
}
