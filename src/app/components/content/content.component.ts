import { Component } from '@angular/core';
import {TaskStatsComponent} from "../task-stats/task-stats.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    TaskStatsComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
