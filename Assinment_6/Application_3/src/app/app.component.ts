import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template:`
  <h1>Application to create a text field and a static field with blue color using inline</h1>
  
  <h2 class='text-field'>Marvellous Infosystems</h2>
  <label for='textfield:'>Text Field </label>
  <input type='text' placeholder='Enter your text'>
  `,
  styles: [`
  .text-field
{
  color:blue;
  font-size:large;
  }
  `
  ]
})
export class AppComponent {
  title = 'Assinment_6_3';
}
