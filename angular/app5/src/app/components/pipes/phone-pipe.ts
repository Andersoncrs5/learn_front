import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: false
})
export class PhonePipe implements PipeTransform {

  transform(phone:string): string {
    if (!phone || phone.length < 10 || phone.length > 11 ) { return "telefone invalido!"; }

    const CELLPHONE = phone.length === 11;

    if (CELLPHONE) {
      return `(${phone.substring(0,2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`
    } else {
      return `(${phone.substring(0,2)}) ${phone.substring(2, 6)}-${phone.substring(6)}`
    }
  }

}
