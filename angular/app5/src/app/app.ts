import { Component, signal } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersListData } from './data/user-list';
import { IFilterOptions } from './interfaces/filter.interface';
import { isWithinInterval } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app5');
  userList: IUser[] = UsersListData

  userListFilter: IUser[] = UsersListData
  private _user: IUser = {} as IUser

  get user(): IUser {
    return this._user
  }

  setUser(value: IUser) {
    this._user = value
  }

  onFilter(filterOptions: IFilterOptions) {
    this.userListFilter = this.filterUsersList(filterOptions, this.userList)
  }

  filterUsersList(filterOptions: IFilterOptions, userList: IUser[]): IUser[] {
    let filteredList: IUser[] = []

    filteredList = this.filterUsersListByName(filterOptions.name, this.userList)
    filteredList = this.filterUsersListByStatus(filterOptions.status, filteredList)
    filteredList = this.filterUsersListByDates(filterOptions.startDate, filterOptions.endDate, filteredList)

    return filteredList
  }

  filterUsersListByDates(startDate: Date | undefined, endDate: Date | undefined, userList: IUser[]): IUser[] {
    if (startDate === undefined || endDate === undefined ) { return userList }

    return userList.filter((u) => isWithinInterval( new Date(u.dataCadastro), { start: startDate, end: endDate }) )
  }

  filterUsersListByStatus(status: boolean | undefined, userList: IUser[]): IUser[] {
    if (!status) {
      return userList
    }
    return userList.filter((user) => user.ativo === status )
  }

  filterUsersListByName(name: string | undefined, userList: IUser[]): IUser[] {
    if (name === undefined) {
      return userList
    }

    return  userList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()))
  }
}
