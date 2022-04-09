// require modules
const express = require('express');

// handler
const indexHandler = require('../handler/indexHandler');
const errorHandler = require('../handler/errorHandler');

// set up the router
const router = express.Router();

// route '/'
router
    .route('/')
    .get(
        indexHandler.getIndex,
        errorHandler.globalError
    );

// exports
module.exports = router;
