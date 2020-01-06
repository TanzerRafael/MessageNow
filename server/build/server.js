"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
//import * as socketio from "socket.io";
//import * as path from "path";
var socket_io_1 = __importDefault(require("socket.io"));
var port = 3000;
var app = express_1.default();
var server = new http_1.default.Server(app);
var socketServer = socket_io_1.default.listen(server, {
    path: '/whatsapp',
});
app.get('/', function (req, res) {
    res.send('hello');
});
socketServer.on('connection', function (ws) {
    console.log('a user connected');
    ws.on('login', function (data) {
        console.log('login: ' + data);
    });
    ws.on('message', function (message) {
        console.log('message: ' + message);
        socketServer.emit('message', message);
    });
    ws.on('logout', function (data) {
        console.log('logout: ' + data);
    });
    ws.on('disconnect', function () {
        console.log('user disconnected');
    });
});
server.listen(port, function () {
    console.log('listen on port: ' + port);
});
