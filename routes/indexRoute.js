// require modules
const express = require('express');

// handler
const indexHandler = require('../handler/indexHandler');

// set up the router
const router = express.Router();

// route '/'
router
    .route('/')
    .get(indexHandler.getIndex);

// exports
module.exports = router;
