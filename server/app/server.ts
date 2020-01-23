import express from "express";
import http from "http";
import socketio from "socket.io";
import path from "path"


const port = 3000;
const app = express();
app.set("port", port);
const server = new http.Server(app);
const io = require("socket.io")(server);

/*const socketServer = socketio.listen(server, {
    path: '/whatsapp',
    // serveClient: false,
    // pingInterval: 10000,
    // pingTimeout: 5000,
    // cookie: false
});*/



app.get('/', (req, res) => {
    res.sendFile(path.resolve('./build/index.html'));
});

/*socketServer.on('connection', ws => {
    console.log('a user connected');

    ws.on('login', data => {
        console.log('login: ' + data);
    });

    ws.on('message', message => {
        console.log('message: ' + message);
        socketServer.emit('message', message);
    });

    ws.on('logout', data => {
        console.log('logout: ' + data);
    });

    ws.on('disconnect', () => {
        console.log('user disconnected');
    })
});*/

io.on("connection", (socket: any) => {
    console.log("User connected");

    socket.on("message", (msg: any) =>{

        io.emit("message", msg);
    });
});

server.listen(port, () => {
    console.log('listen on port: ' + port);
});