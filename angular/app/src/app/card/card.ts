import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class Card {
  plano = {
    tipo: 'Simples',
    preco: 100
  }

}