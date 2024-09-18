import {Component, EventEmitter, Input, Output} from '@angular/core';
import Task from '../../models/Task';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input()
  task!: Task;

  @Output()
  removeEvent = new EventEmitter<string>();

  @Output()
  statusEvent = new EventEmitter<string>();

  removeItem(): void {
    this.removeEvent.emit(this.task.id);
  }

  changeStatus(): void {
    this.statusEvent.emit(this.task.id);
  }
}
