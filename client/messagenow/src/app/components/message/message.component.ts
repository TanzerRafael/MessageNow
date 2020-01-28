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
  private classList: string[] = ['message', ''];

  constructor() { }

  ngOnInit() {
  }

  getClassList(): string {
    this.classList[1] = this.ownMessage ? 'own-message' : '';
    return this.classList.join(' ');
  }
}
