"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chatserver_1 = require("./chatserver");
var app = new chatserver_1.ChatServer().App;
exports.app = app;
app.get('/', function (req, res) {
    res.sendFile('C:\\Users\\Rafael\\Desktop\\Schule\\SVS\\messagenow\\server\\build\\index.html');
});
