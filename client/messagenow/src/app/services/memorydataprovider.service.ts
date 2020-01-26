import { Injectable } from '@angular/core';
// @ts-ignore
import { IMnDataService } from '../contracts/mndataservice.interface';
import { User } from '../models/user.model';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MemoryDataProvider implements IMnDataService {

  constructor() { }

  getGroups(user: User): string[] {
    return [
      'Schule', 'Familie', 'Privat', 'Bafi', 'Koppler'
    ];
  }

  getMessagesOfGroup(group: string): Message[] {
    return [
      {
        name: 'thelegend27',
        text: 'Constant Message',
        imageLink: 'https://www.wallpaperup.com/uploads/wallpapers/2014/02/20/262336/110734663e76f9e54cb528808967b0ac.jpg'
      }
    ];
  }

  sendMessage(user: User, message: Message): void {
  }

  login(user: User): boolean {
    return true;
  }

  logout(user: User): void {
  }
}
