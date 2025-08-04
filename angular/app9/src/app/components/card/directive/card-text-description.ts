import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'app-card-text-description',
  standalone: false,
  host: { 'class': 'ca-u-card-text-description' }
})
export class CardTextDescription {
  @HostBinding("style.color")
  protected _color: string = 'white'

  @Input({ required: true })
  set colorText(value: string) { this._color = value }
  get colorText() : string { return this._color }
}