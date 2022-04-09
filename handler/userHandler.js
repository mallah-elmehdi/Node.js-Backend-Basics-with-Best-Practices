// require modules
const fs = require('fs');
const path = require('path');

// data
const userData = JSON.parse(fs.readFileSync(path.join('static', 'json', 'user.json'), {encoding: 'utf8', flag: 'r'}));

// get the user route
const getUser = (req, res) => {
    return res.redirect('/');
}

// get the user by id route
const getUserById = (req, res, next) => {
    try {
        return res.status(200).json({
            status: "success",
            userTotal: userData.total,
            userInfo: userData.users[parseInt(req.params.id)]
        });
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    getUser,
    getUserById
}
