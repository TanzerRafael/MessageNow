import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-selectgroup',
  templateUrl: './selectgroup.component.html',
  styleUrls: ['./selectgroup.component.css']
})
export class SelectgroupComponent implements OnInit {
  @Output() chosen: EventEmitter<any> = new EventEmitter<any>();
  private groups: string[];

  constructor() {

  }

  ngOnInit() {
    this.groups = [
      'Schule', 'Familie', 'Privat'
    ];
  }

  getAvailableGroups(): string[] {
    return this.groups;
  }

  onClick() {
    this.chosen.emit(undefined);
  }
}
