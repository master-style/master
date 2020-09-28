import { Attr } from '../attr';

const liveTriggers = {};

export class ToggleableElement extends HTMLElement {

    @Attr({
        updater(togglable: ToggleableElement, value: boolean, oldValue: boolean) {
            value ? togglable.close() : togglable.open();
        }
    })
    hidden: boolean = true;

    @Attr({ reflect: false })
    duration = 500;

    @Attr({ reflect: false })
    fade: boolean;

    @Attr({ reflect: false })
    easing = 'cubic-bezier(.25,.8,.25,1)';

    @Attr({
        reflect: false,
        updater(togglable: ToggleableElement, value: any, oldValue: any) {
            if (
                !value && oldValue ||
                value && oldValue
            ) {
                if (!oldValue) return;
                oldValue += '.' + togglable.constructor['elementName'];
                const liveTargets = liveTriggers[oldValue];
                if (liveTargets) {
                    if (liveTargets.length) {
                        liveTargets.splice(liveTargets.indexOf(togglable), 1);
                    } else {
                        document.body.off(oldValue);
                        delete liveTargets[oldValue];
                    }
                }
            }
            if (value) {
                const name = togglable.constructor['elementName'];
                const toggleAttrKey = 'toggle-' + name;
                value += '.' + name;
                let liveTargets = liveTriggers[value];
                if (liveTargets) {
                    liveTargets.push(togglable);
                } else {
                    liveTriggers[value] = liveTargets = [togglable];
                    document.body.on(value, '[' + toggleAttrKey + ']', function (event) {
                        const toggle = this;
                        if (this.disabled) return;
                        const targets = $(toggle.getAttribute(toggleAttrKey));
                        targets.forEach((eachTarget: ToggleableElement) => {
                            if (liveTargets.indexOf(eachTarget) === -1) return;
                            let whether: boolean;
                            const tag = toggle.tagName;
                            const type = toggle.type;
                            if (type === 'checkbox' || type === 'radio') {
                                whether = !!toggle.checked;
                            } else if (
                                tag === 'M-INPUT' ||
                                tag === 'M-SELECT' ||
                                tag === 'M-TEXTAREA'
                            ) {
                                whether = !!toggle.value;
                            } else {
                                whether = eachTarget.hidden;
                            }
                            if (whether && !eachTarget.animation) eachTarget['trigger'] = toggle;
                            eachTarget.toggle(whether);
                        });
                    }, { passive: true });
                }
            }
        }
    })
    triggerEvent: string = 'click';

    protected animations: Animation[] = [];
    protected animation: Animation;

    private async prepare(opening: boolean) {
        // 此繞過 this.hidden 設置
        this['_hidden'] = !opening;
        this.toggleAttribute('hidden', !opening);
        if (this.triggerEvent) {
            const name = this.constructor['elementName'];
            const toggleAttrKey = 'toggle-' + name;
            $('[' + toggleAttrKey + ']')
                .forEach((eachToggle: Element) => {
                    if (this.matches(eachToggle.getAttribute(toggleAttrKey))) {
                        eachToggle.toggleAttribute('aria-expanded', !this.hidden);
                        const icon = eachToggle
                            .children
                            .filter((eachChild) => eachChild.matches('m-icon'))[0];
                        if (icon) icon.toggleAttribute('active', !this.hidden);
                    }
                });
        }
        if (this['ready']) {
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
                const completed = this.hidden ? this['onClosed'] : this['onOpened'];
                if (completed) completed.call(this);
                this.toggleAttribute('changing', false);
                this.animation = null;
                this.animations = [];
            }
        }
    }

    async open() {
        if (!this.hidden) {
            return;
        }
        const onOpen = this['onOpen'];
        if (onOpen) onOpen.call(this);
        await this.prepare(true);
    }

    async close() {
        if (this.hidden) {
            return;
        }
        const onClose = this['onClose'];
        if (onClose) onClose.call(this);
        await this.prepare(false);
    }

    async toggle(whether?: boolean) {
        whether = typeof whether === 'boolean' ? whether : this.hidden;
        await (whether ? this.open() : this.close());
    }

}
