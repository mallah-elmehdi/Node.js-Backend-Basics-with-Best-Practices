// require modules
const fs = require('fs');
const path = require('path');

// data
const userData = JSON.parse(fs.readFileSync(path.join('static', 'json', 'user.json'), {encoding: 'utf8', flag: 'r'}));

// get the user route
const getUser = (req, res, next) => {
    try {
        return res.status(200).redirect('/');
    } catch (err) {
        return next(err);
    }
}

// get the user by id route
const getUserById = (req, res, next) => {
    try {
        const userId = parseInt(req.params.id);
        if (!userId || userId > 100 || userId < 0) throw new Error("User Not Found");
        return res.status(200).json({
            status: "success",
            userTotal: userData.total,
            userInfo: userData.users[userId]
        });
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    getUser,
    getUserById
}
