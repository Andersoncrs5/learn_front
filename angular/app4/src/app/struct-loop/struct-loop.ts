import { Component } from '@angular/core';

@Component({
  selector: 'app-struct-loop',
  standalone: false,
  templateUrl: './struct-loop.html',
  styleUrl: './struct-loop.scss'
})
export class StructLoop {
  listPessoa = [
    {name: 'pochita', idade: 1000 },
    {name: 'aki', idade: 22 },
    {name: 'makima', idade: 24 },
    {name: 'denji', idade: 18 },
    {name: 'power', idade: 17 },
    {name: 'kobeni', idade: 20 },
  ]
}
