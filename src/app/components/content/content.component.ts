import {Component, inject, OnInit} from '@angular/core';
import {TaskStatsComponent} from "../task-stats/task-stats.component";
import {TaskItemComponent} from "../task-item/task-item.component";
import {CommonModule} from "@angular/common";
import Task from '../../models/Task';
import {TaskService} from "../../services/task.service";

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
  taskService: TaskService = inject(TaskService)
  isButtonDisabled: boolean = true;

  getAllTasksQuantity(): number {
    return this.tasks.length;
  }

  getAllCompletedTasksQuantity(): number {
    return this.tasks.filter(task => task.status).length;
  }

  onInput(value: string) {
    this.isButtonDisabled = value.length === 0;
  }

  removeTask(id: string): void {
    this.taskService.removeTask(id).subscribe({
      next: (_) => {
        this.tasks = this.tasks.filter(task => task.id != id);
      }
    });
  }

  changeStatus(id: string): void {
    let currentTask: Task;
    this.taskService.changeStatus(id).subscribe({
      next: (response) => {
        currentTask = response;

        this.tasks.map(task => {
          if (task.id == currentTask.id) {
            task.status = currentTask.status;
          }
        });
      }
    });


  }

  createTask(event: SubmitEvent, input: HTMLInputElement): void {
    event.preventDefault();

    if (input.value == "") {
      return;
    }

    let task: Task;
    this.taskService.createTask(input.value).subscribe({
      next: (response) => {
        task = response;

        this.tasks.push({
          id: task.id,
          title: task.title,
          status: task.status
        });
      }
    });

    input.value = "";
    this.isButtonDisabled = true;
  }

  ngOnInit(): void {
    this.taskService.retrieveAllTasks().subscribe({
        next: (response) => {
          this.tasks = response;
        }
      }
    );
  }
}
