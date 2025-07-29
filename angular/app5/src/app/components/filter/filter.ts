import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter.interface';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.html',
  styleUrl: './filter.scss'
})
export class Filter {
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ]

  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined
  }

  @Output()
  onFilterEmit = new EventEmitter<IFilterOptions>()

  onFilter() {
    this.onFilterEmit.emit(this.filterOptions)
  }

  statusList = [
    { description: "Ativo", value: true },
    { description: "Inativo", value: false },
  ]
}
