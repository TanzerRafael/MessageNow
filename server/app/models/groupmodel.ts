import mongoose = require('mongoose');
import Message from './messagemodel';

export interface Group {
    name: string;
  }

  /*const uri: string = 'mongodb://127.0.0.1:27017/messagenow';

  mongoose.connect(uri, (err: any) => {
    if(err){
      console.log(err);
    }else{
      console.log("Succes on connection");
    }
  });*/

  export const GroupSchema = new mongoose.Schema({
    name: {type: String, required: true},
    messages: [],
    users: [String]
  });
  
  const GroupDB = mongoose.model('GroupDB', GroupSchema);
  export default GroupDB; 