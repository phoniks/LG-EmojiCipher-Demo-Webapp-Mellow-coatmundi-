"use strict";

$(document).ready(function () {
  $("#alpha-input").bind("keyup change", function (e) {
    encodeInput(e);
  });

  $("#emoji-input").bind("keyup change", function (e) {
    decodeInput(e);
  });
});

$.post('/api/encode', { input: 'foobar' }, function (emoji) {
  console.log(emoji);
});

var encodeInput = function encodeInput(event) {
  var alphaString = event.target.value;
  $.post('/api/encode', { input: alphaString }, function (emoji) {
    updateEmoji(emoji);
  });
  console.log(alphaString);
};

var decodeInput = function decodeInput(event) {
  var alphaString = event.target.value;
  $.post('/api/decode', { input: alphaString }, function (val) {
    updateAlpha(val);
  });
  console.log(alphaString);
};

var updateEmoji = function updateEmoji(newContent) {
  var emojiOutput = $("#emoji-output");
  console.log(newContent);
  emojiOutput.html(newContent);
};

var updateAlpha = function updateAlpha(newContent) {
  var alphaOutput = $("#alpha-output");
  console.log(newContent);
  alphaOutput.html(newContent);
};