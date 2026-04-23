import { Component, computed, input, output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<User>();
  selected = input.required<boolean>();
  
  imgUrl = computed(() => `assets/users/${this.user().avatar}`);

  selectedUser = output<User>();
}
