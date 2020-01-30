import GroupDB from "../models/groupmodel";
import UserDB from "../models/user";
import MsgDB from "../models/messagemodel";

export class InitDatabase{

    /**
     *Ignorier de Errors de kuman, soiat trotzdem gehn.
     */
    constructor() {
        this.initialize();
    }

    private initialize() {
        const group1 = new GroupDB({
            name: "nachts vor dem PC",
            messages: [{name: "Legend42o", text:"look at this!!", imageLinke: "https://previews.123rf.com/images/anatolymas/anatolymas1607/anatolymas160700007/62128577-3d-small-person-standing-in-sad-pose-next-to-the-word-no-3d-image-white-background-.jpg"}],
            users: ["Legend42o", "SisOne"]
        });
        const group2 = new GroupDB({
            name: "Lorem ipsum",
            messages: [{name: "Zetta", text:"nope", imageLink: ""}, {name: "Legend42o", text:"yeah", imageLink: ""}],
            users: ["Legend42o", "Zetta"]
        });

        const user1 = new UserDB({
            name: "legend42o",
            password: "6969",
            groups: ["Nachts vor dem PC", "Lorem ipsum"]
        });
        const user2 = new UserDB({
            name: "Zetta",
            password: "qwert",
            groups: ["Lorem ipsum"]
        });
        const user3 = new UserDB({
            name: "SisOne",
            password: "123456789",
            groups: ["Nachts vor dem PC"]
        });

        const msg1 = new MsgDB({
            name: "Legend42o",
            text: "look at thiss!!",
            imageLink: "https://previews.123rf.com/images/anatolymas/anatolymas1607/anatolymas160700007/62128577-3d-small-person-standing-in-sad-pose-next-to-the-word-no-3d-image-white-background-.jpg",
            group: "Nachts vor dem PC"
        });
        const msg2 = new MsgDB({
            name: "Zetta",
            text: "nope",
            imageLink: "",
            group: "Lorem ipsum"
        });
        const msg3 = new MsgDB({
            name: "Legend42o",
            text: "yeah",
            imageLink: "",
            group: "Lorem ipsum"
        });


        group1.save().then(()=> console.log("daabase savedsdsadsasd"));
        group2.save().then(()=> console.log("daabase save"));

        user1.save().then(()=> console.log("daabase save"));;
        user2.save().then(()=> console.log("daabase save"));;
        user3.save().then(()=> console.log("daabase save"));;

        msg1.save().then(()=> console.log("daabase save"));;
        msg2.save().then(()=> console.log("daabase save"));;
        msg3.save().then(()=> console.log("daabase save"), (err) => {
            console.log("error");
                });
    }
}