import { Directive, ElementRef, Input, HostListener } from '@angular/core';

const isDefined = (value: any): boolean => typeof value !== undefined;

@Directive({
    selector: '[code]'
})
export class CodeDirective {

    @Input() code: string;
    @Input() codeDemo: boolean;

    children: Element;

    constructor(elementRef: ElementRef) {
        console.log(elementRef.nativeElement);
    }

    ngOnInit(): void {
        console.log(this.code);
        console.log(this.codeDemo);
    }

}
