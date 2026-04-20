import { Component, computed, input, output } from '@angular/core';
import { User } from '../user.type';



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar: string;
  // @Input({ required: true }) name: string;
  // get imgUrl(): string {
  //   // return 'assets/users/' + this.avatar
  // }

  // onSelectUser(): void {
  //   console.log('clicked!');
  // }

  user = input.required<User>();
  imgUrl = computed(() => `assets/users/${this.user().avatar}`)

  // name = input.required<string>();
  // avatar = input.required<string>();
  // imgUrl = computed(() => 'assets/users/' + this.avatar());

  selectedUser = output<User>();
}
