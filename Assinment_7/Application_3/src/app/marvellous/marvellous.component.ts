
import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent {

 public str1 : string ="Marvellous Infosystem";
  
 

 public ButtonPress()
  {

    if(this.str1 === "Marvellous Infosystem")
    {
      this.str1 ="Educating for Better tomorrow";
    }
    
   else
   {
    this.str1 ="Marvellous Infosystem";
    
  }
  }

}
