import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBgColor]',
  standalone: false
})
export class BgColor {
  
  @Input('appBgColor') 
  bgColor: string | undefined = 'orangered';

  @HostBinding('style.backgroundColor') 
  get backgroundColor() { return this.bgColor; }

}
