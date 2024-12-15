import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//import classes which are required for reatcive forms
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [FormBuilder, Validators],
})
export class AppComponent {
  //Inject Formbuilder service
  public FormBuilderobj = new FormBuilder();

  ContactInformationForm = this.FormBuilderobj.group({
    //Added Multiple validation
    firstName: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
    lastName: [''],

    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z]{1,}[.][a-zA-Z]{2,}$'),
      ],
    ],
    phone: ['', Validators.required, Validators.pattern('^[0-9]{10}$')],

    city: [
      '',
      [Validators.required],
      Validators.minLength(4),
      Validators.pattern('^[A-Za-z]+$'),
    ],
    State: ['', Validators.required],
    zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],

    comments: ['', [Validators.required, Validators.maxLength(30)]],
  });

  //Methos to set FormsControls fields through througth program
  SetData() {
    this.ContactInformationForm.setValue({
      firstName: 'Mahadev',
      lastName: 'Morale',
      email: 'amcd@1m23',
      phone: '0123456789',
      city: 'pune',
      State: 'Maharashtra',
      zipCode: '12345',
      comments: 'All looks good to me',
    });
  }
}
