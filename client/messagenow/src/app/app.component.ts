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

  loginUser(user: User) {
    console.log('user: ' + user + ' loginned');
    this.state = State.Chat;
  }
}
