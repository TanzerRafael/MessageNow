  
import { createServer, Server } from 'http';
import express from 'express';
import socketIo from 'socket.io';

import { Message } from './messagemodel';

export class ChatServer {
    public static readonly PORT:number = 8080;
    private app!: express.Application;
    private server!: Server;
    private io!: SocketIO.Server;
    private port!: string | number;

    //clientside: changeGroupMethod
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

        this.io.on('connect', (client: any) => {
            console.log('Connected client on port %s.', this.port);
            client.on('message', (m: Message) => {
                console.log('[server](message): %s', JSON.stringify(m));
                this.io.emit('message', m);
            });

            client.on('disconnect', () => {
                console.log('Client disconnected');
            });

            client.on('change-group', (grp: Group) => {
                if(this.currentGroup !== "")
                    client.leave(this.currentGroup)
                this.currentGroup = grp.Name;
            })

        });
    }

    get App(): express.Application {
        return this.app;
    }
}