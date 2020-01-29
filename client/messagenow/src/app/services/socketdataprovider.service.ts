import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Message} from '../models/message.model';
import {Group} from '../models/group.model';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';

declare type MessageListener = (data: any) => void;

@Injectable({
  providedIn: 'root'
})
export class SocketDataProviderService {
  private messageListener: MessageListener[] = [];
  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io('localhost:3030');

    this.socket.on('new-message', data => {
      console.log(data);
      this.messageListener.forEach(ml => ml(data));
    });
  }

  getGroups(user: User): Observable<Group[]> {
    // if (this.groups === null) {
      // this.socket.emit('get-groups', user, (data: Group[]) => this.groups = data);
    // this.socket.emit('get-groups', user, this.grouping);
    // }

    // console.log(this.groups);
    // return this.groups;

    return new Observable(observer => {
      this.socket.emit('get-groups', user, (data: Group[]) => {
        observer.next(data);
      });
    });
  }

  joinGroup(group: Group): void {
    this.socket.emit('subscribe', group);
  }

  leaveGroup(group: Group): void {
    this.socket.emit('unsubscribe', group);
  }

  getMessagesOfGroup(group: Group): Observable<Message[]> {
    return new Observable<Message[]>(observer => {
      this.socket.emit('get-messages', group, (data: Message[]) => {
        observer.next(data);
      });
    });
  }

  sendMessage(user: User, message: Message, group: Group): void {
    this.socket.emit('send-message', { user, message, group });
  }

  login(user: User): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.socket.emit('login', user, isValid => observer.next(isValid));
    });
  }

  logout(user: User): void {
    this.socket.emit('logout', user);
  }

  addNewMessageListener(listener: MessageListener) {
    this.messageListener.push(listener);
  }
}
