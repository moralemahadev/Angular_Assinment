import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

 @Output() public dataEvent = new EventEmitter<string>();
 
 inputText: string = '';

 sendData(){
  this.dataEvent.emit(this.inputText);
 }

}
