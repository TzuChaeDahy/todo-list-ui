import {Component, OnInit} from '@angular/core';
import {TaskStatsComponent} from "../task-stats/task-stats.component";
import {TaskItemComponent} from "../task-item/task-item.component";
import {CommonModule} from "@angular/common";
import Task from '../../models/Task';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    TaskStatsComponent,
    TaskItemComponent,
    CommonModule
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  tasks: Task[] = [];

  getAllTasksQuantity(): number {
    return this.tasks.length;
  }

  getAllCompletedTasksQuantity(): number {
    return this.tasks.filter(task => task.status).length;
  }

  removeTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id != id);
  }

  changeStatus(id: string): void {
    this.tasks.map(task => {
      if (task.id == id) {
        task.status = !task.status;
      }
    });
  }

  createTask(event: Event, input: HTMLInputElement): void {
    event.preventDefault();
    this.tasks.push({
      id: (Math.random() * 100).toString(),
      title: input.value,
      status: false
    });

    input.value = "";
  }

  ngOnInit(): void {
    console.log("Hello World!")
  }
}
