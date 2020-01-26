import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MemoryDataProvider} from '../../services/memorydataprovider.service';

@Component({
  selector: 'app-selectgroup',
  templateUrl: './selectgroup.component.html',
  styleUrls: ['./selectgroup.component.css']
})
export class SelectgroupComponent implements OnInit {
  @Output() chosen: EventEmitter<string> = new EventEmitter<string>();
  @Output() logout: EventEmitter<any> = new EventEmitter<any>();
  private groups: string[];

  constructor(private dataProvider: MemoryDataProvider) {

  }

  ngOnInit() {
    this.groups = this.dataProvider.getGroups(null);
  }

  getAvailableGroups(): string[] {
    return this.groups;
  }

  onClick(group: string) {
    this.chosen.emit(group);
  }

  onLogout() {
    this.logout.emit(undefined);
  }
}
