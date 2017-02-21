'use strict';
var express = require('express');
var app = express.Router();
var _ = require('lodash');


app.get('/signup', function (req, res, done) {
    res.send('All ok!!.. I can see signup response');
});

module.exports = app;