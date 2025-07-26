import { Component } from '@angular/core';

@Component({
  selector: 'app-bind',
  standalone: false,
  templateUrl: './bind.html',
  styleUrl: './bind.scss'
})
export class Bind {
  inputText: string = "Texto inicial"
  inputType: string = "password"
  isDisabled = false;
  showPassword = false;

  changeDisabled() {
    this.isDisabled = !this.isDisabled
  }

  showPasswordToggle() {
    if (this.showPassword) {
      this.inputType = "password";
      this.showPassword = false;
    } else {
      this.inputType = "text";
      this.showPassword = true;
    }
  }

  handlerInputKeyUp(event: KeyboardEvent) {
    const currentText = (event.target as HTMLInputElement).value
    // console.log(currentText)  
    this.inputText = currentText
  }

  handleInputEvent(event: Event) {
    const currentText = (event.target as HTMLInputElement).value
    console.log(currentText)
  }

}
