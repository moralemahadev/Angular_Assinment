import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent {

  public str : string = "";
  
  public UpperButton(): any
  {
    this.str = "MARVELLOUS INFOSYSTEM";
  }
  public LowerButton() : any
  {
    this.str= "marvellous infosystem";
  }

}
