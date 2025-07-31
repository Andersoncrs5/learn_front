import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appHighlight]',
    standalone: false
})
export class HighlightDirective {
    @HostBinding('style.background-color')
    bgColor: string = "transparent"

    @HostListener('mouseover')
    onMouseOver() {
        this.bgColor = "orange"
    }

    @HostListener('mouseout')
    onMouseOut() {
        this.bgColor = "transparent"
    }
}