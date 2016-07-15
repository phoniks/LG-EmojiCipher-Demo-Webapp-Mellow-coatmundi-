$(document).ready(function() {
  $(":input").bind("keyup change", function(e) {
    encodeInput(e)
  })
});

$.post('/api/encode', {input: 'foobar'}, (emoji) => {
  console.log(emoji)
})

var encodeInput = (event) => {
  var alphaString = event.target.value
  $.post('/api/encode', {input: alphaString}, (emoji) => {
    updateTranslation(emoji)
    // event.target.value = emoji
  })  
  console.log(alphaString)
}

var updateTranslation = (newContent) => {
  var emojiContainer = $("#emoji-container")
  console.log(newContent)
  emojiContainer.html(newContent)
}