'use strict';

var _emojiCipherLgMc = require('emoji-cipher-lg-mc');

var express = require('express');
var app = express();


var path = require('path');

app.set('port', process.env.PORT || 3000);

var bodyParser = require('body-parser');

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

// build an API for encode and decode
app.post('/api/encode', function (request, response) {
  response.set({ 'content-type': 'text/plain; charset=utf-8' });
  response.end((0, _emojiCipherLgMc.encode)(request.body.input));
});

app.get('/temp', function (request, response) {
  response.set({ 'content-type': 'text/html; charset=utf-8' });
  response.end((0, _emojiCipherLgMc.encode)('hello'));
});

app.use(express.static(path.join(__dirname, '/public')));

app.listen(app.get('port'), function (err) {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log('server is listening on ' + app.get('port'));
});