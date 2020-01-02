"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var socketio = __importStar(require("socket.io"));
//import * as path from "path";
var port = 3000;
var app = express_1.default();
var server = new http_1.default.Server(app);
var socketServer = socketio.listen(server, {
    path: '/whatsapp',
});
server.listen(port, function () {
    console.log('listen on port: ' + port);
});
app.get('/', function (req, res) {
    res.send('hello');
});
socketServer.on('connection', function (ws) {
    console.log('a user connected');
    ws.on('message', function (message) {
        console.log('message: ' + message);
        socketServer.emit('message', message);
    });
    ws.on('disconnect', function () {
        console.log('user disconnected');
    });
});
