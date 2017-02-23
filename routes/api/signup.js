'use strict';
var express = require('express');
var signupRouter = express.Router();
var _ = require('lodash');

var routes = function (User) {
    var signupController = require('./../../controllers/signupController')(User);
    signupRouter.route('/')
            .post(signupController.saveUser);
    return signupRouter;
};



module.exports = routes;