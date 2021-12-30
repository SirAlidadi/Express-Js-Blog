const db = require('@database/mysql');

exports.findAll = async () => {
    const [row, ] = await db.query(`
        select * from comments
    `);

    return row;
}

exports.remove = async (id) => {
    const result  = db.query(`
        DELETE FROM comments WHERE comments.id = ${id} 
    `);
    return result;
}

exports.active = async (id) => {
    const result  = db.query(`
        UPDATE comments SET status = 1 WHERE id = ${id}
    `);
    return result;
}

exports.disable = async (id) => {
    const result  = db.query(`
        UPDATE comments SET status = 0 WHERE id = ${id}
    `);
    return result;
}
