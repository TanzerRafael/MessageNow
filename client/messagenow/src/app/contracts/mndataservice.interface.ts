import {User} from '../models/user.model';
import {Message} from '../models/message.model';

export interface IMnDataService {
  getGroups(user: User): string[];
  sendMessage(user: User, message: Message): void;
  getMessagesOfGroup(group: string): Message[];
}
