import { Attr } from '../attr';

const liveTriggers = {};

export class ToggleableElement extends HTMLElement {

    @Attr({
        updater(togglable: ToggleableElement, value: boolean, oldValue: boolean) {
            value ? togglable.close() : togglable.open();
        }
    })
    hidden: boolean;

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

    private async prepare() {
        const name = this.constructor.name.split('Master')[1].toLowerCase();
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
        if (this['ready']) {
            if (this.animation) {
                for (const eachAnimation of this.animations) {
                    eachAnimation.reverse();
                }
            } else if (this.duration) {
                this.toggleAttribute('changing', true);
                await this['toggling']();
            }
        }
    }

    async open() {
        if (this.hidden === false) {
            return;
        }
        // 此繞過 this.hidden 設置
        this['_hidden'] = false;
        this.toggleAttribute('hidden', false);
        // custom.call(target); // custom callback
        // emit(target, 'open');
        await this.prepare();
    }

    async close() {
        if (this.hidden === true) {
            return;
        }
        // 此繞過 this.hidden 設置
        this['_hidden'] = true;
        this.toggleAttribute('hidden', true);
        // this.hidden = true;
        // custom.call(target); // custom callback
        // emit(target, 'close');
        await this.prepare();
    }

    async toggle(whether?: boolean) {
        whether = typeof whether === 'boolean' ? whether : this.hidden;
        await (whether ? this.open() : this.close());
    }

}
