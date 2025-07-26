import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  plano = {
    tipo: 'Simples',
    preco: 100
  }

}