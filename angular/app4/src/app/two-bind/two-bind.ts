import { Component } from '@angular/core';

@Component({
  selector: 'app-two-bind',
  standalone: false,
  templateUrl: './two-bind.html',
  styleUrl: './two-bind.scss'
})
export class TwoBind {
  name: string = "pochita"
  sobrenome: string = "motosserra"
}
