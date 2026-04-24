import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnChanges,
  signal,
  SimpleChanges,
} from '@angular/core';
import { User } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './task.service';
import { TaskComponent } from './task/task.component';
import { NewTaskData, Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent implements OnChanges {
  private readonly taskService = inject(TaskService);

  user = input.required<User>();
  isAddingTask = signal(false);
  tasks = signal<Task[]>([]);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user']) {
      this.tasks.set(this.getUserTasks(this.user().id));
    }
  }

  private getUserTasks(userId: string): Task[] {
    return this.taskService.getUserTasks(userId);
  }

  onAddTask(item: NewTaskData) {
    this.isAddingTask.set(false);
    this.taskService.addNewTask(item, this.user().id);
    this.tasks.set(this.getUserTasks(this.user().id));
  }

  onCompleteTask(task: Task) {
    this.taskService.removeTask(task.id);
    this.tasks.set(this.getUserTasks(this.user().id));
  }

  onCloseNewTask() {
    this.isAddingTask.set(false);
  }
}
