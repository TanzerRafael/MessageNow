"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requestLoggerMiddleware = function (req, res, next) {
    console.info(req.method + " " + req.url);
    var start = new Date().getTime();
    res.on('finish', function () {
        var elapsed = new Date().getTime() - start;
        console.info(req.method + " " + req.originalUrl + " " + res.status + "ms");
    });
    next();
};
exports.requestLoggerMiddleware = requestLoggerMiddleware;
