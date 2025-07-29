import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersListData } from '../../data/user-list';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss'
})
export class UsersList {
  @Input() usersList: IUser[] = []
  displayedColumns: string[] = ['nome', 'date', 'status'];

  @Output() 
  userSelectedEmit = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    this.userSelectedEmit.emit(user)
  }
}
