const db = require('@database/mysql');

exports.findAll = async () => {
    const [row, ] = await db.query(`
        SELECT * FROM users ORDER BY id DESC
    `);
    
    return row;
}

exports.create = async (data) => {
    return await db.query(`
        INSERT INTO users set ?
    `, data);
}

exports.findOne = async (id) => {
    const [row, ] = await db.query(`
        SELECT * FROM users WHERE users.id = ? LIMIT 1
    `, id);

    return row[0];
}

exports.edit = async (data, id) => {
    const [row, ] = await db.query(`
        UPDATE users SET full_name='${data.full_name}' ,email='${data.email}',role='${data.role}' WHERE id = ${id}
    `, data);

    return row[0];
}

exports.remove = async (id) => {
    const result = await db.query(`
        DELETE FROM users WHERE id = ?
    `, id);

    return result;
}
