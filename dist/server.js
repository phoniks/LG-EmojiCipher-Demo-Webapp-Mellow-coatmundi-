'use strict';

var _emojiCipherLgMc = require('emoji-cipher-lg-mc');

var express = require('express');
var app = express();
var port = 3000;


var path = require('path');

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/temp', function (request, response) {
  response.end((0, _emojiCipherLgMc.encode)('hello'));
});

app.use('/public', express.static(path.join(__dirname, '/public')));

app.listen(port, function (err) {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log('server is listening on ' + port);
});