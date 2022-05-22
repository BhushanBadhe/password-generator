import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  title = 'password-generator';
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }
  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
    
  }
  onSubmitClicked(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) {
        validChars += letters;

    }

    if (this.includeNumbers) {
      validChars += numbers;

  }
  if (this.includeSymbols) {
    validChars += symbols;
}
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random()*validChars.length);
      generatedPassword += validChars[index];
      
    }
    this.password = generatedPassword;

  }

  getPassword(){
    return this.password;
  }

  onChangeLength(event:Event){
    let target = (event.target as HTMLInputElement).value;
    const parsedValue = parseInt(target);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue
    }
    
    
  }
  onButtonClick(){
    
  }

}
