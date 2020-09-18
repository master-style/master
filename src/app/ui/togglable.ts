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
    duration = 300;

    @Attr({ reflect: false })
    fade: boolean;

    @Attr({ reflect: false })
    easing = 'cubic-bezier(.25,.8,.25,1)';

    @Attr({ reflect: false })
    toggleEvent: string = 'tap';

    protected animations: Animation[] = [];
    protected animation: Animation;

    private prepare(whether, complete?: () => any) {
        const name = this.constructor.name.split('Master')[1].toLowerCase();
        $('[toggle-' + name + ']')
            .forEach((eachToggle: Element) => {
                if (this.matches(eachToggle.getAttribute(name))) {
                    eachToggle.toggleAttribute('aria-expanded', whether);
                    const icon = eachToggle
                        .children
                        .filter((eachChild) => eachChild.matches('m-icon'))[0];
                    if (icon) icon.toggleAttribute('active', whether);
                }
            });
        // custom.call(target, whether);
        console.log('fuck', this.animation);
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
                // if (!whether) this.hidden = true;
                this.animation = null;
                this.animations = [];
                this.hidden = !whether;
                // $.cb.call(this, complete);
                // if (target.onPrepared) target.onPrepared(whether);
                // if (whether && target.onOpened) target.onOpened(whether);
                // if (!whether && target.onClosed) target.onClosed(whether);
                // emit(target, whether ? 'hidden' : 'closed');
            };
            if (this.isConnected && this.duration) {
                this.toggleAttribute('changing', true);

                const options: any = {
                    easing: this.easing,
                    duration: this.duration,
                    reverse: !whether
                };
                if (options.duration) {
                    const keyframes = this['keyframes'](options); // after .animations
                    console.log(keyframes);
                    // target | wrap animation
                    this.animations.push(
                        this.animation = (options.target || this).animate(keyframes, options)
                    );
                    this.animation.onfinish = done;
                    // overlay animation
                    if (this['overlay']) {
                        this.animations.push(
                            this['overlayElement'].animate({
                                opacity: [0, 1]
                            }, options)
                        );
                    }
                } else {
                    done();
                }
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
        // this.hidden = false;
        // custom.call(target); // custom callback
        // emit(target, 'open');
        this.prepare(true, complete);
    }

    close(complete?: () => any) {
        if (this.hidden === true) {
            if (complete) complete();
            return;
        }
        // custom.call(target); // custom callback
        // emit(target, 'close');
        this.prepare(false, complete);
    }

    toggle(whether?: boolean) {
        const that: any = this;
        whether = typeof whether === 'boolean' ? whether : this.hidden;
        whether ? that.open() : that.close();
        return whether;
    }

    protected toggleEventHandler(value: any, oldValue: any) {
        if (this.isConnected) {
            if (value !== oldValue) {
                this.offToggleEvent(oldValue);
                this.onToggleEvent(value);
            } else if (!value && oldValue) {
                this.offToggleEvent(oldValue);
            }
        }
        return { value, oldValue };
    }

    private onToggleEvent(toggleEvent: string) {
        toggleEvent += '.' + this.constructor.name.split('Master')[1].toLowerCase();
        let liveTargets = liveTriggers[toggleEvent];
        if (liveTargets) {
            liveTargets.push(this);
        } else {
            liveTriggers[toggleEvent] = liveTargets = [this];
            document.body.on(toggleEvent, '[' + name + ']', function (event) {
                const toggle = this;
                if (this.disabled) return;
                const targets = $(toggle.getAttribute(name));
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
                    whether = eachTarget.toggle(whether);
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
