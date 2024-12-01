import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  //PrimeNumber logic 
  public ChkPrime(num : number) : any
  {
     let flag : boolean = false;

     if(num == 0 || num == 1)
     {
      
      flag = true;
    } 
    else
    {
     
      for(let i = 2 ; i <= num / 2; i++ )
     {

      if(num % i === 0)
      
        {
        flag = true;
      }
     }
    }
    if (!flag) {
    
      return "Given Number is Prime Number";
      
    }
     else
     {
    return "Given Number is Not Prime Number"
     }

  }



}
