'use strict';

var app = require('./app');
var http = require('http');
var config = require('./config/default');


var server = http.createServer(app);
server.listen(app.get('port'));

console.log("app-register has started and listening on http://localhost:" + app.get('port'));
