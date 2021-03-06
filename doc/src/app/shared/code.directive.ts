import { Directive, ElementRef, Input } from '@angular/core';
import { $ } from '@master/dom';

declare const Prism: any;
declare const prettier: any;
declare const prettierPlugins: any;

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
    @Input() codeCopy: boolean = true;
    @Input() selector: string;

    @Input()
    set codeFactors(value) {
        window.requestAnimationFrame(() => {
            this.highlight();
        });
    }

    demoElement: Element;
    preElement: Element;
    collapseButton: Element;
    copyButton: Element;
    functionElement: Element;

    init = false;

    constructor(
        private elementRef: ElementRef
    ) { }

    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        if (!this.init) {
            this.highlight();
        }
    }

    highlight(): void {
        this.init = true;

        if (this.demoElement) {
            this.demoElement.remove();
            this.demoElement = null;
        }

        if (this.preElement) {
            this.preElement.remove();
            this.preElement = null;
        }

        if (this.functionElement) {
            this.functionElement.remove();
            this.functionElement = null;
        }

        const element = this.elementRef.nativeElement;
        const isTemplateTag = element.tagName === 'TEMPLATE';
        const isCodeTag = element.tagName === 'CODE';
        const targetElements = Array.from(this.selector
            ? element.querySelectorAll(this.selector)
            : element.children);
        let code: string;

        switch (this.codeLang) {
            case 'html':
                code =
                    $('div', {}, ...targetElements
                        .map((eachNode: any) => eachNode.cloneNode(true)))
                        .innerHTML
                        .replace(/<?_[\S]*?="[\s\S]*?"/g, '')
                        .replace(/<!--bindings[^>]*-->/g, '')
                        .replace(/<\s*input[^>]*>(.*?)/g, '')
                        .replace(/<?(empty)="[^"]*"/g, '');

                if (isTemplateTag && this.codeDemo) {
                    this.demoElement = $('div', { class: 'demo with:code' },
                        $('div', { class: 'demo-body' },
                            ...element.children
                        )
                    );
                    element.before(this.demoElement);
                }
                break;
            case 'typescript':
                code = element.textContent;
                break;
            case 'css':
                console.log((element.innerHTML));
                code = element.innerHTML;
            default:
                break;
        }

        code = prettier.format(code, {
            parser: this.codeLang,
            plugins: (prettierPlugins),
            ...prettierOpiton
        })
            .replace('=""', '');

        code = Prism.highlight(code, Prism.languages[this.codeLang], this.codeLang);

        if (isCodeTag) {
            element.innerHTML = code;
        } else {
            const codeWrapElement =
                $('div', { class: 'code-wrap' },
                    $('code', {
                        class: 'language-' + this.codeLang,
                        html: code
                    })
                );
            this.preElement = $('pre', {},
                $('div', { class: 'code-language' }, this.codeLang),
                codeWrapElement
            );
            element.before(this.preElement);
            this.functionElement =
                $('div', { class: 'code-function c:right', style: 'margin-top: .25rem' });
            if (this.codeDemo) {
                this.collapseButton =
                    $('m-button', {
                        class: 'round xs f:fade++',
                        html: '<i class="i-code">'
                    })
                        .on('click', () => {
                            $(this.demoElement).toggleAttr('collapsed');
                        });
                this.functionElement.append(this.collapseButton);
            }

            if (this.codeCopy) {
                this.copyButton =
                    $('m-button', {
                        class: 'round xs f:fade++',
                        html: '<i class="i-copy">'
                    })
                        .on('click', (e) => {
                            // Select some text (you could also create a range)
                            $(this.preElement).css('display', 'block');
                            const range = document.createRange();
                            range.selectNode(codeWrapElement);
                            const selection = window.getSelection();
                            selection.removeAllRanges();
                            selection.addRange(range);

                            if (document.execCommand('copy')) {
                                console.log('copied');
                            }
                            $(this.preElement).css('display', null);
                        });

                this.functionElement.append(this.copyButton);
            }
            element.before(this.functionElement);
        }

        if (this.codeCollapsed === undefined)
            this.codeCollapsed = this.codeDemo ?? false;
        if (this.demoElement)
            $(this.demoElement).toggleAttr('collapsed', this.codeCollapsed);

    }

}
