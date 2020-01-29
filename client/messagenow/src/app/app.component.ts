import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {State} from './models/state.enum';
import {User} from './models/user.model';
import {MemoryDataProvider} from './services/memorydataprovider.service';
import {Group} from './models/group.model';
import {SocketDataProviderService} from './services/socketdataprovider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'messagenow';
  private state: State = State.Login;
  selectedGroup: Group = null;
  color = 'warn';
  darkMode = false;
  private bodyElement;
  private user: User = null;

  constructor(private dataProvider: SocketDataProviderService) {
  }

  ngOnInit(): void {
    this.bodyElement = document.querySelector('body');

    // Hat der Benutzer bei seinen Betriebsystem den Dark Mode eingestellt
    // wird dieser hier übernommen
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.darkMode = true;
    }
    this.switchTheme();
  }

  getState(): State {
    return this.state;
  }

  getProgress(): number {
    let result = 0;

    switch (this.state) {
      case State.Login:
        result = 33;
        break;
      case State.GroupChoosing:
        result = 66;
        break;
      case State.Chat:
        result = 100;
        break;
      default:
        result = 0;
        break;
    }

    return result;
  }

  getUser(): User {
    return this.user;
  }

  loginUser(user: User) {
    this.dataProvider.login(user).subscribe((isValid: boolean) => {
      if (isValid) {
        this.user = user;
        this.chooseGroup();
      } else {
        alert('user not found');
      }
    });
  }

  startChat(group: Group) {
    this.state = State.Chat;
    this.selectedGroup = group;
    this.dataProvider.joinGroup(this.selectedGroup);
  }

  chooseGroup() {
    this.state = State.GroupChoosing;
    if (this.selectedGroup !== null) {
      this.dataProvider.leaveGroup(this.selectedGroup);
    }
  }

  logoutUser() {
    this.dataProvider.logout(this.user);
    this.selectedGroup = null;
    this.state = State.Login;
  }

  switchTheme() {
    if (this.darkMode) {
      this.bodyElement.classList.remove('mn-light-theme');
      this.bodyElement.classList.add('mn-dark-theme');
    } else {
      this.bodyElement.classList.add('mn-light-theme');
      this.bodyElement.classList.remove('mn-dark-theme');
    }
  }

  onLogout() {
    this.state = State.Login;
    this.selectedGroup = null;
  }
}
