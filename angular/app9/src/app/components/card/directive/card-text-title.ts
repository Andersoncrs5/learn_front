import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-text-title',
  standalone: false,
  host: { 'class': 'ca-u-card-text-title' }
})
export class CardTextTitle {
}
