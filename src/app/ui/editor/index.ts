import { Element, Attr, Prop } from '../../element';
import css from './editor.scss';

const defaultParagraphSeparatorString = 'defaultParagraphSeparator'
const formatBlock = 'formatBlock'
const queryCommandState = command => document.queryCommandState(command)
const queryCommandValue = command => document.queryCommandValue(command)

export const exec = (command, value = null) => document.execCommand(command, false, value)

const NAME = 'editor';

@Element({
    tag: 'm-' + NAME,
    css
})
export class EditorElement extends HTMLElement {

    template = window['Master'](() => [
        'div', { part: 'toolbar' },
        () => {
            let actionTokens = [];
            for (const actionKey in this.actions) {
                const eachAction = this.actions[actionKey];
                actionTokens = actionTokens.concat([
                    'm-button', {
                        class: 'theme square',
                        $html: eachAction.icon,
                        title: eachAction.title,
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
            console.log(actionTokens);
            return actionTokens;
        },
        'm-content', { part: 'content' }, [
            'slot'
        ]
    ]);

    @Attr()
    disabled: boolean;

    actions = {
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
        code: {
            icon: '&lt;/&gt;',
            title: 'Code',
            result: () => exec(formatBlock, '<pre>')
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

    render() {
        this.template.render(this.shadowRoot);
    }

    // styleWithCSS = false;

    onConnected() {

        this.contentEditable = 'true';

        this.on('input', ({ target: { firstChild } }: any) => {
            if (firstChild && firstChild.nodeType === 3) {
                exec(formatBlock, '<div>');
            }
            else if (this.innerHTML === '<br>') {
                this.innerHTML = '';
            }
        }, { id: [NAME], passive: true });

        this.on('keydown', (event: any) => {
            if (event.key === 'Enter' && queryCommandValue(formatBlock) === 'blockquote') {
                setTimeout(() => exec(formatBlock, 'div'), 0);
            }
        }, { id: [NAME], passive: true });

        // if (this.styleWithCSS) exec('styleWithCSS');

        exec(defaultParagraphSeparatorString, 'div');
    }

    onDisconnected() {

    }

}
