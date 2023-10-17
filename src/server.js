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
const process = require('process')
const app = express()
require('dotenv').config()

const port = process.env.PORT
const hostName = process.env.HOST_NAME

const configViewEngine = require('./config/viewEngine')
const routerWeb = require('./routes/routeWeb')

//Config router
app.use('/', routerWeb) //Đường link giống như version của API v1, v2


app.listen(port, hostName, () => {
  console.log(`Example App listening on host ${hostName} port ${port}`)
  console.log(`${hostName}:${port}`)
})