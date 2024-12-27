import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  fromSystem: string = 'binary'; // Default system
  toSystem: string = 'decimal'; // Default system
  inputValue: string = '';
  result: string = '0';

  // Convert the input based on selected systems
  convert() {
    let inputNum = this.inputValue.trim();
    let output: string = '';
    let decimalValue: number = NaN; // Initialize with NaN to detect uninitialized cases

    if (!inputNum) {
      this.result = 'Please enter a value to convert!';
      return;
    }

    try {
      // Parse the input based on the "from" system
      if (this.fromSystem === 'binary') {
        decimalValue = parseInt(inputNum, 2);
      } else if (this.fromSystem === 'octal') {
        decimalValue = parseInt(inputNum, 8);
      } else if (this.fromSystem === 'decimal') {
        decimalValue = parseInt(inputNum, 10);
      } else if (this.fromSystem === 'hex') {
        decimalValue = parseInt(inputNum, 16);
      }

      // Ensure decimalValue is a valid number
      if (isNaN(decimalValue)) {
        this.result = 'Invalid input!';
        return;
      }

      // Convert the decimal value to the "to" system
      if (this.toSystem === 'binary') {
        output = decimalValue.toString(2);
      } else if (this.toSystem === 'octal') {
        output = decimalValue.toString(8);
      } else if (this.toSystem === 'decimal') {
        output = decimalValue.toString(10);
      } else if (this.toSystem === 'hex') {
        output = decimalValue.toString(16).toUpperCase();
      }

      this.result = output;
    } catch (e) {
      this.result = 'Invalid input!';
    }
  }

  // Copy the result to clipboard
  copyResult() {
    const textToCopy = this.result;
    navigator.clipboard.writeText(textToCopy).then(
      () => alert('Result copied to clipboard'),
      (err) => alert('Failed to copy: ' + err)
    );
  }

  // Clear the input and result
  clear() {
    this.inputValue = '';
    this.result = '0';
  }
}
