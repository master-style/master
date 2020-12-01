import { Attr } from '../attr';
import { Event } from '../event';

export class TargetElement extends HTMLElement {

    @Attr({
        update(toggleable: TargetElement, value: boolean) {
            if (toggleable['ready']) {
                const start = toggleable[value ? 'onClose' : 'onOpen'];
                if (start) start();
                toggleable.prepare();
            }
        }
    })
    hidden: boolean = false;

    @Attr({ reflect: false })
    duration = 500;

    @Attr({ reflect: false })
    fade: boolean;

    @Attr({ reflect: false })
    easing = 'cubic-bezier(.25,.8,.25,1)';

    @Attr({
        reflect: false,
        update(target: TargetElement, value: any, oldValue: any) {
            const name = target.constructor['elementName'];
            if (oldValue) {
                document.body.off({ id: [target, name] });
            }
            if (value) {
                const toggleAttrKey = 'toggle-' + name;
                document.body.on(value, '[' + toggleAttrKey + ']', function (event) {
                    const trigger = this;
                    if (this.disabled) return;
                    const targets = $(trigger.getAttribute(toggleAttrKey));
                    targets.forEach((eachTarget: TargetElement) => {
                        if (eachTarget !== eachTarget) {
                            return;
                        }
                        let whether: boolean;
                        if (
                            'checked' in trigger
                            && (event.type === 'input' || event.type === 'change')
                        ) {
                            whether = !!trigger.checked;
                        } else {
                            whether = eachTarget.hidden;
                        }
                        if (whether && !eachTarget.animation) {
                            eachTarget['trigger'] = trigger;
                        }
                        eachTarget.toggle(whether);
                    });
                }, { passive: true, id: [target, name] });
            }
        }
    })
    triggerEvent: string = 'click';

    @Attr({ reflect: false, render: false })
    emit: boolean = false;

    @Event()
    openEmitter: EventEmitter;

    @Event()
    closeEmitter: EventEmitter;

    @Event()
    openedEmitter: EventEmitter;

    @Event()
    closedEmitter: EventEmitter;

    changing: Promise<void>;

    protected animations: Animation[] = [];
    protected animation: Animation;

    private async prepare() {
        if (this.triggerEvent) {
            const name = this.constructor['elementName'];
            const toggleAttrKey = 'toggle-' + name;
            $('[' + toggleAttrKey + ']')
                .forEach((eachToggle: Element) => {
                    if (this.matches(eachToggle.getAttribute(toggleAttrKey))) {
                        eachToggle.toggleAttribute('aria-expanded', !this.hidden);
                        const icon = eachToggle.querySelector('.toggled');
                        if (icon) icon.toggleAttribute('active', !this.hidden);
                    }
                });
        }
        if (this.animation) {
            for (const eachAnimation of this.animations) {
                eachAnimation.reverse();
            }
        } else if (this.duration) {
            this.toggleAttribute('changing', true);
            await this['toggling']({
                easing: this.easing,
                duration: this.duration
            });
            const hidden = this.hidden;
            if (hidden) {
                this.toggleAttribute('hidden', true);
            }
            const completed = hidden ? this['onClosed'] : this['onOpened'];
            if (completed) completed.call(this);
            this.toggleAttribute('changing', false);
            this.animation = null;
            this.animations = [];
        }
    }

    async open() {
        if (!this.hidden) {
            return;
        }
        this['_hidden'] = false;
        this.toggleAttribute('hidden', false);
        const onOpen = this['onOpen'];
        if (onOpen) {
            await onOpen.call(this);
        }
        this.openEmitter();
        await (this.changing = this.prepare());
        this.openedEmitter();
    }

    async close() {
        if (this.hidden) {
            return;
        }
        this['_hidden'] = true;
        const onClose = this['onClose'];
        if (onClose) {
            await onClose.call(this);
        }
        this.closeEmitter();
        await (this.changing = this.prepare());
        this.closedEmitter();
    }

    async toggle(whether?: boolean) {
        whether = typeof whether === 'boolean' ? whether : this.hidden;
        await (whether ? this.open() : this.close());
    }

    onDisconnected() {
        document.body.off({ id: [this, this.constructor['elementName']] });
    }

}
