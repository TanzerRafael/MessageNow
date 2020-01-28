import { Injectable } from '@angular/core';
// @ts-ignore
import { IMnDataService } from '../contracts/mndataservice.interface';
import { User } from '../models/user.model';
import { Message } from '../models/message.model';
import {Group} from '../models/group.model';

@Injectable({
  providedIn: 'root'
})
export class MemoryDataProvider implements IMnDataService {

  constructor() { }

  getGroups(user: User): Group[] {
    return [
      { name: 'Schule' },
      { name: 'Familie' },
      { name: 'Privat' },
      { name: 'Bafi' },
      { name: 'Koppler' }
    ];
  }

  getMessagesOfGroup(group: Group): Message[] {
    return [
      {
        name: 'thelegend27',
        text: 'Constant Message',
        imageLink: 'https://www.wallpaperup.com/uploads/wallpapers/2014/02/20/262336/110734663e76f9e54cb528808967b0ac.jpg'
      }
    ];
  }

  sendMessage(user: User, message: Message, group: Group): void {
  }

  login(user: User): boolean {
    return true;
  }

  logout(user: User): void {
  }

  joinGroup(group: Group): void {
  }

  leaveGroup(group: Group): void {
  }
}
