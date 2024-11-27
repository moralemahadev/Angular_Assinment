import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})

export class MarvellousChkPipe implements PipeTransform
{

  transform(value: number,  Param : string): any
  {
      var No : number = 11;
    // 1: Prime Number logic
    if(Param == "Prime")
    {
       let flag : boolean = false;
       if( No == 0 || No == 1)
       {
        flag = true;
       }
       else {
       for(let i = 2; i <= No / 2; i++)
       {
        if(No % i === 0)
        {
        
          flag = true;
        
        }
       
      }
       
      } 
       if(!flag)
       {
      return "It is a Prime number";
       } 
       else 
       {
         return "It is not Prime number";
       }
       
    
      }
     
      // 2 : Perfect number logic
      if(Param == "Perfect")
      {
         let Sum = 0;

         for(let i= 1; i < Sum; i++)
         {
           if(Sum % i == 0)
           {
             Sum = Sum + i;

           }
         }
          
         if(Sum == No)
         {
          return "It is Perfect number";
         }
         else
         {
          return "It is not Perfect number";
         }
      }

      // 3: Even number logic

      if(Param == "Even")
      {
        if(No % 2 === 0)
        {
          return "It is Even number";
        }
        else{
          return "It is not Even number";
        }
      }

      //4 : Odd number logic

      if(Param == "Odd")
      {
        if(No % 2 !== 0)
        {
          return "It is odd number";
        }
        else
        {
          return "It is not odd number";
        }
      }

    
    
      
  }
}

