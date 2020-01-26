import { Server, Socket } from "socket.io";
import express from "express"
import Express from "express"
import { ChatEvent } from "./constants";
import { Message } from "./messagemodel";

export class ChatServer{
    public static readonly PORT: number = 3000;

    private _app:Express.Application;
    private server: Server;
    private io: SocketIO.Server;

    private port : number;

    get app (): Express.Application{
        return this._app;
    }

    /**
     *
     */
    constructor() {
        this._app=require('express');
        this.port=ChatServer.PORT;
        //this._app.use(cors());
        this.server = require('http').createServer(this._app);
        this.io = require('socket.io')();
    }

    private listen () :void{
        this.server.listen(this.port);
        

        this.io.on(ChatEvent.CONNECT, (client: any) => {
            console.log('User connected');

            client.on(ChatEvent.MESSAGE, (m: Message) => {
                console.log('[server](msg): %s', JSON.stringify(m));
                this.io.emit('message', m);
            });

            client.on(ChatEvent.DISCONNECT, ()=>{
                console.log('client disconnected');
            })
        })
    }
}