const db = require('@database/mysql');

exports.findByEmail = async (email) => {
    const [row, ] = await db.query(`
        SELECT *
        FROM users
        WHERE email=?
        LIMIT 1
    `, email);

    return row[0] ? row[0] : false;
}

exports.insertUser = async (data) => {
    const [row, ] = await db.query(`
        INSERT INTO users set ?
    `, data);

    return row;
}
