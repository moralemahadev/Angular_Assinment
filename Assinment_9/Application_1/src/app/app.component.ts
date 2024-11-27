import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyRevPipe } from './my-rev.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyRevPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   public name : string = "Marvellous";
}
