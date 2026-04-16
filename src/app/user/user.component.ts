import { Component, computed, input, output } from '@angular/core';

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<User>();
  selectedUser = output();
  imgUrl = computed(() => `assets/users/${this.user().avatar}`)

  // get imgUrl(): string {
  //   return 'assets/users/' + this.user().avatar;
  // }
  // onSelectUser(): void {
  //   console.log('clicked!');
  // }
}
