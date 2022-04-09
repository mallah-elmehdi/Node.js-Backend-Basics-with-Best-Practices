// require modules
const express = require('express');

// handler
const userHandler = require('../handler/userHandler');
const errorHandler = require('../handler/errorHandler');

// set up the router
const router = express.Router();

// route '/'
router
    .route('/')
    .get(
        userHandler.getUser,
        errorHandler.globalError
    );
//
router
    .route('/:id')
    .get(
        userHandler.getUserById,
        errorHandler.globalError
    );

// exports
module.exports = router;
