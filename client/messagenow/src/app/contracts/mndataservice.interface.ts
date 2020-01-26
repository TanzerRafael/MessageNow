import {User} from '../models/user.model';
import {Message} from '../models/message.model';

export interface IMnDataService {
  login(user: User): boolean;
  logout(user: User): void;
  getGroups(user: User): string[];
  sendMessage(user: User, message: Message): void;
  getMessagesOfGroup(group: string): Message[];
}
