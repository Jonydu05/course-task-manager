import { Component, inject, input, OnInit, signal } from '@angular/core';
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
})
export class TasksComponent implements OnInit {
  private readonly taskService = inject(TaskService);

  user = input.required<User>();
  isAddingTask = signal(false);
  tasks = signal<Task[]>([]);

  ngOnInit(): void {
    const tasks = this.taskService.getUserTasks(this.user().id);
    this.tasks.set(tasks);
  }

  onAddTask(item: NewTaskData) {
    this.taskService.addNewTask(item, this.user().id);
  }

  onCompleteTask(task: Task) {
    this.taskService.removeTask(task.id);
  }

  onCloseNewTask() {
    this.isAddingTask.set(false);
  }
}
