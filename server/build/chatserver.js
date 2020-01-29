"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var express_1 = __importDefault(require("express"));
var socket_io_1 = __importDefault(require("socket.io"));
var cors_1 = __importDefault(require("cors"));
var ChatServer = /** @class */ (function () {
    function ChatServer() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        var corsOptions = {
            origin: '*:*',
            optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
        };
        this.app.use(cors_1.default(corsOptions));
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
        /*this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, *');
           next();
         });*/
    };
    ChatServer.prototype.sockets = function () {
        this.io = socket_io_1.default(this.server /*, {
            handlePreflightRequest: (req, res) => {
                const headers = {
                    "Access-Control-Allow-Headers": "Content-Type, Authorization",
                    "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
                    "Access-Control-Allow-Credentials": true
                };
                res.writeHead(200, headers);
                res.end();
            }
        }*/);
        this.io.origins(function (origin, callback) {
            //if (origin !== 'localhost:4200') {
            //    return callback('origin not allowed', false);
            //}
            callback(null, true);
        });
        // this.io.origins('*:*');
    };
    ChatServer.prototype.listen = function () {
        var _this = this;
        this.io.on('connection', function (client) {
            console.log('Connected client on port %s.', _this.port);
            client.on('message', function (m) {
                console.log('[server](message): %s', JSON.stringify(m));
                console.log('[server](message): %s', m.text);
                _this.io.emit('message', m);
            });
            client.on('disconnect', function (user) {
                console.log('Client disconnected');
            });
            client.on('logout', function (user) {
                console.log('** server **: logged out user ' + user);
            });
            client.on('get-groups', function (user, call) {
                //database
                console.log('** server **: send groups');
                call([{ name: 'grp1' }, { name: 'grp2' }]);
            });
            client.on('get-messages', function (group, call) {
                //database
                console.log('** server **: send messages');
                call([{ name: 'dude', text: 'deiser deise', imageLink: '' }]);
            });
            client.on('send-message', function (obj) {
                _this.io.in(obj.group.name).emit('new-message', obj.message);
                //this.io.in(obj.group.name)
                console.log('** server **: message was sent in group ' + obj.group.name);
            });
            client.on('login', function (user, call) {
                //databases
                console.log('** server **: user: ' + JSON.stringify(user) + ' logged in');
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
        this.server.listen(this.port, function () {
            console.log('Running server on port %s', _this.port);
        });
    };
    Object.defineProperty(ChatServer.prototype, "App", {
        get: function () {
            return this.app;
        },
        enumerable: true,
        configurable: true
    });
    ChatServer.PORT = 3030;
    return ChatServer;
}());
exports.ChatServer = ChatServer;
