import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {IMnDataService} from '../contracts/mndataservice.interface';
import {User} from '../models/user.model';
import {Message} from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class SocketDataProviderService implements IMnDataService {
  private groups: string[] = null;

  constructor(private socket: Socket) {
    this.socket.on('new-message', data => {
      console.log(data);
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

  sendMessage(user: User, message: Message): void {
    this.socket.emit('send-message', { user, message });
  }

  login(user: User): void {
    this.socket.emit('login', user);
  }

  logout(user: User): void {
    this.socket.emit('logout', user);
  }
}
