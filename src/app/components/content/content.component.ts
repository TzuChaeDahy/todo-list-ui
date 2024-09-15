import { Component } from '@angular/core';
import {TaskStatsComponent} from "../task-stats/task-stats.component";
import {TaskItemComponent} from "../task-item/task-item.component";
import {CommonModule} from "@angular/common";
import Task from "../../../models/Task"

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
export class ContentComponent {
  tasks: Task[] = [
    {
      title: "Fazer arroz",
      status: true
    },
    {
      title: "Cozinhar Feijão",
      status: false
    }
  ];
}
