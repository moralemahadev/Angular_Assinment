import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {

  public CapitalCount = 0;

   public constructor(private sobj:StringService)
   {
    this.CapitalCount = sobj.CountCapital("MAhadev");
   }

}
