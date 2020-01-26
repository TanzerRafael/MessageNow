"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var ChatServer = /** @class */ (function () {
    /**
     *
     */
    function ChatServer() {
        this._app = require('express');
        this.port = ChatServer.PORT;
        //this._app.use(cors());
        this.server = require('http').createServer(this._app);
        this.io = require('socket.io')();
    }
    Object.defineProperty(ChatServer.prototype, "app", {
        get: function () {
            return this._app;
        },
        enumerable: true,
        configurable: true
    });
    ChatServer.prototype.listen = function () {
        var _this = this;
        this.server.listen(this.port);
        this.io.on(constants_1.ChatEvent.CONNECT, function (client) {
            console.log('User connected');
            client.on(constants_1.ChatEvent.MESSAGE, function (m) {
                console.log('[server](msg): %s', JSON.stringify(m));
                _this.io.emit('message', m);
            });
            client.on(constants_1.ChatEvent.DISCONNECT, function () {
                console.log('client disconnected');
            });
        });
    };
    ChatServer.PORT = 3000;
    return ChatServer;
}());
exports.ChatServer = ChatServer;
