import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashIfEmpty',
  standalone: false
})
export class DashIfEmptyPipe implements PipeTransform {

  transform(value: any): string {
    if (value == undefined || value === null || value === '') {
      return '-';
    }
    return value
  }

}
