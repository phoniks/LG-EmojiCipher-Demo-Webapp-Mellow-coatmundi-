const express = require('express')
const app = express()
const port = 3000
import { encode } from 'emoji-cipher-lg-mc'

let path = require('path')

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/temp', (request, response) => {
  response.end(encode('hello'))
})

app.use(
  '/public', express.static(path.join(__dirname, '/public'))
)

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
