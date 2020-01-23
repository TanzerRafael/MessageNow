"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var path_1 = __importDefault(require("path"));
var port = 3000;
var app = express_1.default();
app.set("port", port);
var server = new http_1.default.Server(app);
var io = require("socket.io")(server);
/*const socketServer = socketio.listen(server, {
    path: '/whatsapp',
    // serveClient: false,
    // pingInterval: 10000,
    // pingTimeout: 5000,
    // cookie: false
});*/
app.get('/', function (req, res) {
    res.sendFile(path_1.default.resolve('./build/index.html'));
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
io.on("connection", function (socket) {
    console.log("User connected");
    socket.on("message", function (msg) {
        io.emit("message", msg);
    });
});
server.listen(port, function () {
    console.log('listen on port: ' + port);
});
