import { Directive, HostBinding } from "@angular/core";

@Directive({
    standalone: false,
    selector: '[appDisabled]'
})
export class DisabledDirective {
    @HostBinding('attr.disabled') disabled: boolean | null = null;
}