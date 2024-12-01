import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  // Number1 : number = 0;
  // Number2: number = 0;

  // Addition Method logic
public Add(num1: number, num2: number):number
  {
       let Sum : number = 0
      // this.Number1 = num1;
      // this.Number2 = num2;
       Sum = num1 + num2;
       return Sum;

  }

  //Substration Method Logic

  public Sub(num1: number, num2: number): number
  {

    let Sub: number = 0;
    // this.Number1 = num1;
    // this.Number2 = num2;
    Sub = num1 - num2;
    return Sub;
  
  }
}
