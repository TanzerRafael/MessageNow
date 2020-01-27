import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {IMnDataService} from '../contracts/mndataservice.interface';
import {User} from '../models/user.model';
import {Message} from '../models/message.model';
import { Group } from '../models/group.model';

declare type MessageListener = (data: any) => void;

@Injectable({
  providedIn: 'root'
})
export class SocketDataProviderService implements IMnDataService {
  private groups: string[] = null;
  private messageListener: MessageListener[] = [];

  constructor(private socket: Socket) {
    this.socket.on('new-message', data => {
      console.log(data);
      this.messageListener.forEach(ml => ml(data));
    });
  }

  getGroups(user: User): string[] {
    if (this.groups === null) {
      this.socket.emit('get-groups', user, data => this.groups = data);
    }

    return this.groups;
  }

  getMessagesOfGroup(group: string): Message[] {
    let messages: Message[] = [];
    this.socket.emit('get-messages', group, data => messages = data);
    return messages;
  }

  sendMessage(user: User, message: Message, group: Group): void {
    this.socket.emit('send-message', { user, message, group });
  }

  login(user: User): boolean {
    let isUser = false;
    this.socket.emit('login', user, valid => isUser = valid);
    return isUser;
  }

  logout(user: User): void {
    this.socket.emit('disconnect', user);
  }

  addNewMessageListener(listener: MessageListener) {
    this.messageListener.push(listener);
  }
}
