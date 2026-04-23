import { Injectable, signal } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskData, Task, TaskModel } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private allTasks = signal(DUMMY_TASKS);

  getUserTasks(userId: string): Task[] {
    return this.allTasks().filter((task) => task.userId === userId);
  }

  addNewTask(item: NewTaskData, userId: string): Task {
    const newId = this.allTasks().length + 1;
    const newTask = new TaskModel({
      ...item,
      userId: userId,
      id: 't' + newId,
    });
    this.allTasks.update((tasks) => [newTask, ...tasks]);
    return newTask;
  }

  removeTask(id: string): Task | undefined {
    const deletedItem = this.allTasks().find(item => item.id === id);
    this.allTasks.update((tasks) => tasks.filter((item) => item.id !== id));
    return deletedItem;
  }
}
