import mongoose = require('mongoose');

export class MongoHelper{
    // private uri: string = 'mongodb://127.0.0.1:27017/messagenow';
    private uri: string = 'mongodb://192.168.99.100:27017';

    /**
     * ConnectToDb
     */
    public ConnectToDb() {
        mongoose.connect(this.uri, (err: any) => {
            if(err){
              console.log(err);
            }else{
              console.log("Succes on connection");
            }
          });
    }
    /**
     * DisconnectFromDb
     */
    public DisconnectFromDb() {
        //mongoose.disconnect();
    }
}