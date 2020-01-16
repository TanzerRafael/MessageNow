import {Component, Input, OnInit, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() user = '';
  @Input() text = '';

  constructor(public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

}
