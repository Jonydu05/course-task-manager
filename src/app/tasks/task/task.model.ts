export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export class TaskModel implements Task {
  id = '';
  userId = '';
  title = '';
  summary = '';
  dueDate = '';

  constructor(data: Task) {
    Object.assign(this, data);
  }
}

export interface NewTaskData {
  title: string;
  dueDate: string;
  summary: string;
}
