import { Directive, ElementRef, Input } from '@angular/core';

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
    htmlWhitespaceSensitivity: 'ignore'
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

    ngAfterContentInit(): void {
        const element = this.elementRef.nativeElement;
        const isTemplateTag = element.tagName === 'TEMPLATE';
        const isCodeTag = element.tagName === 'CODE';
        let code: string;
        switch (this.codeLang) {
            case 'html':
                if (isTemplateTag && this.codeDemo) {
                    element.before(
                        $('div', { class: 'demo with:code' },
                            $('div', { class: 'demo-body' },
                                ...element.children
                                    .map((eachChild) => eachChild.cloneNode(true))
                            )
                        )
                    );
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

        if (this.codeEndLines) {
            code += '\n'.repeat(this.codeEndLines);
        }

        code = Prism.highlight(code, Prism.languages[this.codeLang], this.codeLang);

        if (isCodeTag) {
            element.innerHTML = code;
        } else {
            element.before(
                $('pre', {},
                    $('code', { class: 'language-' + this.codeLang }).html(code)
                )
            );
        }
    }

}
