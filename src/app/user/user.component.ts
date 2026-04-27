import { Component, computed, input, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: false,
})
export class UserComponent {
  user = input.required<User>();
  selected = input.required<boolean>();
  
  imgUrl = computed(() => `assets/users/${this.user().avatar}`);

  selectedUser = output<User>();
}
