  
import { createServer, Server } from 'http';
import express from 'express';
import socketIo, { Socket } from 'socket.io';

import { Message } from './models/messagemodel';
import {User} from './models/user';
import {Group} from './models/groupmodel';

export class ChatServer {
    public static readonly PORT:number = 3000;
    private app!: express.Application;
    private server!: Server;
    private io!: SocketIO.Server;
    private port!: string | number;

    //clientside: changeGroupMethod un-/subscribe im CLient
    private currentGroup = "";

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
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
    }

    private sockets(): void {
        this.io = socketIo(this.server);
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });

        this.io.on('connection', (client: Socket) => {
            console.log('Connected client on port %s.', this.port);
            client.on('message', (m: Message) => {
                console.log('[server](message): %s', JSON.stringify(m));
                console.log('[server](message): %s', m.text);
                this.io.emit('message', m);
            });

            client.on('disconnect', () => {
                console.log('Client disconnected');
            });

            client.on('get-groups', (user: User, call: (data: any) => Group[]) => {
                //database
                call({name: 'grp1'});
            });

            client.on('get-messages', (group: Group, call: Function) => {
                //database
                call({name: 'dude', text: 'deiser deise', link: ''});
            });

            client.on('send-message', (obj: any) => {
                this.io.in(obj.group.name).emit('new-message', JSON.stringify(obj.message));
            });

            client.on('login', (user: User, call: Function) => {
                //databases
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
    }

    get App(): express.Application {
        return this.app;
    }
}