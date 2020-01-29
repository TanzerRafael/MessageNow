import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {Message} from '../../models/message.model';
import {User} from '../../models/user.model';
import {MemoryDataProvider} from '../../services/memorydataprovider.service';
import {SocketDataProviderService} from '../../services/socketdataprovider.service';
import {Group} from '../../models/group.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Output() chooseGroup: EventEmitter<any> = new EventEmitter<any>();
  @Input() group: Group;
  @Input() user: User;
  messages: Message[] = [];
  currentMessage: Message = {
    name: '',
    text: '',
    imageLink: ''
  };

  constructor(private dataProvider: SocketDataProviderService) {
    this.dataProvider.addNewMessageListener(data => this.messages.push(data));
  }

  ngOnInit() {
    this.dataProvider.getMessagesOfGroup(this.group).subscribe((data: Message[]) => {
      this.messages = data;
    });
  }

  onChooseNewGroup() {
    this.chooseGroup.emit(undefined);
  }

  createNewMessage(text: string, useImage: boolean = false) {
    const link1 = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
    const link2 = 'https://www.wallpaperup.com/uploads/wallpapers/2014/02/20/262336/110734663e76f9e54cb528808967b0ac.jpg';

    const message: Message = {
      name: this.user.name,
      text,
      imageLink: useImage ? link1 : ''
    };

    this.messages.push(message);
    this.dataProvider.sendMessage(this.user, message, this.group);
  }

  createMessage(message: Message) {
    message.name = this.user.name;
    this.dataProvider.sendMessage(this.user, message, this.group);
  }
}
