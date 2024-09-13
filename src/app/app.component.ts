import {Component} from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";
import {ContentComponent} from "./components/content/content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
