"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var express_1 = __importDefault(require("express"));
var socket_io_1 = __importDefault(require("socket.io"));
var ChatServer = /** @class */ (function () {
    function ChatServer() {
        //clientside: changeGroupMethod un-/subscribe im CLient
        this.currentGroup = "";
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }
    ChatServer.prototype.createApp = function () {
        this.app = express_1.default();
    };
    ChatServer.prototype.createServer = function () {
        this.server = http_1.createServer(this.app);
    };
    ChatServer.prototype.config = function () {
        this.port = process.env.PORT || ChatServer.PORT;
    };
    ChatServer.prototype.sockets = function () {
        this.io = socket_io_1.default(this.server);
    };
    ChatServer.prototype.listen = function () {
        var _this = this;
        this.server.listen(this.port, function () {
            console.log('Running server on port %s', _this.port);
        });
        this.io.on('connection', function (client) {
            console.log('Connected client on port %s.', _this.port);
            client.on('message', function (m) {
                console.log('[server](message): %s', JSON.stringify(m));
                console.log('[server](message): %s', m.text);
                _this.io.emit('message', m);
            });
            client.on('disconnect', function () {
                console.log('Client disconnected');
            });
            client.on('get-groups', function (user, call) {
                //database
                call(null);
            });
            client.on('get-messages', function (group, call) {
                //database
                call();
            });
            client.on('send-message', function (obj) {
                _this.io.in(obj.group.name).emit('message', JSON.stringify(obj.message));
            });
            client.on('login', function (user, call) {
                //databases
                call(true);
            });
            client.on('subscribe', function (grp) {
                client.join(grp.name);
                console.log("Client: " + client.id + " joined Room: " + grp.name);
            });
            client.on('unsubscribe', function (grp) {
                client.leave(grp.name);
                console.log("Client: " + client.id + " left Room: " + grp.name);
            });
        });
    };
    Object.defineProperty(ChatServer.prototype, "App", {
        get: function () {
            return this.app;
        },
        enumerable: true,
        configurable: true
    });
    ChatServer.PORT = 3000;
    return ChatServer;
}());
exports.ChatServer = ChatServer;
