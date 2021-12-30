const db = require('@database/mysql');

exports.totalMembers = async () => {
    const [row, ] = await db.query(`select count(id) as totalMembers from users`);
    return row[0].totalMembers;
}

exports.totalPosts = async () => {
    const [row, ] = await db.query(`select count(id) as totalPosts from posts`);
    return row[0].totalPosts;
}

exports.totalComments = async () => {
    const [row, ] = await db.query(`select count(id) as totalComments from comments`);
    return row[0].totalComments;
}

exports.totalViews = async () => {
    const [row, ] = await db.query(`select sum(views) as totalViews from posts`);
    return row[0].totalViews ? row[0].totalViews : 0;
}