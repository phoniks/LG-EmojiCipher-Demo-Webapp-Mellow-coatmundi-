'use strict';

var _emojiCipherLgMc = require('emoji-cipher-lg-mc');

var express = require('express');
var app = express();


var path = require('path');

app.set('port', process.env.PORT || 3000);

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/temp', function (request, response) {
  response.end((0, _emojiCipherLgMc.encode)('hello'));
});

app.use('/public', express.static(path.join(__dirname, '/public')));

app.listen(app.get('port'), function (err) {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log('server is listening on ' + app.get('port'));
});