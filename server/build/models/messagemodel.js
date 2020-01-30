"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
/*const uri: string = 'mongodb://127.0.0.1:27017/messagenow';

mongoose.connect(uri, (err: any) => {
  if(err){
    console.log(err);
  }else{
    console.log("Succes on connection");
  }
});*/
exports.MsgSchema = new mongoose.Schema({
    name: { type: String, required: true },
    text: { type: String },
    imageLink: { type: String },
    group: String
});
var MsgDB = mongoose.model('MsgDB', exports.MsgSchema);
exports.default = MsgDB;
