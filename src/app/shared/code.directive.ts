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
};

const prettierOpiton = {
    'arrowParens': 'always',
    'bracketSpacing': true,
    'embeddedLanguageFormatting': 'auto',
    'htmlWhitespaceSensitivity': 'ignore',
    'insertPragma': false,
    'jsxBracketSameLine': false,
    'jsxSingleQuote': false,
    'printWidth': 144,
    'proseWrap': 'preserve',
    'quoteProps': 'consistent',
    'requirePragma': false,
    'semi': false,
    'singleQuote': true,
    'tabWidth': 4,
    'trailingComma': 'es5',
    'useTabs': false,
    'vueIndentScriptAndStyle': false
};

@Directive({
    selector: '[codeLang]'
})
export class CodeDirective {

    @Input() codeLang: string;
    @Input() codeDemo: boolean;
    @Input() codeCollapsed: boolean;

    demoElement: Element;
    preElement: Element;
    collapseButton: Element;
    copyButton: Element;

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
                        )
                    );
                    element.before(this.demoElement);
                }

                code =
                    $('div', {}, ...element.children)
                        .innerHTML
                        .replace(/<?_[\S]*?="[\s\S]*?"/g, '')
                        .replace(/<!--bindings[^>]*-->/g, '')
                        .replace(/<\s*input[^>]*>(.*?)/g, '')
                        .replace(/<?(empty)="[^"]*"/g, '')
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
        })
            .replace('=""', '');

        code = Prism.highlight(code, Prism.languages[this.codeLang], this.codeLang);

        if (isCodeTag) {
            element.innerHTML = code;
        } else {
            const codeWrapElement =
                $('div', { class: 'code-wrap' },
                    $('code', { class: 'language-' + this.codeLang }).html(code)
                );
            this.preElement = $('pre', {},
                $('div', { class: 'code-language' }, this.codeLang),
                codeWrapElement
            );
            element.before(this.preElement);
            const functionElement =
                $('div', { class: 'code-function c:right', style: 'margin-top: .25rem' });
            if (this.codeDemo) {
                this.collapseButton =
                    $('m-button', { class: 'round xs f:fade++' })
                        .html('<i class="i-code">')
                        .on('click', () => {
                            this.demoElement.toggleAttr('collapsed');
                        });
                functionElement.append(this.collapseButton);
            }
            this.copyButton =
                $('m-button', { class: 'round xs f:fade++' })
                    .html('<i class="i-copy">')
                    .on('click', (e) => {
                        // Select some text (you could also create a range)
                        this.preElement.css('display', 'block');
                        const range = document.createRange();
                        range.selectNode(codeWrapElement);
                        const selection = window.getSelection();
                        selection.removeAllRanges();
                        selection.addRange(range);

                        if (document.execCommand('copy')) {
                            console.log('copied');
                        }
                        this.preElement.css('display', null);
                    });

            functionElement.append(this.copyButton);
            element.before(functionElement);
        }

        if (this.codeCollapsed === undefined)
            this.codeCollapsed = this.codeDemo ?? false;
        if (this.demoElement)
            this.demoElement.toggleAttr('collapsed', this.codeCollapsed);
    }

}
