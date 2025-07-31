import { ChangeDetectorRef, Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app6');
  test = ''

  ciclou(value: HTMLInputElement) {
    this.test = value.value as string
  }
}
