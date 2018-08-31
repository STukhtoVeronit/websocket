const express = require('express');
const socket = require('socket.io');

//setup

const  app = express();
const server = app.listen(3000, function () {
   console.log('Listening...');
});

app.use(express.static('public'));

//Setup socket
var io = socket(server);

io.on('connection', function (socket) {
    // console.log('made socket connection', socket.id);
    socket.on('chat', function (data) {
       io.sockets.emit('chat', data);
    });
    socket.on('typing', function (data) {
       socket.broadcast.emit('typing', data);
    })
});