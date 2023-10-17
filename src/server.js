// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const express = require('express')
const path = require('path')
const process = require('process')
const app = express()
require('dotenv').config()

const port = process.env.PORT
const hostName = process.env.HOST_NAME

//Config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('samplefile.ejs')
})

app.get('/abc', function (req, res) {
  res.render('pageTow.ejs')
})

app.listen(port, hostName, () => {
  console.log(`Example App listening on host ${hostName} port ${port}`)
  console.log(`${hostName}:${port}`)
})