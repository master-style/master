import { Directive, ElementRef, Input } from '@angular/core';

import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/';

// loadLanguages(['html', 'typescript', 'css', 'scss', 'bash']);

console.log(loadLanguages);

// import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';

const isDefined = (value: any): boolean => value !== undefined;

@Directive({
    selector: '[codeLang]'
})
export class CodeDirective {

    @Input() codeLang: string;
    @Input() demo: string;

    constructor(
        private elementRef: ElementRef
    ) {

    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;
        const isTemplate = element.tagName === 'TEMPLATE';
        let resultHTML: string;
        switch (this.codeLang) {
            case 'html':
                if (isTemplate && isDefined(this.demo)) {
                    element.before(
                        $('div', { class: 'demo' },
                            $('div', { class: 'demo-body' },
                                ...element.children
                                    .map((eachChild) => eachChild.cloneNode(true))
                            )
                        )
                    );
                }
                resultHTML = Prism.highlight(element.outerHTML, Prism.languages.html, 'html');
                break;
            default:
                break;
        }
        if (isTemplate)
            element.before(
                $('pre', {},
                    $('code', { class: 'language-' + this.codeLang }).html(resultHTML)
                )
            );
    }

}
