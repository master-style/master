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
    duration: number = 500;

    @Attr({ reflect: false })
    durationOnClose: number;

    @Attr({ reflect: false })
    delay: number;

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
                const typesOnOpen = typeSets[0]?.trim()?.split(' ');
                const typesOnClose = typeSets[1]?.trim()?.split(' ');
                const preventTrigger = target['preventTrigger'];
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
                    let hidden: boolean = target.hidden;
                    const oldTrigger = target.trigger;

                    if (preventTrigger?.call(target, { event, trigger, oldTrigger, hidden })) {
                        return;
                    }

                    target.trigger = trigger;

                    if (
                        /** 執行開啟：是否吻合執行開啟的條件與事件 */
                        hidden && typesOnOpen.indexOf(eventType) !== -1 ||
                        /** 執行關閉：是否吻合執行關閉的條件與事件 */
                        !hidden && typesOnClose?.indexOf(eventType) !== -1
                    ) {
                        if (
                            'checked' in trigger &&
                            (eventType === 'input' || eventType === 'change')
                        ) {
                            hidden = !!trigger.checked;
                            if (hidden) {
                                target.trigger = trigger;
                            }
                        }
                        target.currentEvent = event;
                        target.toggle(hidden);
                    } else {
                        return;
                    }
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
    closingDelay;
    openingDelay;

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
        if (this.animations.length) {
            // console.log('-- 反轉', this.hidden ? 'CLOSE' : 'OPEN');
            for (const animation of this.animations) {
                animation.reverse();
            }
        } else if (this.duration) {
            // console.log('-- 動畫', this.hidden ? 'CLOSE' : 'OPEN');
            this.toggleAttribute('changing', true);
            await this['toggling']({
                easing: this.easing,
                duration: this.hidden && this.durationOnClose || this.duration
            });
            const hidden = this.hidden;
            this.toggleAttribute('changing', false);
            this.changing = null;
            this.animations = [];
            if (hidden) {
                this.toggleAttribute('hidden', true);
                this['onClosed']?.call(this);
            } else {
                this['onOpened']?.call(this);
            }
            console.log('-- 動畫完成');
        }
    }

    async openable(): Promise<boolean> {
        if (
            !this.hidden ||
            this.startOpen && !await this.startOpen()
        ) {
            return false;
        }
        return true;
    }

    async open(): Promise<boolean> {

        if (!await this.openable()) {
            return false;
        }

        if (this.closingDelay) {
            this.closingDelay = clearInterval(this.closingDelay);
        }

        if (this.delay) {
            if (this.openingDelay) {
                return;
            } else if (!this.changing) {
                await new Promise<void>((resolve) => {
                    this.openingDelay = setTimeout(() => {
                        resolve();
                        this.openingDelay = null;
                    }, this.delay);
                })
            }
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
        if (
            this.hidden ||
            this.startClose && !await this.startClose()
        ) {
            return false;
        }
        return true;
    }

    async close(): Promise<boolean> {
        if (!await this.closeable()) {
            return false;
        }

        if (this.openingDelay) {
            this.openingDelay = clearInterval(this.openingDelay);
        }

        if (this.delay) {
            if (this.closingDelay) {
                return;
            } else if (!this.changing) {
                await new Promise<void>((resolve) => {
                    this.closingDelay = setTimeout(() => {
                        resolve();
                        this.closingDelay = null;
                    }, this.delay);
                })
            }
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

    async toggle(hidden?: boolean): Promise<boolean> {
        hidden = typeof hidden === 'boolean' ? hidden : this.hidden;
        return await (hidden ? this.open() : this.close());
    }

    onDisconnected() {
        $body.off({ id: [this, this.constructor['elementName']] });
    }

}
