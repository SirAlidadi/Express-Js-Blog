const db = require('@database/mysql');

exports.findAll = async () => {
    const [row, ] = await db.query(`
        SELECT p.*, u.full_name
        FROM posts p
        left join users u on p.author_id=u.id
    `);
    return row;
}
exports.findUsersWithRole = async (role) => {
    const [row, ] = await db.query(`
        SELECT *
        FROM users
        where role = ${role}
    `);
    return row;
}

exports.storePost = async (data) => {
    const result = db.query(`INSERT INTO posts SET ?`, data);
    return result;
}

exports.deletePost = async (ID) => {
    const result = await db.query(`
        DELETE FROM posts where id = ?
    `, ID);

    return result;
}

exports.find = async (ID) => {
    const [row, ] = await db.query(`
        SELECT * FROM posts where id = ?
    `, ID);

    return row[0];
}

exports.updatePost = async (ID, updateField) => {
    const result = await db.query(`
        UPDATE posts
        SET ?
        WHERE id=?
    `, [updateField, ID]);

    return result;
}
