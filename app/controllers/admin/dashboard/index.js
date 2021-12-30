const { totalMembers, totalPosts, totalComments, totalViews } = require('@models/admin/statistics');

const index = async (req, res) => {
    const totalUsers = {
        countMembers: await totalMembers(),
        countPosts: await totalPosts(),
        countComments: await totalComments(),
        countViews: await totalViews()
    }
    res.adminRender('admin/dashboard', { ...totalUsers });
}

module.exports = index
