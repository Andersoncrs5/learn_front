import { Component } from '@angular/core';

@Component({
  selector: 'app-filho',
  standalone: false,
  templateUrl: './filho.html',
  styleUrl: './filho.scss'
})
export class Filho {
  message: string = 'Sou o component filho'

  dizerOi() {
    
  }
}
