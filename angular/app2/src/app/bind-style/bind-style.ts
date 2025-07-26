import { Component } from '@angular/core';

@Component({
  selector: 'app-bind-style',
  standalone: false,
  templateUrl: './bind-style.html',
  styleUrl: './bind-style.scss'
})
export class BindStyle {
  widthButton = 100;
  bacckGroundButton = "red"
  padding = "10px"
  borderButton = "10"
  showSize = true

  grownSize() {
    this.widthButton += 10
  }

  showSizeFunction() {
    this.showSize = !this.showSize
  }
  

}
