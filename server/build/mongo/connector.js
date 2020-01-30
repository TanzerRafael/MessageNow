"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var MongoHelper = /** @class */ (function () {
    function MongoHelper() {
        this.uri = 'mongodb://127.0.0.1:27017/messagenow';
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
