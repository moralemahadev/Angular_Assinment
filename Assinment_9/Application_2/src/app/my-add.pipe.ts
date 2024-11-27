import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, Param: string):  number 
{
    
 let num1: number =  8;
 let num2 : number = 3;
 let sum : number = num1 + num2;
 
 return sum;
  }

}
