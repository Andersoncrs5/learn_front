import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../../interfaces/user/address.interface';

@Pipe({
  name: 'address',
  standalone: false
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    if (!address || !address.rua || !address.numero || address.numero === null || !address.cidade || !address.estado || !address.pais ) {
      return 'Endereco invalido'
    }

    return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`;
  }

}
