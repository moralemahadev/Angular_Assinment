import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //String that we want to send to the child component
   public MessageToChild = "Hello from Parent";

   // Empty String that we want to get the data form the child component
   public MessageFromParent: string = " ";
} 
