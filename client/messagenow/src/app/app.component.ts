import {Component} from '@angular/core';
import {State} from './models/state.enum';
import {User} from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'messagenow';
  private state: State = State.Login;

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

  startChat() {
    this.state = State.Chat;
  }

  chooseGroup() {
    this.state = State.GroupChoosing;
  }
}
