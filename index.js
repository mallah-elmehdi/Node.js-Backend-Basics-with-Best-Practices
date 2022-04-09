// require modules
const express = require('express');

// configure
const variables = require('./config/variables');

// set up the app object
const app = express();

// routes
const indexRoute = require('./routes/indexRoute');
const userRoute = require('./routes/userRoute');
const errorHandler = require('./handler/errorHandler');

// middleware
app.use("/", indexRoute);
app.use("/user", userRoute);
app.use("*", errorHandler.notFound);

// server
app.listen(process.env.PORT, () => {
    console.log('server runing...');
})
