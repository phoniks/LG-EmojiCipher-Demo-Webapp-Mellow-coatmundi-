const express = require('express')
const app = express()
import { encode } from 'emoji-cipher-lg-mc'

let path = require('path')

app.set('port', (process.env.PORT || 3000));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/temp', (request, response) => {
  response.end(encode('hello'))
})

app.use(
  '/public', express.static(path.join(__dirname, '/public'))
)

app.listen(app.get('port'), (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${app.get('port')}`)
})


