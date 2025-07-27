import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  private _buttonText: string = ''
  private _buttonStyle: 'white' | 'purple' = 'white'

  @Input()
  set buttonStyle(value: 'white' | 'purple') {
    this._buttonStyle = value
  }

  get buttonStyle() {
    return this._buttonStyle
  }

  @Input()
  set buttonText(value: string) {
    this._buttonText = value
  }

  get buttonText() {
    return this._buttonText
  }

  @Output()
  buttonClickedEmit = new EventEmitter<string>()

  onButtonClicked() {
    this.buttonClickedEmit.emit("clicked")
  }

}
