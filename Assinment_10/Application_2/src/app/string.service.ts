import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }


  //Logic Count Capital Characters

  public CountCapital(str: string)
  { 
    let count = 0;

    for(let i = 0; i < str.length; i++)
    {
      if(str[i] >= "A" && str[i] <= "Z")
      {
        count ++;
      }
    }
    return count;

    
  }
}
