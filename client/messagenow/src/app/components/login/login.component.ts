import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  @Output() finished = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  isValid(): boolean {
    return this.username.length > 1 && this.password.length > 1;
  }

  onConnect() {
    this.finished.emit({
      name: this.username,
      password: this.password
    });
  }
}
