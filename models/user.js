'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
Promise = require('bluebird');
mongoose.Promise = Promise;

var userDataSchema = new Schema({
    name: String,
    sex: String,
    age: Number,
    country: String,
    dateCreated: {
        type: Date,
        default: Date.now
    }

}, { collection: 'userdata' });

module.exports = mongoose.model('userdata', userDataSchema);
