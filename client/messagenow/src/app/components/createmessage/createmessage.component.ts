import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Message} from '../../models/message.model';

@Component({
  selector: 'app-createmessage',
  templateUrl: './createmessage.component.html',
  styleUrls: ['./createmessage.component.css']
})
export class CreateMessageComponent implements OnInit {
  @Output() newMessage: EventEmitter<Message> = new EventEmitter<Message>();
  message: Message = {
    name: '',
    text: '',
    imageLink: ''
  };

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    this.newMessage.emit(this.message);
    this.message = {
      name: '',
      text: '',
      imageLink: ''
    };
  }
}
