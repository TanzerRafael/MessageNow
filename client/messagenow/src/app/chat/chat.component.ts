import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Output() chooseGroup: EventEmitter<any> = new EventEmitter<any>();
  @Input() group = '';

  constructor() {

  }

  ngOnInit() {
  }

  onChooseNewGroup() {
    this.chooseGroup.emit(undefined);
  }

  createNewMessage(user: string, text: string) {
    /*this.message.viewContainerRef.clear();
    const componentRef: ComponentRef<MessageComponent> = this.message.viewContainerRef.createComponent(this.factory);

    componentRef.instance.user = user;
    componentRef.instance.text = text;
    this.componentRefs.push(componentRef);*/

    const message = document.createElement('mat-card');
    message.setAttribute('class', 'message');

    const header = document.createElement('mat-card-header');
    const title = document.createElement('mat-card-title');
    title.appendChild(document.createTextNode(user));
    header.appendChild(title);
    message.appendChild(header);

    const content = document.createElement('mat-card-content');
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(text));
    content.appendChild(p);
    message.appendChild(content);

    document.getElementById('chat-room').appendChild(message);
  }
}
