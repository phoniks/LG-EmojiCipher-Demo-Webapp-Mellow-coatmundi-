'use strict';

var express = require('express');
var app = express();
var port = 3000;

app.get('/', function (request, response) {
  var path = require('path');
  response.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log('server is listening on ' + port);
});