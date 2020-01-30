"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var MongoHelper = /** @class */ (function () {
    function MongoHelper() {
        // private uri: string = 'mongodb://127.0.0.1:27017/messagenow';
        this.uri = 'mongodb://192.168.99.100:27017';
    }
    /**
     * ConnectToDb
     */
    MongoHelper.prototype.ConnectToDb = function () {
        mongoose.connect(this.uri, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Succes on connection");
            }
        });
    };
    /**
     * DisconnectFromDb
     */
    MongoHelper.prototype.DisconnectFromDb = function () {
        //mongoose.disconnect();
    };
    return MongoHelper;
}());
exports.MongoHelper = MongoHelper;
