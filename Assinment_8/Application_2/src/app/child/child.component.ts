import { Component, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
 // Addded @Input() decorator as it will recive the data from parent
  @Input() public ParentMessage: string = "";

  //Below logic is used for the share data child to parent
  //Addded @Output() decorator as it will sent the data to parent 
  @Output() public ChildMessage = new EventEmitter<string>();

  SendMessageToParent()
  {
    this.ChildMessage.emit("Hello from child");
  }


}
