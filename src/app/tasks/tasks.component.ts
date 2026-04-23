import { Component, computed, input } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { User } from '../user/user.model';
import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  user = input.required<User>();
  tasks = computed(() => DUMMY_TASKS.filter((task) => (task.userId === this.user().id && task.deleted !== true)));
}
