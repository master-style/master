import { Element, MasterElement, Attr, Prop } from '@master/element';
import './editor-block';
import css from './editor.scss';

import { Template } from '@master/template';
import { extend } from '../utils/extend';
import { getCaretIndex } from '../utils/get-caret-index';
import { EditorBlockElement } from './editor-block';
import SelectionArea from '@simonwep/selection-js';
import { $ } from '@master/dom';

const formatBlock = 'formatBlock';
const queryCommandState = command => document.queryCommandState(command);
const queryCommandValue = command => document.queryCommandValue(command);

export const exec = (command, value = null) => document.execCommand(command, false, value);

const NAME = 'editor';
const body = $(document.body);

enum KeyCode {
    ENTER = 13,
    DELETE = 46,
    BACKSPACE = 8
}

export interface EditorBlockValue {
    type: string;
    data?: any;
}

export interface EditorBlockOptions {
    tag: string;
    editable: boolean;
}

export type EditorBlockOptionsByType = Record<string, EditorBlockOptions>;

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

    blockTemplate = new Template(() => [].concat(...this.value?.map((blockValue: EditorBlockValue) => [
        'm-editor-block', {
            $created: (block: EditorBlockElement) => {
                block.value = blockValue;
                block.options = this.blockOptionsByType[blockValue.type];
                block.placeholder = this.placeholder;
            }
        }
    ]) || []));

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

    defaultBlockOptionsByType: EditorBlockOptionsByType = {
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
            return extend({}, editor.defaultBlockOptionsByType, value);
        }
    })
    blockOptionsByType = this.defaultBlockOptionsByType;

    @Prop({
        parse(editor: EditorElement, value) {
            console.log(value);
            return value;
        }
    })
    value: EditorBlockValue[];

    selection: SelectionArea;

    // styleWithCSS = false;

    onConnected() {
        const editor = this;
        this
            .on('keydown', 'm-editor-block', function (event: any) {
                const block: EditorBlockElement = this;
                const currentIndex = editor.blocks.indexOf(block);
                const nextIndex = currentIndex + 1;
                const prevIndex = currentIndex - 1;
                const prevBlock = prevIndex !== -1 ? editor.blocks[prevIndex] : undefined;
                const caretIndex = getCaretIndex(event.target);
                switch (event.keyCode) {
                    case KeyCode.ENTER:
                        event.preventDefault();
                        console.log(caretIndex);
                        editor.value.splice(nextIndex, 0, {
                            type: 'paragraph'
                        });
                        editor.blockTemplate.render(editor);
                        const newBlock = editor.blocks[nextIndex];
                        if (newBlock.options.editable) {
                            newBlock.data = '';
                            newBlock.focus();
                        }
                        break;
                    case KeyCode.BACKSPACE:
                        if (caretIndex === 0) {
                            event.preventDefault();
                            if (prevBlock && prevBlock.options.editable) {
                                const caretPosition = prevBlock.caretPosition;
                                if (block.value.data) {
                                    prevBlock.data = prevBlock.data + block.value.data;
                                }
                                prevBlock.caretPosition = caretPosition;
                            }
                            editor.removeBlocks([block]);
                        }
                        break;
                }
            }, { id: [NAME] });

        // if (this.styleWithCSS) exec('styleWithCSS');

        this.selection = new SelectionArea({
            selectables: ['m-editor-block'],
            singleTap: {
                allow: false,
                intersect: 'touch'
            }
        })
            .on('beforestart', ({ event, store }) => {
                console.log(event, store);
                for (const block of this.blocks) {
                    if (event.target === block || block.contains((event.target) as any)) {
                        return false;
                    }
                }
            })
            .on('start', ({ store, event }) => {
                // Remove class if the user isn't pressing the control key or ⌘ key
                if (!event.ctrlKey && !event.metaKey) {
                    this.clearSelection(store);
                }
            })
            .on('move', ({ store: { changed: { added, removed } } }) => {
                // Add a custom class to the elements that where selected.
                for (const el of added) {
                    el.toggleAttribute('selected', true);
                }
                // Remove the class from elements that where removed
                // since the last selection
                for (const el of removed) {
                    el.removeAttribute('selected');
                }
            })
            .on('stop', ({ store, event }) => {
                this.selection.keepSelection();
                setTimeout(() => {
                    body
                        .on('keydown', (event: any) => {
                            switch (event.keyCode) {
                                case KeyCode.DELETE:
                                    this.clearSelection(store);
                                    this.removeBlocks((store.selected as EditorBlockElement[]));
                                    break;
                            }
                        }, {
                            id: [this, NAME, 'selection'],
                            passive: true
                        })
                        .on('click', () => {
                            this.clearSelection(store);
                            console.log('click');
                        }, {
                            id: [this, NAME, 'selection'],
                            passive: true
                        });
                })
            });
    }

    removeBlocks(blocks: EditorBlockElement[]) {
        for (const block of blocks) {
            console.log(this.value.indexOf(block.value));
            this.value.splice(this.value.indexOf(block.value), 1);
        }
        this.blockTemplate.render(this);
    }

    clearSelection(store) {
        body.off({ id: [this, NAME, 'selection'] });
        for (const el of store.stored) {
            el.removeAttribute('selected');
        }
        this.selection.clearSelection();
    }

    onDisconnected() {
        this.off({ id: [NAME] });
        this.selection.destroy();
    }

    render() {
        this.template.render(this.shadowRoot);
        this.blockTemplate.render(this);
    }
}
