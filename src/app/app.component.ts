import { Component, Output, EventEmitter, Input } from '@angular/core';

export class User {
  constructor(public email: string, public password: string) {
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'ADP-app';

  @Output() loggedIn = new EventEmitter<User>();
  @Input() enabled = true;

  login(email, password) {
    if (email && password) {
      this.loggedIn.emit(new User(email, password));
    }
  }
}
