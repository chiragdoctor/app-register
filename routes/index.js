'use strict'

var router = require('express').Router();
var User = require('./../models/user');

var signupRoutes = require('../routes/api/signup')(User);
router.use('/api/signup', signupRoutes);

module.exports = router;
