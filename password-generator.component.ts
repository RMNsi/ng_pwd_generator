import { Component } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent {
  length = 0;
  isLettersChecked: boolean = false;
  isNumbersChecked: boolean = false;
  isSymbolsChecked: boolean = false;
  password = '';

  getLength(event: Event) {
    const parsedValue = parseInt((event.target as HTMLInputElement).value);

    // this condition not required as property binding condition take care 
    // to disable button itself when any others chars entered except number
    // if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    // }
  }

  onChangeLetters() {
    this.isLettersChecked = !this.isLettersChecked;
  }

  onChangeNumbers() {
    this.isNumbersChecked = !this.isNumbersChecked;
  }

  onChangeSymbols() {
    this.isSymbolsChecked = !this.isSymbolsChecked;
  }

  generatePassword() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()"; // Some randoms symobols are taken

    let passwordChars = '';
    if(this.isLettersChecked) {
      passwordChars += letters;
    }

    if(this.isNumbersChecked) {
      passwordChars += numbers;
    }

    if(this.isSymbolsChecked) {
      passwordChars += symbols;
    }

    let generatedPassword = '';
    for(let i= 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * passwordChars.length);
      generatedPassword += passwordChars[index];
    }
    this.password = generatedPassword;
  }

}