import { Component } from '@angular/core';

@Component({
  selector: 'app-struct-style',
  standalone: false,
  templateUrl: './struct-style.html',
  styleUrl: './struct-style.scss'
})
export class StructStyle {
  fontSize: number = 15
  textColor: 'white'| 'blue' | 'red' = 'red'

  aumentarFont() {
    this.fontSize += 1
  }

  diminuirFont() {
    this.fontSize -= 1
  }

  changeColor() {
    if (this.textColor == 'white') {
      this.textColor = 'blue'
    } else if (this.textColor == 'blue') {
      this.textColor = 'red'
    } else if (this.textColor == 'red') {
      this.textColor = 'white'
    }
  }

}
