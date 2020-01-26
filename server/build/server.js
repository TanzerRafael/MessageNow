"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chatserver_1 = require("./chatserver");
var app = new chatserver_1.ChatServer().app;
exports.app = app;
