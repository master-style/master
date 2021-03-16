import { Element, MasterElement, Attr, Prop } from '@master/element';
import './editor-block';
import css from './editor.scss';

import { Template } from '@master/template';
import { extend } from '../utils/extend';
import { EditorBlockElement } from './editor-block';

const defaultParagraphSeparatorString = 'defaultParagraphSeparator';
const formatBlock = 'formatBlock';
const queryCommandState = command => document.queryCommandState(command);
const queryCommandValue = command => document.queryCommandValue(command);

export const exec = (command, value = null) => document.execCommand(command, false, value)

const NAME = 'editor';

export interface EditorBlock {
    tag: string;
    type: string;
    value: any;
    attr?: any;
}

@Element('m-' + NAME)
export class EditorElement extends MasterElement {

    static css = css;

    @Prop()
    private view;

    template = new Template(() => [
        'div', { part: 'toolbar' },
        () => {
            let actionTokens = [];
            for (const actionKey in this.actions) {
                const eachAction = this.actions[actionKey];
                actionTokens = actionTokens.concat([
                    'm-button', {
                        class: 'square sm',
                        $html: eachAction.icon,
                        title: eachAction.title,
                        disabled: this.view === 'code' && eachAction.title !== 'Code',
                        $created: (element) => {
                            element.on('click', () => {
                                eachAction.result();
                                this.focus();
                            }, { id: [NAME], passive: true });
                            if (eachAction.state) {
                                const handler = () => element.toggleAttribute('active', eachAction.state());
                                this.on('keyup mouseup', handler, { id: [NAME], passive: true });
                                element.on('click', handler, { id: [NAME], passive: true });
                            }
                        }
                    }
                ]);
            }
            return actionTokens;
        },
        'm-content', { part: 'content' }, [
            'slot',
            'div', {
                part: 'code',
                spellcheck: 'false',
                contentEditable: true,
                $if: this.view === 'code',
                $created: (element) => {
                    this.codeWrap = element;
                    this.codeWrap.textContent = this.innerHTML.replace(/<? _[\S]*?="[\s\S]*?"/g, '');
                    this.innerHTML = '';
                }
            }
        ]
    ]);

    blockTemplate = new Template(() => {
        return [].concat(...this.value?.map((eachBlock: EditorBlock) => {
            const blockOption = this.blockOptions[eachBlock.type];
            const options: any = {};
            switch (eachBlock.type) {
                default:
                    options.contentEditable = blockOption.editable;
                    options.placeholder = this.placeholder;
                    options.$on = {
                        input: (event) => {
                            eachBlock.value = event.target.innerHTML;
                        }
                    }
                    if (eachBlock.value) {
                        options.$html = eachBlock.value;
                    }
            }
            return [
                'm-editor-block', {
                    type: eachBlock.type,
                    $created: (editorBlock: EditorBlockElement) => {
                        editorBlock.value = eachBlock.value
                    }
                }, [
                    blockOption.tag, options
                ]
            ]
        }) || [])
    });

    codeWrap: HTMLElement;

    blocks: EditorBlockElement[] = [];

    @Attr()
    disabled: boolean;

    @Attr({ reflect: false })
    placeholder: string = 'Type ...';

    defaultActions = {
        bold: {
            icon: '<b>B</b>',
            title: 'Bold',
            state: () => queryCommandState('bold'),
            result: () => exec('bold')
        },
        italic: {
            icon: '<i>I</i>',
            title: 'Italic',
            state: () => queryCommandState('italic'),
            result: () => exec('italic')
        },
        underline: {
            icon: '<u>U</u>',
            title: 'Underline',
            state: () => queryCommandState('underline'),
            result: () => exec('underline')
        },
        strikethrough: {
            icon: '<strike>S</strike>',
            title: 'Strike-through',
            state: () => queryCommandState('strikeThrough'),
            result: () => exec('strikeThrough')
        },
        heading1: {
            icon: '<b>H<sub>1</sub></b>',
            title: 'Heading 1',
            result: () => exec(formatBlock, '<h1>')
        },
        heading2: {
            icon: '<b>H<sub>2</sub></b>',
            title: 'Heading 2',
            result: () => exec(formatBlock, '<h2>')
        },
        heading3: {
            icon: '<b>H<sub>3</sub></b>',
            title: 'Heading 3',
            result: () => exec(formatBlock, '<h3>')
        },
        paragraph: {
            icon: '&#182;',
            title: 'Paragraph',
            result: () => exec(formatBlock, '<p>')
        },
        quote: {
            icon: '&#8220; &#8221;',
            title: 'Quote',
            result: () => exec(formatBlock, '<blockquote>')
        },
        olist: {
            icon: '&#35;',
            title: 'Ordered List',
            result: () => exec('insertOrderedList')
        },
        ulist: {
            icon: '&#8226;',
            title: 'Unordered List',
            result: () => exec('insertUnorderedList')
        },
        line: {
            icon: '&#8213;',
            title: 'Horizontal Line',
            result: () => exec('insertHorizontalRule')
        },
        link: {
            icon: '&#128279;',
            title: 'Link',
            result: () => {
                const url = window.prompt('Enter the link URL')
                if (url) exec('createLink', url)
            }
        },
        image: {
            icon: '&#128247;',
            title: 'Image',
            result: () => {
                const url = window.prompt('Enter the image URL')
                if (url) exec('insertImage', url)
            }
        }
    };

    defaultBlockOptions = {
        paragraph: {
            tag: 'p',
            editable: true
        }
    }

    @Prop({
        parse(editor: EditorElement, value) {
            return extend({}, editor.defaultActions, value);
        }
    })
    actions = this.defaultActions;

    @Prop({
        parse(editor: EditorElement, value) {
            return extend({}, editor.defaultBlockOptions, value);
        }
    })
    blockOptions = this.defaultBlockOptions;

    @Prop({
        parse(editor: EditorElement, value) {
            console.log(value);
            return value;
        }
    })
    value: any[];

    // styleWithCSS = false;

    onConnected() {
        const self = this;
        this
            .on('keydown', 'm-editor-block', function (event: any) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    const nextIndex = self.blocks.indexOf(this) + 1;
                    self.value.splice(nextIndex, 0, {
                        type: 'paragraph'
                    });
                    self.blockTemplate.render(self);
                    (self.blocks[nextIndex].firstChild as any).focus();
                }
            }, { id: [NAME] });
        // if (this.styleWithCSS) exec('styleWithCSS');
        exec(defaultParagraphSeparatorString, 'div');
    }

    onDisconnected() {
        this.off({ id: [NAME] })
    }

    render() {
        this.template.render(this.shadowRoot);
        this.blockTemplate.render(this);
    }
}
