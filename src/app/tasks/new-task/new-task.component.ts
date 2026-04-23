import { Component, inject, output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [ReactiveFormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private fb = inject(NonNullableFormBuilder);
  addTask = output<NewTaskData>();
  close = output<void>();

  today = new Date().toISOString().split('T')[0];

  form = this.fb.group({
    title: ['', Validators.required],
    dueDate: ['', Validators.required],
    summary: ['', Validators.required],
  });

  handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    if (this.form.valid) {
      this.addTask.emit(this.form.getRawValue());
    }
  }
}
