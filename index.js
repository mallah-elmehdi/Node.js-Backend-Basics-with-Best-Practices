// require modules
const express = require('express');
const dotenv = require('dotenv');

// set up the app object
const app = express();

// configure the envirenment
dotenv.config({
    path: '.env'
})

// routes
const userRoute = require('./routes/userRoute');

// middleware
app.use("/user", userRoute);

// server
app.listen(process.env.PORT, () => {
    console.log('server runing...');
})
