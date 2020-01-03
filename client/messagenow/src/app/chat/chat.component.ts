import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Output() chooseGroup: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onChooseNewGroup() {
    this.chooseGroup.emit(undefined);
  }
}
