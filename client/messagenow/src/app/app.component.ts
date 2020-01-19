import {Component, OnInit} from '@angular/core';
import {State} from './models/state.enum';
import {User} from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'messagenow';
  private state: State = State.Login;
  selectedGroup = '';
  color = 'primary';
  darkMode = false;
  private bodyElement;

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

  loginUser(user: User) {
    console.log('user: ' + user + ' loginned');
    this.chooseGroup();
  }

  startChat(group: string) {
    this.state = State.Chat;
    this.selectedGroup = group;
  }

  chooseGroup() {
    this.state = State.GroupChoosing;
  }

  logoutUser() {
    this.selectedGroup = '';
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
}
