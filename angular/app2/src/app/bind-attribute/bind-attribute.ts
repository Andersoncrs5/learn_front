import { Component } from '@angular/core';

@Component({
  selector: 'app-bind-attribute',
  standalone: false,
  templateUrl: './bind-attribute.html',
  styleUrl: './bind-attribute.scss'
})
export class BindAttribute {
  buttonTitle = "Titutlo botao"
  buttonDisabled = true
}
