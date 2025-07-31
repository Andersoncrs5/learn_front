import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: '[appStyle]',
    standalone: false
})
export class StyleDirective {
    @HostBinding('attr.style') attrtStyle: string = 'color: red;'
}