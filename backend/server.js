var app = require('express')();
var http = require('http').createServer(app);

var io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (msg) => {
        console.log(msg);
        socket.broadcast.emit('message-broadcast', msg);
    });
});

app.get('/', (req, res) => res.send('hello!'));
http.listen(3000, () => {
    console.log('listening on *:3000');
});