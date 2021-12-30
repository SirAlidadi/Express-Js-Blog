const db = require('@database/mysql');

exports.getSettings = async () => {
    const [row, ] = await db.query(`
        SELECT name, value FROM settings
    `);
    return row;
}

exports.setSettings = async (value, key) => {
    const [row, ] = await db.query(`
        UPDATE settings SET value='${value}' WHERE name='${key}' LIMIT 1
    `);
    return row;
}
