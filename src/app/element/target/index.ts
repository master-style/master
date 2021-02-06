import { Attr } from '../attr';
import { Event } from '../event';
import { MasterElement } from '../core';
import { $ } from '@master/dom';

const $body = $(document.body);

export class TargetElement extends MasterElement {

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
                $body.off({ id: [target, name] });
            }

            if (value) {
                const toggleAttrKey = 'toggle-' + name;
                const typeSets = value.split(',');
                const handleTrigger = target['handleTrigger'];

                // open
                $body
                    .on(typeSets.join(' '), '[' + toggleAttrKey + ']', function (event) {
                        const trigger = this;
                        if (this.disabled) {
                            return;
                        }
                        const targetSelector = trigger.getAttribute(toggleAttrKey);
                        if (!target.matches(targetSelector)) {
                            return;
                        }
                        const eventType = event.type;
                        let whether: boolean;
                        if (typeSets.length > 1) {
                            whether = target.hidden;
                            if (
                                whether && typeSets[0].split(' ').indexOf(eventType) === -1
                                || !whether && typeSets[1].split(' ').indexOf(eventType) === -1
                            ) {
                                return;
                            }
                            if (handleTrigger && handleTrigger.call(target, event, whether) === false) {
                                return;
                            }
                        } else {
                            if (
                                'checked' in trigger
                                && (eventType === 'input' || eventType === 'change')
                            ) {
                                whether = !!trigger.checked;
                            } else {
                                whether = target.hidden;
                            }
                        }
                        if (whether && !target.animation) {
                            target['trigger'] = trigger;
                        }
                        target.toggle(whether);
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
            document.querySelectorAll('[' + toggleAttrKey + ']')
                .forEach((eachToggle: Element) => {
                    if (this.matches(eachToggle.getAttribute(toggleAttrKey))) {
                        const hidden = this.hidden;
                        eachToggle.toggleAttribute('aria-expanded', !hidden);
                        eachToggle.toggleAttribute('active', !hidden);
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
            this.toggleAttribute('changing', false);
            this.animation = null;
            this.animations = [];
            const completed = hidden ? this['onClosed'] : this['onOpened'];
            if (completed) completed.call(this);
        }
    }

    async open() {
        if (!this.hidden) {
            return false;
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
        return true;
    }

    async close() {
        if (this.hidden) {
            return false;
        }
        this['_hidden'] = true;
        const onClose = this['onClose'];
        if (onClose) {
            await onClose.call(this);
        }
        this.closeEmitter();
        await (this.changing = this.prepare());
        this.closedEmitter();
        return true;
    }

    async toggle(whether?: boolean) {
        whether = typeof whether === 'boolean' ? whether : this.hidden;
        await (whether ? this.open() : this.close());
    }

    onDisconnected() {
        $body.off({ id: [this, this.constructor['elementName']] });
    }

}
