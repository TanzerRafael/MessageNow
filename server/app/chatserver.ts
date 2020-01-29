  
import { createServer, Server } from 'http';
import express from 'express';
import socketIo, { Socket } from 'socket.io';
import cors from 'cors';

import { Message } from './models/messagemodel';
import {User} from './models/user';
import {Group} from './models/groupmodel';

export class ChatServer {
    public static readonly PORT:number = 3030;
    private app!: express.Application;
    private server!: Server;
    private io!: SocketIO.Server;
    private port!: string | number;


    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();

        let corsOptions = {
            origin: '*:*',
            optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
          }

        this.app.use(cors(corsOptions));

        this.listen();
    }

    private createApp(): void {
        this.app = express();
    }

    private createServer(): void {
        this.server = createServer(this.app);
    }

    private config(): void {
        this.port = process.env.PORT || ChatServer.PORT;

        /*this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, *');
           next();
         });*/
    }

    private sockets(): void {
        this.io = socketIo(this.server /*, {
            handlePreflightRequest: (req, res) => {
                const headers = {
                    "Access-Control-Allow-Headers": "Content-Type, Authorization",
                    "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
                    "Access-Control-Allow-Credentials": true
                };
                res.writeHead(200, headers);
                res.end();
            }
        }*/);
        this.io.origins((origin, callback) => {
            //if (origin !== 'localhost:4200') {
            //    return callback('origin not allowed', false);
            //}
            callback(null, true);
          });

        // this.io.origins('*:*');
    }

    private listen(): void {
        this.io.on('connection', (client: Socket) => {
            console.log('Connected client on port %s.', this.port);

            client.on('message', (m: Message) => {
                console.log('[server](message): %s', JSON.stringify(m));
                console.log('[server](message): %s', m.text);
                this.io.emit('message', m);
            });

            client.on('disconnect', (user: User) => {
                console.log('Client disconnected');
            });

            client.on('logout', (user: User) => {
                console.log('** server **: logged out user ' + user);
            });

            client.on('get-groups', (user: User, call: Function) => {
                //database
                console.log('** server **: send groups');
                call([{name: 'grp1'}, {name: 'grp2'}]);
            });

            client.on('get-messages', (group: Group, call: Function) => {
                //database
                console.log('** server **: send messages');
                call([{name: 'dude', text: 'deiser deise', imageLink: ''}]);
            });

            client.on('send-message', (obj: any) => {
                this.io.in(obj.group.name).emit('new-message', obj.message);
                //this.io.in(obj.group.name)
                console.log('** server **: message was sent in group ' + obj.group.name);
            });

            client.on('login', (user: User, call: Function) => {
                //databases
                console.log('** server **: user: ' + JSON.stringify(user) + ' logged in');
                call(true);
            });

            client.on('subscribe', (grp: Group) => {
                client.join(grp.name);
                console.log("Client: " + client.id + " joined Room: " + grp.name);
            });
            client.on('unsubscribe', (grp: Group) => {
                client.leave(grp.name);
                console.log("Client: " + client.id + " left Room: " + grp.name);
            });
        });

        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });
    }

    get App(): express.Application {
        return this.app;
    }
}