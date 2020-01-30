import GroupDB from '../models/groupmodel'
import UserDB from "../models/user";
import MsgDB from "../models/messagemodel";

export let getGroups = async (userName: String) => {
    let grps;
    try{
        grps = await GroupDB.find({ users: userName}).lean();
    }catch(err){
        console.log(err);
    }
    console.log("Database[getGroups]: " + grps + "Gruppen auf " + userName);
    return grps;
}

export let getMessages = async (grpName: String) => {
    let msgs;
    try{
        msgs = await MsgDB.find({ group: grpName }).lean();
    }catch(err){
        console.log(err);
    }
    console.log("Database[getMessages]: " + msgs + "Nachrichte auf " + grpName);
    return msgs;
}

export let getUser = async (userName: String, password: String) => {
    console.log("Controller: User::" + userName + password);
    try{
        return await UserDB.findOne({ name: userName, password: password });
    }catch(err){
        console.log(err);
    }
}