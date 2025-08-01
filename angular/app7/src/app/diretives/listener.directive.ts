import { Directive, HostListener } from "@angular/core";

@Directive({
    standalone: false,
    selector: '[appListener]'
})
export class ListenerDerective {
    @HostListener('click')
    onClick() {

    }

    @HostListener('keyup', [ '$event' ])
    onKeyUp(event: Event) {
        // console.log(event)
        const fullText = event.target as HTMLInputElement
        console.log(fullText.value)
    }
}