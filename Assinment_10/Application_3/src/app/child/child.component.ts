import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent {


//Created one class variable to fetch ChkPrime() data
public PrimeNumberResult : number = 0;

//Created another class varibale to fetch CountCapital() data
public CapitalCount = 0;


// Created constructor to inject NumberService 
public constructor(private nobj: NumberService, sobj :StringService)
{

 //called the ChekPrime() method writen NumberService

this.PrimeNumberResult = nobj.ChkPrime(12);
this.CapitalCount = sobj .CountCapital("MarveLLous");

}

}
