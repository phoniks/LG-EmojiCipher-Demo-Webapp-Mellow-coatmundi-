const express = require('express')  
const app = express()  
const port = 3000


app.get('/', (request, response) => {
  let path = require('path')
  response.sendFile(path.join(__dirname,'/views/index.html'))
  
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})