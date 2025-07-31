import { ChangeDetectorRef, Component, ElementRef, signal, ViewChild } from '@angular/core';
import { Filho } from './filho/filho';

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

  @ViewChild('filhoComp')
  filhoCompRef!: Filho

  hello() {
    this.filhoCompRef.dizerOi()
    this.filhoCompRef.message = "OI"
  }
}
