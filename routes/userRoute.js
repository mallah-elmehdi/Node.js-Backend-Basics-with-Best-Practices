// require modules
const express = require('express');

// handler
const userHandler = require('../handler/userHandler');

// set up the router
const router = express.Router();

// route '/'
router
    .route('/')
    .get(userHandler.getUser);

// exports
module.exports = router;
