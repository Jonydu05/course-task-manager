import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class App {
  users = signal<User[]>(DUMMY_USERS);
  selectedUser = signal<User | null>(null);

  onSelectUser(event: User) {
    this.selectedUser.set(event);
  }
}
