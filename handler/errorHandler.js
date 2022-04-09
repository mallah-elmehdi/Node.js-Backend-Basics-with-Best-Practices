// get the user route
const globalError = (err, req, res, next) => {
    try {
        return res.send(err.message);
    } catch (err) {
        return res.send(err);
    }
}

const notFound = (req, res) => {
    return res.send("Page Not Found");
}

module.exports = {
    globalError,
    notFound
}
