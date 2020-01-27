import {User} from '../models/user.model';
import {Message} from '../models/message.model';
import { Group } from '../models/group.model';

export interface IMnDataService {
  login(user: User): boolean;
  logout(user: User): void;
  getGroups(user: User): string[];
  sendMessage(user: User, message: Message, group: Group): void;
  getMessagesOfGroup(group: string): Message[];
}
