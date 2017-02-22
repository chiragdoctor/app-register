'use strict';

var mongoose = require('mongoose');
var config = require('config');

exports.connect = function () {
    var url;
    if (process.env.ENV === 'Test') {
        url = config.get('mongo.url') + '_Test';
    } else {
        url = config.get('mongo.url');
    }
    mongoose.connect(url);
};
