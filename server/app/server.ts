import express from "express";
import http from "http";
//import * as socketio from "socket.io";
//import * as path from "path";
import socketio from "socket.io";

const port = 3000;
const app = express();
const server = new http.Server(app);
const socketServer = socketio.listen(server, {
    path: '/whatsapp',
    // serveClient: false,
    // pingInterval: 10000,
    // pingTimeout: 5000,
    // cookie: false
});

app.get('/', (req, res) => {
    res.send('hello');
});

socketServer.on('connection', ws => {
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
});

server.listen(port, () => {
    console.log('listen on port: ' + port);
});