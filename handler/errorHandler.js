// get the user route
const globalError = (err, req, res, next) => {
    try {
        return res.send(err);        
    } catch (err) {
        return res.send(err);
    }
}

module.exports = {
    globalError,
}
