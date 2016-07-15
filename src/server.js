const express = require('express')
const app = express()
import { encode, decode } from 'emoji-cipher-lg-mc'

let path = require('path')

app.set('port', (process.env.PORT || 3000));

var bodyParser = require('body-parser')

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// build an API for encode and decode
app.post('/api/encode', (request, response) => {
  response.set({ 'content-type': 'text/plain; charset=utf-8' })
  response.end(encode(request.body.input))
})

app.post('/api/decode', (request, response) => {
  response.set({ 'content-type': 'text/plain; charset=utf-8' })
  response.end(decode(request.body.input))
})

app.use(
  express.static(path.join(__dirname, '/public'))
)

app.listen(app.get('port'), (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${app.get('port')}`)
})

