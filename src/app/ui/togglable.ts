import { Attr } from '@element';

const liveTriggers = {};

export default class MasterTogglable extends HTMLElement {

    @Attr()
    opened: boolean;

    protected openedHandler(value: boolean, oldValue: boolean) {
        if (this.isConnected && value !== oldValue) {
            value ? this.open() : this.close();
        }
        return { value, oldValue };
    }

    @Attr({ reflect: false })
    duration = 300;

    @Attr({ reflect: false })
    fade: boolean;

    @Attr({ reflect: false })
    easing = 'cubic-bezier(.25,.8,.25,1)';

    @Attr({ reflect: false })
    toggleEvent: string = 'click';

    protected animations: Animation[] = [];
    protected animation: Animation;

    private prepare(whether, complete?: () => any) {
        const name = this.constructor.name.split('Master')[1].toLowerCase();
        const toggleAttrKey = 'toggle-' + name;
        $('[' + toggleAttrKey + ']')
            .forEach((eachToggle: Element) => {
                if (this.matches(eachToggle.getAttribute(toggleAttrKey))) {
                    eachToggle.toggleAttribute('aria-expanded', whether);
                    const icon = eachToggle
                        .children
                        .filter((eachChild) => eachChild.matches('m-icon'))[0];
                    if (icon) icon.toggleAttribute('active', whether);
                }
            });
        // custom.call(target, whether);
        if (this.animation) {
            for (const eachAnimation of this.animations) {
                eachAnimation.reverse();
            }
        } else {
            const done = () => {
                if (this.animation) {
                    if (this.animation.playbackRate === -1) whether = !whether;
                }
                this.toggleAttribute('changing', false);
                if (!whether) this.hidden = true;
                this.animation = null;
                this.animations = [];
                // this.opened = !whether;
                // $.cb.call(this, complete);
                if (complete) complete();
                // if (target.onPrepared) target.onPrepared(whether);
                // if (whether && target.onOpened) target.onOpened(whether);
                // if (!whether && target.onClosed) target.onClosed(whether);
                // emit(target, whether ? 'opened' : 'closed');
            };
            if (this.isConnected && this.duration) {
                this.toggleAttribute('changing', true);

                const options: any = {
                    easing: this.easing,
                    duration: this.duration
                };
                if (options.duration) {
                    const keyframes = this['keyframes'](options, whether); // after .animations
                    const overlayKeyframes = [
                        { opacity: 0 },
                        { opacity: 1 }
                    ];
                    if (!whether) {
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
            } else {
                done();
            }
        }
    }

    open(complete?: () => any) {
        if (this.opened === true) {
            if (complete) complete();
            return;
        }

        this.hidden = false;
        // custom.call(target); // custom callback
        // emit(target, 'open');
        this.prepare(true, complete);
    }

    close(complete?: () => any) {
        if (this.opened === false) {
            if (complete) complete();
            return;
        }

        // custom.call(target); // custom callback
        // emit(target, 'close');
        this.prepare(false, complete);
    }

    toggle(whether?: boolean) {
        const that: any = this;
        whether = typeof whether === 'boolean' ? whether : !this.opened;
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
                        whether = eachTarget.opened;
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
