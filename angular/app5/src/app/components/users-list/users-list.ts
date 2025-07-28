import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersListData } from '../../data/user-list';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss'
})
export class UsersList {
  usersList: IUser[] = UsersListData
  displayedColumns: string[] = ['nome', 'date', 'status'];

  onUserSelected(user: IUser) {

  }
}
