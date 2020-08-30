import { Directive, ElementRef, Input } from '@angular/core';

import Prism from 'prismjs';
import 'prismjs/components/prism-scss.min.js';
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';

import prettier from 'prettier';
import htmlParser from 'prettier/parser-html.js';
import typescriptParser from 'prettier/parser-typescript.js';

const prettierOpiton = {
    plugins: [htmlParser, typescriptParser],
    tabWidth: 4
};

@Directive({
    selector: '[codeLang]'
})
export class CodeDirective {

    @Input() codeLang: string;
    @Input() codeDemo: boolean;
    @Input() codeEndLines: number;

    constructor(
        private elementRef: ElementRef
    ) { }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;
        const isTemplate = element.tagName === 'TEMPLATE';
        let code: string;
        switch (this.codeLang) {
            case 'html':
                if (isTemplate && this.codeDemo) {
                    element.before(
                        $('div', { class: 'demo with:code' },
                            $('div', { class: 'demo-body' },
                                ...element.children
                                    .map((eachChild) => eachChild.cloneNode(true))
                            )
                        )
                    );
                }
                console.log(
                    element.querySelectorAll('*')
                        .forEach((eachElement: Element) => {
                            for (const attrName in eachElement.attr()) {
                                if (attrName.indexOf('_') !== -1)
                                    eachElement.attr(attrName, null);
                            }
                        })
                );
                code = $('div', {}, ...element.children).innerHTML;
                code = prettier.format(code, {
                    parser: 'html',
                    ...prettierOpiton
                });
                break;
            default:
                break;
        }

        if (this.codeEndLines)
            code += '\n'.repeat(this.codeEndLines);
        code = Prism.highlight(code, Prism.languages.html, 'html');

        if (isTemplate)
            element.before(
                $('pre', {},
                    $('code', { class: 'language-' + this.codeLang }).html(code)
                )
            );
    }

}
