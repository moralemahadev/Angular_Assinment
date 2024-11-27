import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, Param: string): number{
    
   let No1 : number = 7;
   let No2 : number = 3;
   let Mult : number =  No1 * No2;
   return Mult;
  }

}
