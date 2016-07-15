$(document).ready(function() {
  $("#alpha-input").bind("keyup change", function(e) {
    encodeInput(e)
  })

  $("#emoji-input").bind("keyup change", function(e) {
    decodeInput(e)
  })
});

$.post('/api/encode', {input: 'foobar'}, (emoji) => {
  console.log(emoji)
})

var encodeInput = (event) => {
  var alphaString = event.target.value
  $.post('/api/encode', {input: alphaString}, (emoji) => {
    updateEmoji(emoji)
  })  
  console.log(alphaString)
}

var decodeInput = (event) => {
  var alphaString = event.target.value
  $.post('/api/decode', {input: alphaString}, (val) => {
    updateAlpha(val)
  })  
  console.log(alphaString)
}


var updateEmoji = (newContent) => {
  var emojiOutput = $("#emoji-output")
  console.log(newContent)
  emojiOutput.html(newContent)
}

var updateAlpha = (newContent) => {
  var alphaOutput = $("#alpha-output")
  console.log(newContent)
  alphaOutput.html(newContent)
}