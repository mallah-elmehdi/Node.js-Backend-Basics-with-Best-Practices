// get the user route
const getUser = (req, res) => {
    return res.json({
        success: true,
        page: "user page"
    });

}

// get the user by id route
const getUserById = (req, res) => {
    return res.json({
        success: true,
        page: "user page",
        id: req.params.id,
    });
}

module.exports = {
    getUser,
    getUserById
}
