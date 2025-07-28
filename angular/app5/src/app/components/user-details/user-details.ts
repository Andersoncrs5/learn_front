import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss'
})
export class UserDetails {
  private _user: IUser = {} as IUser

  @Input({ required: true })
  set user(value: IUser) {
    this._user = value
  }

  get user(): IUser {
    return this._user
  }
  
}
