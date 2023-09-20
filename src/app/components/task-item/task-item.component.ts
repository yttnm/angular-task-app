import { Component, Input } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: Task = new Task(0, '', '');
  constructor(private taskService: TaskService) {}

  toggleCompletion(task: Task): void {
    task.completed = !task.completed;
    // ここでタスクの更新ロジックを実装することもできます
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
  }
}
