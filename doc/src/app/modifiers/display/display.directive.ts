import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import debounce from 'lodash-es/debounce';
import { DisplayService } from './display.service';

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
        private templateRef: TemplateRef<any>,
        private displayService: DisplayService
    ) {
        this.resize = debounce(() => this.update(), this.displayService.options.debounceWait);
    }

    ngOnInit(): void {
        window.addEventListener('resize', this.resize, { passive: true })
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        window.removeEventListener('resize', this.resize);
    }

    update() {
        const width = window.outerWidth;

        let display = true;

        if (this.show) {
            display = display && width >= this.displayService.options.breakpoints[this.show];
        }

        if (this.hide) {
            display = display && width - 0.2 < this.displayService.options.breakpoints[this.hide];
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

    ngOnChanges(): void {
        this.update();
    }
}
