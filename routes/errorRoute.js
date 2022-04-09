// require modules
const express = require('express');

// handler
const errorHandler = require('../handler/errorHandler');

// set up the router
const router = express.Router();

// route '/'
router
    .route('/')
    .get(errorHandler.globalError);

// exports
module.exports = router;
