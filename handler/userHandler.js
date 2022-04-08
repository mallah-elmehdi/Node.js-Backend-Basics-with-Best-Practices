// get the user route
const getUser = (req, res) => {
    console.log(req.originalUrl);
    return res.json({success: true});
}

module.exports = {
    getUser,
}
