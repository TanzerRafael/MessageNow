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
    return [];
  }

  sendMessage(user: User, message: Message): void {
  }

  login(user: User): void {
  }

  logout(user: User): void {
  }
}
