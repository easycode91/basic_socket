const express = require('express');
const path = require('path')
const morgan = require('morgan')
const socketIO = require('socket.io');
const http = require('http')

//Init
const app = express();


//Settings
app.set('port',process.env.PORT || 3000);
const server = http.createServer(app);

//static file
app.use(express.static(path.resolve(__dirname,'../public')));

//Middleware
app.use(morgan('dev'));

//Setting socket.IO

module.exports.io = socketIO(server);
require('./socket/socket')






//Running server
server.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
    
})