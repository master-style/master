import { MasterElement, Attr, Event, EventEmitter } from '@master/element';

import { $, ListenerOptions } from '@master/dom';

const $body = $(document.body);

export class TargetElement extends MasterElement {

    @Attr({
        onUpdate(toggleable: TargetElement, value: boolean) {
            if (toggleable.ready) {
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
        onUpdate(target: TargetElement, value: any, oldValue: any) {
            const name = target.constructor['elementName'];
            if (oldValue) {
                $body.off({ id: [target, name] });
            }

            if (value) {
                const toggleAttrKey = 'toggle-' + name;
                const typeSets = value.split(',');
                const openingTypes = typeSets[0]?.trim()?.split(' ');
                const closingTypes = typeSets[1]?.trim()?.split(' ');
                const triggerBefore = target['triggerBefore'];
                const handle = function (event: Event) {
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
                    if (typeSets.length) {
                        whether = target.hidden;
                        if (
                            whether && openingTypes.indexOf(eventType) === -1 ||
                            !whether && closingTypes?.indexOf(eventType) === -1
                        ) {
                            return;
                        }
                        if (triggerBefore && !triggerBefore.call(target, event, trigger, whether)) {
                            return;
                        }
                    } else {
                        if (
                            'checked' in trigger &&
                            (eventType === 'input' || eventType === 'change')
                        ) {
                            whether = !!trigger.checked;
                        } else {
                            whether = target.hidden;
                        }
                    }
                    if (whether && !target.animation) {
                        target.trigger = trigger;
                    }
                    target.currentEvent = event;
                    target.toggle(whether);
                };
                const typeSet = new Set<string>(typeSets.join(' ').split(' '));
                for (const eachTypeSet of typeSet) {
                    const options: ListenerOptions = {
                        passive: true,
                        id: [target, name]
                    };
                    if (eachTypeSet.includes('contextmenu')) {
                        options.passive = false;
                        $body
                            .on(eachTypeSet, '[' + toggleAttrKey + ']', function (event) {
                                event.preventDefault();
                                handle.call(this, event);
                            }, options);
                    } else {
                        $body
                            .on(eachTypeSet, '[' + toggleAttrKey + ']', handle, options);
                    }
                }
                // open

            }
        }
    })
    triggerEvent: string = 'click';

    trigger: MasterElement;

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

    currentEvent: Event;

    protected animations: Animation[] = [];
    protected animation: Animation;

    startClose: () => Promise<boolean>;
    startOpen: () => Promise<boolean>;

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

    async openable(): Promise<boolean> {
        if (!this.hidden) {
            return false;
        }
        if (this.startOpen && !await this.startOpen()) {
            return false;
        }
        return true;
    }

    async open(): Promise<boolean> {
        if (!await this.openable()) {
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

    async closeable(): Promise<boolean> {
        if (this.hidden) {
            return false;
        }
        if (this.startClose && !await this.startClose()) {
            return false;
        }
        return true;
    }

    async close(): Promise<boolean> {
        if (!await this.closeable()) {
            return false;
        }
        this['_hidden'] = true;
        const onClose = this['onClose'];
        if (onClose) {
            await onClose.call(this);
        }
        this.closeEmitter();
        await (this.changing = this.prepare());
        this.currentEvent = null;
        this.closedEmitter();
        return true;
    }

    async toggle(whether?: boolean): Promise<boolean> {
        whether = typeof whether === 'boolean' ? whether : this.hidden;
        return await (whether ? this.open() : this.close());
    }

    onDisconnected() {
        $body.off({ id: [this, this.constructor['elementName']] });
    }

}
