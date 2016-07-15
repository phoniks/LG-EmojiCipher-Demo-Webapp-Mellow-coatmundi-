"use strict";

$(document).ready(function () {
  $(":input").bind("keyup change", function (e) {
    encodeInput(e);
  });
});

$.post('/api/encode', { input: 'foobar' }, function (emoji) {
  console.log(emoji);
});

var encodeInput = function encodeInput(event) {
  var alphaString = event.target.value;
  $.post('/api/encode', { input: alphaString }, function (emoji) {
    updateTranslation(emoji);
    // event.target.value = emoji
  });
  console.log(alphaString);
};

var updateTranslation = function updateTranslation(newContent) {
  var emojiContainer = $("#emoji-container");
  console.log(newContent);
  emojiContainer.html(newContent);
};