// require modules
const express = require('express');
const dotenv = require('dotenv');

// set up the app object
const app = express();

// configure the envirenment
dotenv.config({
    path: '.env'
})



// server
app.listen(process.env.PORT)
