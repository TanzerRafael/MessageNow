import {Component, Input, OnInit } from '@angular/core';
import {Message} from '../../models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  @Input() ownMessage = false;

  constructor() { }

  ngOnInit() {
  }

  getMessageText(): string {
    return this.message.text.replace('\n', ' <br/> ');
  }
}
