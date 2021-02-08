import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import debounce from 'lodash-es/debounce';

@Directive({
    selector: '[show],[hide]'
})
export class DisplayDirective {

    @Input() show: string;
    @Input() hide: string;

    display;
    resize;

    constructor(
        private viewContainerRef: ViewContainerRef,
        private templateRef: TemplateRef<any>
    ) { }

    ngOnInit(): void {
        this.resize = debounce(this.update, 100);
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        window.addEventListener('resize', debounce(() => this.resize(), 100), { passive: true })
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        window.removeEventListener('resize', this.resize);
    }

    update() {
        const width = window.outerWidth;

        let display = true;

        const above = (size) => {
            display = display && width >= size;
        }

        const below = (size) => {
            display = display && width - 0.2 < size;
        }

        switch (this.show) {
            case 'sm':
                above(600);
                break;
            case 'md':
                above(1024);
                break;
            case 'lg':
                above(1440);
                break;
            case 'xl':
                above(1920);
                break;
        }

        switch (this.hide) {
            case 'sm':
                below(600);
                break;
            case 'md':
                below(1024);
                break;
            case 'lg':
                below(1440);
                break;
            case 'xl':
                below(1920);
                break;
        }

        if (display && !this.display) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }

        if (!display && this.display) {
            this.viewContainerRef.clear();
        }

        this.display = display;

        console.log('updated display', this.display)
    }

    ngOnChanges(changes): void {
        this.update();
    }
}
