import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class Card {
  private _tipo: string = ''
  private _preco: number = 0

  @Input() 
  set tipo(value: string) {
    this._tipo = value
  }

  get tipo(): string {
    return this._tipo
  }

  @Input({ required: true }) 
  set preco(preco: number) {
    this._preco = preco
  }

  get preco(): number {
    return this._preco
  }

  buttonCliked(event: boolean) {
    alert("CLICKED " + event)
  }
}