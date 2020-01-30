"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chatserver_1 = require("./chatserver");
var app = new chatserver_1.ChatServer().App;
exports.app = app;
app.get('/file', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
