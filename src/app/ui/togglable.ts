import { Attr } from '@element';

const liveTriggers = {};

export default class MasterTogglable extends HTMLElement {

    @Attr()
    hidden: boolean;

    protected hiddenHandler(value: boolean, oldValue: boolean) {
        if (this.isConnected && value !== oldValue) {
            value ? this.close() : this.open();
        }
        return { value, oldValue };
    }

    @Attr({ reflect: false })
    duration = 1000;

    @Attr({ reflect: false })
    fade: boolean;

    @Attr({ reflect: false })
    easing = 'cubic-bezier(.25,.8,.25,1)';

    @Attr({ reflect: false })
    toggleEvent: string = 'click';

    protected animations: Animation[] = [];
    protected animation: Animation;

    private prepare(complete?: () => any) {
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
        } else {
            const done = () => {
                this.toggleAttribute('changing', false);
                this.animation = null;
                this.animations = [];
                console.log('finished');
                // $.cb.call(this, complete);
                if (complete) complete();
                // if (target.onPrepared) target.onPrepared(whether);
                // if (whether && target.onOpened) target.onOpened(whether);
                // if (!whether && target.onClosed) target.onClosed(whether);
                // emit(target, whether ? 'hidden' : 'closed');
            };
            if (this.isConnected && this.duration) {
                this.toggleAttribute('changing', true);

                const options: any = {
                    easing: this.easing,
                    duration: this.duration
                };
                const keyframes = this['keyframes'](options, this.hidden); // after .animations
                const overlayKeyframes = [
                    { opacity: 0 },
                    { opacity: 1 }
                ];
                if (this.hidden) {
                    keyframes.reverse();
                    overlayKeyframes.reverse();
                }
                if (this['overlay']) {
                    this.animations.push(
                        this['overlayElement'].animate(overlayKeyframes, options)
                    );
                }
                this.animations.push(
                    this.animation = (options.target || this).animate(keyframes, options)
                );
                this.animation.onfinish = done;
            } else {
                done();
            }
        }
    }

    open(complete?: () => any) {
        if (this.hidden === false) {
            if (complete) complete();
            return;
        }
        console.log('open', this.hidden);
        this['_hidden'] = false;
        this.toggleAttribute('hidden', false);
        // custom.call(target); // custom callback
        // emit(target, 'open');
        this.prepare(complete);
    }

    close(complete?: () => any) {
        if (this.hidden === true) {
            if (complete) complete();
            return;
        }
        console.log('close', this.hidden);
        this['_hidden'] = true;
        this.toggleAttribute('hidden', true);
        // this.hidden = true;
        // custom.call(target); // custom callback
        // emit(target, 'close');
        this.prepare(complete);
    }

    toggle(whether?: boolean) {
        const that: any = this;
        whether = typeof whether === 'boolean' ? whether : this.hidden;
        whether ? that.open() : that.close();
        return whether;
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
