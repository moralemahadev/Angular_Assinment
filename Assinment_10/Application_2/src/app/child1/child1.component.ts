import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {

 //Created one class variable to fetch ChkPrime() data
  public PrimeNumberResult : number = 0;


 // Created constructor to inject NumberService 
 public constructor(private nobj: NumberService)
 {
 
  //called the ChekPrime() method writen NumberService

 this.PrimeNumberResult = nobj.ChkPrime(11);
 
}


}
