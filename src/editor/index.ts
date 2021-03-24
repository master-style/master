import { Element, MasterElement, Attr, Prop } from '@master/element';
import './editor-block';
import css from './editor.scss';

import { Template } from '@master/template';
import { extend } from '../utils/extend';
import { EditorBlockElement } from './editor-block';
import SelectionArea from '@simonwep/selection-js';
import { $ } from '@master/dom';
import { SelectElement } from '../form';

const formatBlock = 'formatBlock';
const queryCommandState = command => document.queryCommandState(command);
const queryCommandValue = command => document.queryCommandValue(command);

export const exec = (command, value = null) => document.execCommand(command, false, value);

const NAME = 'editor';
const body = $(document.body);

export interface EditorBlockValue {
    type: string;
    data?: any;
}

export interface EditorBlockOptions {
    tag: string;
    name: string;
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
        ['m-select', {
            part: 'type',
            value: 'paragraph',
            class: 'sm',
            $created: (select: SelectElement) => this.typeSelect = select
        },
            () => Object.keys(this.blockOptionsByType)
                .map((type: string) => [
                    'm-option', {
                        $text: this.blockOptionsByType[type].name,
                        value: type
                    }
                ])
        ],
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

    typeSelect: SelectElement;

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
            name: 'Text',
            editable: true
        },
        h1: {
            tag: 'h1',
            name: 'Heading 1',
            editable: true
        },
        h2: {
            tag: 'h2',
            name: 'Heading 2',
            editable: true
        },
        h3: {
            tag: 'h3',
            name: 'Heading 3',
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
            return value;
        }
    })
    value: EditorBlockValue[];

    selection: SelectionArea;

    // styleWithCSS = false;

    onConnected() {

        const editor = this;

        this
            .on('focusin', 'm-editor-block', function () {
                editor.typeSelect.value = this.value.type;
            }, { id: [NAME], passive: true })

        // if (this.styleWithCSS) exec('styleWithCSS');

        this.selection = new SelectionArea({
            selectables: ['m-editor-block'],
            singleTap: {
                allow: false,
                intersect: 'touch'
            }
        })
            .on('beforestart', ({ event, store }) => {
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
                        .on('keydown', (event: KeyboardEvent) => {
                            switch (event.key) {
                                case 'Delete':
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
                        }, {
                            id: [this, NAME, 'selection'],
                            passive: true
                        });
                })
            });
    }

    addBlock(value: EditorBlockValue, index?: number) {
        if (index) {
            this.value.splice(index, 0, value);
        } else {
            this.value.push(value);
        }
        this.renderBlocks();
        return this.blocks[index];
    }

    removeBlocks(blocks: EditorBlockElement[]) {
        for (const block of blocks) {
            this.value.splice(this.value.indexOf(block.value), 1);
        }
        this.renderBlocks();
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
        this.renderBlocks();
    }

    renderBlocks() {
        this.blockTemplate.render(this);
    }
}
