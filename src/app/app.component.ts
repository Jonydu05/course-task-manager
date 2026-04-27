import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = signal<User[]>(DUMMY_USERS);
  selectedUser = signal<User | null>(null);

  onSelectUser(event: User) {
    this.selectedUser.set(event);
  }
}
