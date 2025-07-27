import { Component, Input } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'app-card',
  imports: [Button],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  private _planType: string = ''
  private _planPrice: number = 0
  private _cardStyle: 'blue' | 'orange' | 'purple' | 'red' = 'blue'

  @Input()
  set planType(value: string) { this._planType = value }
  get planType(): string { return this._planType }

  @Input()
  set planPrice(value: number) { this._planPrice = value }
  get planPrice(): number { return this._planPrice }

  @Input()
  set cardStyle(value: 'blue' | 'orange' | 'purple' | 'red') { this._cardStyle = value  }
  get cardStyle(): 'blue' | 'orange' | 'purple' | 'red' { return this._cardStyle }

  buttonClicked(value: string) {
    alert(value)
  }

}