import mongoose = require('mongoose');

export interface Message {
    name: string;
    text: string;
    imageLink: string;
  }
  
/*const uri: string = 'mongodb://127.0.0.1:27017/messagenow';

mongoose.connect(uri, (err: any) => {
  if(err){
    console.log(err);
  }else{
    console.log("Succes on connection");
  }
});*/

  export const MsgSchema = new mongoose.Schema({
    name: {type: String, required: true},
    text: {type: String},
    imageLink: {type: String},
    group: String
  });
  
  const MsgDB = mongoose.model('MsgDB', MsgSchema);
  export default MsgDB; 