import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  public text : string = '';

  public length: number = 0;

  onInputChange(event : any) : void
  {
  this.text = event.target.value;

 this.length = this.text.length;
  }
}
