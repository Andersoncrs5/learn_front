import { Component, signal } from '@angular/core';
import { UsersListData } from './data/user-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app5');
  useraa = UsersListData[0]
}
