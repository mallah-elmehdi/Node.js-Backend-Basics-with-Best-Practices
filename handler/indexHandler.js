// get the user route
const getIndex = (req, res) => {
    return res.json({
        success: true,
        page: "home page",
    });
}

module.exports = {
    getIndex,
}
