import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

public AdditionResult : number = 0
public SubstractionResult: number = 0

public constructor(private sobj: ArithmeticService)
  {
    this.AdditionResult = sobj.Add(10,20);
    this.SubstractionResult = sobj.Sub(10,5);
  }

}
