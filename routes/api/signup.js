'use strict';
var express = require('express');
var bookRouter = express.Router();
var _ = require('lodash');

var routes = function (User) {
    var signupController = require('./../../controllers/signupController')(User);
    bookRouter.route('/')
            .post(signupController.saveUser);
    return bookRouter;
};



module.exports = routes;