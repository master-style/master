import { Attr } from '@element';

const liveTriggers = {};

export default class MasterTogglable extends HTMLElement {

    @Attr()
    hidden: boolean = true;

    protected hiddenHandler(value: boolean, oldValue: boolean) {
        if (this.isConnected && value !== oldValue) {
            value ? this.close() : this.open();
        }
        return { value, oldValue };
    }

    @Attr({ reflect: false })
    duration = 500;

    @Attr({ reflect: false })
    fade: boolean;

    @Attr({ reflect: false })
    easing = 'cubic-bezier(.25,.8,.25,1)';

    @Attr({ reflect: false })
    toggleEvent: string = 'click';

    protected animations: Animation[] = [];
    protected animation: Animation;

    private async prepare() {
        const name = this.constructor.name.split('Master')[1].toLowerCase();
        const toggleAttrKey = 'toggle-' + name;
        $('[' + toggleAttrKey + ']')
            .forEach((eachToggle: Element) => {
                if (this.matches(eachToggle.getAttribute(toggleAttrKey))) {
                    eachToggle.toggleAttribute('aria-expanded', this.hidden);
                    const icon = eachToggle
                        .children
                        .filter((eachChild) => eachChild.matches('m-icon'))[0];
                    if (icon) icon.toggleAttribute('active', this.hidden);
                }
            });
        // custom.call(target, whether);
        if (this.animation) {
            for (const eachAnimation of this.animations) {
                eachAnimation.reverse();
            }
        } else if (this.isConnected && this.duration) {
            this.toggleAttribute('changing', true);
            await this['toggling']();
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

    protected toggleEventHandler(value: any, oldValue: any) {
        if (value !== oldValue) {
            this.offToggleEvent(oldValue);
            this.onToggleEvent(value);
        } else if (!value && oldValue) {
            this.offToggleEvent(oldValue);
        }
        return { value, oldValue };
    }

    private onToggleEvent(toggleEvent: string) {
        const name = this.constructor.name.split('Master')[1].toLowerCase();
        const toggleAttrKey = 'toggle-' + name;
        toggleEvent += '.' + name;
        let liveTargets = liveTriggers[toggleEvent];
        if (liveTargets) {
            liveTargets.push(this);
        } else {
            liveTriggers[toggleEvent] = liveTargets = [this];
            document.body.on(toggleEvent, '[' + toggleAttrKey + ']', function (event) {
                const toggle = this;
                if (this.disabled) return;
                const targets = $(toggle.getAttribute(toggleAttrKey));
                targets.forEach((eachTarget: MasterTogglable) => {
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

    private offToggleEvent(trigger: string) {
        if (!trigger) return;
        trigger += '.' + this.constructor.name.split('Master')[1].toLowerCase();
        const liveTargets = liveTriggers[trigger];
        if (liveTargets) {
            if (liveTargets.length) {
                liveTargets.splice(liveTargets.indexOf(this), 1);
            } else {
                document.body.off(trigger);
                delete liveTargets[trigger];
            }
        }
    }
}
