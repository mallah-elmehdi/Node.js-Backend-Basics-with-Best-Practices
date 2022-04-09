// get the user route
const getIndex = (req, res, next) => {
    try {
        return res.status(200).send("home");
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    getIndex,
}
