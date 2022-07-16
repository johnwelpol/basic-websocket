const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin : "*" }
})

io.on('connection', (socket) => {
    console.log("a user connected " )

    socket.on('message', (message) => {
        console.log(message);
        io.emit('message', `${socket.id.substr(0, 2)}: ${message}`)
    })
})


http.listen(8300, () => { console.log("listening on localhost:8300"); })