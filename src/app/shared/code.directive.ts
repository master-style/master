import { Directive, ElementRef, Input } from '@angular/core';

import Prism from 'prismjs';
import 'prismjs/components/prism-scss.min.js';
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';

import prettier from 'prettier';
import htmlParser from 'prettier/parser-html.js';
import typescriptParser from 'prettier/parser-typescript.js';

const prettierPlugins = [htmlParser, typescriptParser];

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
        let code: string;
        switch (this.codeLang) {
            case 'html':
                if (isTemplate && isDefined(this.demo)) {
                    element.before(
                        $('div', { class: 'demo with:code' },
                            $('div', { class: 'demo-body' },
                                ...element.children
                                    .map((eachChild) => eachChild.cloneNode(true))
                            )
                        )
                    );
                }
                code = $('div', {}, ...element.children).innerHTML;
                code = prettier.format(code, {
                    parser: 'html',
                    plugins: prettierPlugins
                });
                break;
            default:
                break;
        }

        code = Prism.highlight(code, Prism.languages.html, 'html');

        if (isTemplate)
            element.before(
                $('pre', {},
                    $('code', { class: 'language-' + this.codeLang }).html(code)
                )
            );
    }

}
