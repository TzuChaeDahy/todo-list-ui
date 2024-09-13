import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-task-stats',
  standalone: true,
  imports: [

  ],
  templateUrl: './task-stats.component.html',
  styleUrl: './task-stats.component.css'
})
export class TaskStatsComponent {
  @Input()
  title: string = "";
  @Input()
  quantity: number = 0;
  @Input()
  color: string = "";
}
