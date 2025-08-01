import { Directive, HostBinding } from "@angular/core";

@Directive({
    standalone: false,
    selector: '[appClass]'
})
export class ClassDirective {
    @HostBinding("attr.class") class = 'meu-texto'
}