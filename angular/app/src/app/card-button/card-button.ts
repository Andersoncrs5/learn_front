import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  standalone: false,
  templateUrl: './card-button.html',
  styleUrl: './card-button.scss'
})
export class CardButton {
  @Output() buttonClickEmitter = new EventEmitter<boolean>()

  onButtonClick() {
    this.buttonClickEmitter.emit(true);
  }
}
