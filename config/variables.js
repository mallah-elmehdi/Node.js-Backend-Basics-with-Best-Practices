// require modules
const dotenv = require('dotenv');

// configure the envirenment
dotenv.config({
    path: '.env'
})

// exports
module.exports = {
    port: process.env.PORT
}
