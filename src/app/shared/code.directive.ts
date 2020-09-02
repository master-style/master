import { Directive, ElementRef, Input, Output, SimpleChange } from '@angular/core';

import Prism from 'prismjs';
import 'prismjs/components/prism-scss.min.js';
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-typescript.min.js';

import prettier from 'prettier';
import htmlParser from 'prettier/parser-html.js';
import typescriptParser from 'prettier/parser-typescript.js';

const prettierParser = {
    'html': htmlParser,
    'typescript': typescriptParser
}

const prettierOpiton = {
    tabWidth: 4,
    printWidth: 144,
    htmlWhitespaceSensitivity: 'ignore'
};

@Directive({
    selector: '[codeLang]'
})
export class CodeDirective {

    @Input() codeLang: string;
    @Input() codeDemo: boolean;
    @Input() codeCollapsed: boolean;

    demoElement: Element;

    constructor(
        private elementRef: ElementRef
    ) { }

    ngAfterContentInit(): void {
        const element = this.elementRef.nativeElement;
        const isTemplateTag = element.tagName === 'TEMPLATE';
        const isCodeTag = element.tagName === 'CODE';
        let code: string;

        switch (this.codeLang) {
            case 'html':
                if (isTemplateTag && this.codeDemo) {
                    this.demoElement = $('div', { class: 'demo with:code' },
                        $('div', { class: 'demo-body' },
                            ...element.children
                                .map((eachChild) => eachChild.cloneNode(true))
                        )
                    );
                    element.before(this.demoElement);
                }

                code =
                    $('div', {}, ...element.children)
                        .innerHTML
                        // remove prefix-underscore attribute
                        .replace(/_[\s\S]*?="[\s\S]*?"/g, '')
                        .replace(/<!--[\s\S]*?-->/g, '')
                    ;
                break;
            case 'typescript':
                // code = element;
                code = element.textContent;
                break;
            default:
                break;
        }

        code = prettier.format(code, {
            parser: this.codeLang,
            plugins: [prettierParser[this.codeLang]],
            ...prettierOpiton
        });

        code = Prism.highlight(code, Prism.languages[this.codeLang], this.codeLang);

        if (isCodeTag) {
            element.innerHTML = code;
        } else {
            element.before(
                $('pre', {},
                    $('div', { class: 'code-language' }, this.codeLang),
                    $('div', { class: 'code-wrap' },
                        $('code', { class: 'language-' + this.codeLang }).html(code)
                    ),
                )
            );
        }

        this.collapse();
    }

    collapse() {
        if (this.codeCollapsed === undefined)
            this.codeCollapsed = this.codeDemo ?? false;
        if (this.demoElement)
            this.demoElement.toggleAttr('collapsed', this.codeCollapsed);
    }

}
