import { Directive, ElementRef, Input } from '@angular/core';

import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/';

// loadLanguages(['html', 'typescript', 'css', 'scss', 'bash']);

console.log(loadLanguages);

// import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';

const isDefined = (value: any): boolean => typeof value !== undefined;

@Directive({
    selector: '[code]'
})
export class CodeDirective {

    @Input() code: string;
    @Input() demo: string;

    constructor(
        private elementRef: ElementRef
    ) {

    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;
        switch (this.code) {
            case 'html':
                if (isDefined(this.demo)) {
                    element.before(
                        $('div', { class: 'demo' },
                            ...element.children
                                .map((eachChild) => eachChild.cloneNode(true))
                        )
                    );
                }
                element.innerHTML = Prism.highlight(element.outerHTML, Prism.languages.html, 'html');
                break;

            default:
                break;
        }
    }

}
