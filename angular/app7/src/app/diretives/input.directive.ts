import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    standalone: false,
    selector: '[appInputBackGround]'
})
export class InputBackgroundDirective {
    @Input()
    Background: string = 'white'

    @HostBinding("style.background-color")
    bgColor: string = this.Background

    @HostListener('focus')
    onClick() {
        this.bgColor = "red"
    }

    @HostListener('blur')
    onBlur() {
        this.bgColor = "white"
    }

}