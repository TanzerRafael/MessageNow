import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MemoryDataProvider} from '../../services/memorydataprovider.service';
import {User} from '../../models/user.model';
import {Group} from '../../models/group.model';
import {SocketDataProviderService} from '../../services/socketdataprovider.service';

@Component({
  selector: 'app-selectgroup',
  templateUrl: './selectgroup.component.html',
  styleUrls: ['./selectgroup.component.css']
})
export class SelectgroupComponent implements OnInit {
  @Input() user: User;
  @Output() chosen: EventEmitter<Group> = new EventEmitter<Group>();
  @Output() logout: EventEmitter<any> = new EventEmitter<any>();
  private groups: Group[];

  constructor(private dataProvider: SocketDataProviderService) {

  }

  ngOnInit() {
    console.log('before');
    this.dataProvider.getGroups(this.user).subscribe(data => {
      console.log(data);
      this.groups = data;
    });
    console.log('after');
  }

  getAvailableGroups(): Group[] {
    return this.groups;
  }

  onClick(group: Group) {
    this.chosen.emit(group);
  }

  onLogout() {
    this.logout.emit(undefined);
  }
}
