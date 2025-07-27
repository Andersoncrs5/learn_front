import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class Card {
  @Input() tipo: string | undefined = 'Simples'
  @Input() preco: number | undefined = 100
}