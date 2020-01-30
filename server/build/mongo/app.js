"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var groupmodel_1 = __importDefault(require("../models/groupmodel"));
var user_1 = __importDefault(require("../models/user"));
var messagemodel_1 = __importDefault(require("../models/messagemodel"));
var InitDatabase = /** @class */ (function () {
    /**
     *Ignorier de Errors de kuman, soiat trotzdem gehn.
     */
    function InitDatabase() {
        this.initialize();
    }
    InitDatabase.prototype.initialize = function () {
        var group1 = new groupmodel_1.default({
            name: "Nachts vor dem PC",
            messages: [{ name: "Legend42o", text: "look at this!!", imageLinke: "https://previews.123rf.com/images/anatolymas/anatolymas1607/anatolymas160700007/62128577-3d-small-person-standing-in-sad-pose-next-to-the-word-no-3d-image-white-background-.jpg" }],
            users: ["Legend42o", "SisOne"]
        });
        var group2 = new groupmodel_1.default({
            name: "Lorem ipsum",
            messages: [{ name: "Zetta", text: "nope", imageLink: "" }, { name: "Legend42o", text: "yeah", imageLink: "" }],
            users: ["Legend42o", "Zetta"]
        });
        var user1 = new user_1.default({
            name: "Legend42o",
            password: "6969",
            groups: ["Nachts vor dem PC", "Lorem ipsum"]
        });
        var user2 = new user_1.default({
            name: "Zetta",
            password: "qwert",
            groups: ["Lorem ipsum"]
        });
        var user3 = new user_1.default({
            name: "SisOne",
            password: "123456789",
            groups: ["Nachts vor dem PC"]
        });
        var msg1 = new messagemodel_1.default({
            name: "Legend42o",
            text: "look at thiss!!",
            imageLink: "https://previews.123rf.com/images/anatolymas/anatolymas1607/anatolymas160700007/62128577-3d-small-person-standing-in-sad-pose-next-to-the-word-no-3d-image-white-background-.jpg",
            group: "Nachts vor dem PC"
        });
        var msg2 = new messagemodel_1.default({
            name: "Zetta",
            text: "nope",
            imageLink: "",
            group: "Lorem ipsum"
        });
        var msg3 = new messagemodel_1.default({
            name: "Legend42o",
            text: "yeah",
            imageLink: "",
            group: "Lorem ipsum"
        });
        group1.save().then(function () { return console.log("daabase savedsdsadsasd"); });
        group2.save().then(function () { return console.log("daabase save"); });
        user1.save().then(function () { return console.log("daabase save"); });
        ;
        user2.save().then(function () { return console.log("daabase save"); });
        ;
        user3.save().then(function () { return console.log("daabase save"); });
        ;
        msg1.save().then(function () { return console.log("daabase save"); });
        ;
        msg2.save().then(function () { return console.log("daabase save"); });
        ;
        msg3.save().then(function () { return console.log("daabase save"); }, function (err) {
            console.log("error");
        });
    };
    return InitDatabase;
}());
exports.InitDatabase = InitDatabase;
