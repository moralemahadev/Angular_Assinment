import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent {

  ContactForm = new FormGroup(
    {
      FirstName : new FormControl(''),
      LastName: new FormControl(''),
      Email : new FormControl(''),
      Phone: new FormControl(''),
      Address : new FormControl('')


    } 
  );
 

}
