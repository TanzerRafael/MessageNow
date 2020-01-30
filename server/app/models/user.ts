import mongoose = require('mongoose');

export interface User {
    name: string;
    password: string;
  }

/*const uri: string = 'mongodb://127.0.0.1:27017/messagenow';

mongoose.connect(uri, (err: any) => {
  if(err){
    console.log(err);
  }else{
    console.log("Succes on connection");
  }
});*/

export const UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  password: {type: String, required: true},
  groups: [String]
});

const UserDB = mongoose.model('UserDB', UserSchema);
export default UserDB; 