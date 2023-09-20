import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-add-form',
  templateUrl: './task-add-form.component.html',
  styleUrls: ['./task-add-form.component.css']
})
export class TaskAddFormComponent {
  title: string = '';
  description: string = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    const newTask = new Task(Date.now(), this.title, this.description);
    this.taskService.addTask(newTask);
    this.title = '';
    this.description = '';
  }
}
