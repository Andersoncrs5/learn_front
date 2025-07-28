import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: false,
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss'
})
export class Pipes {
  name:string = "pochita"
  chainsawDemon = {
    name:'pochita',
    type: 'motosserra',
    power: 'chainsaw in arms and heard',
    levelDanger: 3
  }
  gunDevil = {
    name:'pistol',
    type: 'pistol',
    power: 'He has gun in all body',
    levelDanger: 2
  }
  controlDevil = {
    name:'makima',
    type: 'control',
    power: 'She can control demon or people',
    levelDanger: 3
  }
  galinhaDevil = {
    name:'galinha',
    type: 'none',
    power: 'It is just a galinha',
    levelDanger: 1
  }
  getStyle(value: number) {
    return {
      'active': value === 1,
      'partial': value === 2,
      'blocked': value === 3
    }
  }
}
