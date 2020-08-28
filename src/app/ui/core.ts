export class Togglable extends HTMLElement {

    ready = false;
    changing = false;
    easing = 'cubic-bezier(.25,.8,.25,1)';

    @Attr() duration = 300;
    @Attr({ reflect: 'toggle' }) fade = false;
    @Attr('tap') trigger(trigger) {
        trigger ?
            addToggle.call(this, trigger) :
            rmToggle.call(this, trigger);
    }

    @Attr(false, { reflect: 'toggle', returnable: true })
    opened(whether) {
        if (whether === this.opened) return false;
        whether ? (this as any).open() : (this as any).close();
    }

    // 裝飾
    toggle(whether?: boolean) {
        const that: any = this;
        whether = $.isBool(whether) ? whether : !(this as any)._opened;
        whether ? that.open() : that.close();
        return whether;
    }

    @Connect()
    connectedCallback() { }

    @ChangeAttr()
    attributeChangedCallback() { }

    @Destroy()
    disconnectedCallback() { }

}

const listenerList = {};

function addToggle(trigger: string) {
    const name = this.namespace;
    trigger += '.' + name;
    let $liveTargets = listenerList[trigger];
    if ($liveTargets) {
        $liveTargets.push(this);
    } else {
        listenerList[trigger] = $liveTargets = [this];
        document.body.on(trigger, '[' + name + ']', function (event) {
            const $toggle = this;
            const $targets = $($toggle.attr(name));
            for (const $target of $targets) {
                if (!$liveTargets.has($target)) return;
                let whether: boolean;
                const tag = $toggle.tagName;
                const type = $toggle.type;
                if (type === 'checkbox' || type === 'radio') {
                    whether = !!$toggle.checked;
                } else if (
                    tag === 'INPUT' ||
                    tag === 'SELECT' ||
                    tag === 'TEXTAREA'
                ) {
                    whether = !!$toggle.value;
                } else {
                    whether = !$target._opened;
                }
                if (whether && !$target.changing) $target.$origin = $toggle;
                whether = $target.toggle(whether);
            }
        }, { passive: true });
    }
};

function rmToggle(trigger: string) {
    if (!trigger) return;
    trigger += '.' + this.namespace;
    const instances = listenerList[trigger];
    if (instances) {
        if (instances.length) {
            instances.splice(instances.indexOf(this), 1);
        } else {
            document.body.off(trigger);
            delete listenerList[trigger];
        }
    }
}

export function Connect() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const
            custom = descriptor.value,
            constructor = target.constructor,
            _attrs = constructor._attrs;
        descriptor.value = function () {
            const $target = this;
            $target.ready = false;
            $.cb.call($target, $target.init);
            for (const key in _attrs) {
                const
                    _key = '_' + key,
                    option = _attrs[key],
                    value = $target[_key];

                $target[_key] = undefined;
                $target[key] = value;
                if (option) {
                    if (option.reflect === 'toggle') {
                        this.toggleAttr(key, $target[_key]);
                    } else if (option.reflect) {
                        this.attr(key, $target[_key]);
                    }
                }
            }
            custom.call($target);
            $target.ready = true;
            emit($target, 'init');
        };
    }
}

export function Attr(defaultVal?: any, option?: any) {
    return function (target: any, key: string, descriptor?): any {
        let setter = descriptor.value;
        const
            constructor = (target as any).constructor,
            dashKey = $.toDash(key),
            initializer = descriptor.initializer,
            _KEY = '_' + key;
        if (typeof defaultVal === 'object') {
            option = defaultVal;
            defaultVal = undefined;
        }
        if ($.isDefined(defaultVal)) {
            target[_KEY] = defaultVal;
        }
        if (initializer) {
            const val = initializer();
            if ($.isFn(val)) {
                setter = val;
            } else {
                target[_KEY] = val;
            }
        }
        if (!constructor.observedAttributes) constructor.observedAttributes = [];
        // for master ui attr
        if (!constructor._attrs) constructor._attrs = {};
        if (!constructor.reflectedAttributes) constructor.reflectedAttributes = [];
        constructor.observedAttributes.push(dashKey);
        constructor._attrs[key] = option;
        if (option && option.reflect) {
            constructor.reflectedAttributes.push(dashKey);
        }
        return {
            get() {
                return this[_KEY];
            },
            set(val) {
                if (option && option.reflect === 'toggle')
                    val = $.isBool(val) ? val : (val === '');
                if (setter) {
                    if (option && option.returnable) {
                        if (setter.call(this, val) === false) return;
                        // defered
                        this[_KEY] = val;
                    } else {
                        this[_KEY] = val;
                        setter.call(this, val);
                    }
                } else {
                    this[_KEY] = val;
                }
                if (option) {
                    if (option.reflect === 'toggle') {
                        this.toggleAttr(key, val);
                    } else if (option.reflect) {
                        this.attr(key, val);
                    }
                    if (this.ready && option.affects) {
                        option.affects.forEach((attrKey) => {
                            this[attrKey] = this['_' + attrKey]
                        });
                    }
                }
            }
        };
    }
}

export function Destroy() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const custom = descriptor.value;
        descriptor.value = function () {
            const $target = this;
            custom.call($target);
            if ($target.trigger)
                rmToggle.call($target, $target.trigger);
            if ($target.ready) {
                emit($target, 'destroy');
            }
        };
    };
}

export function Prepare() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const custom = descriptor.value;
        descriptor.value = function (whether, complete?: () => any) {
            const $target = this;
            const name = $target.namespace;
            $('[' + name + ']').each(($eachToggle: Element) => {
                if ($target.matches($eachToggle.attr(name))) {
                    $eachToggle.aria('expanded', whether);
                    const $icon = $eachToggle.$child('m-icon');
                    if ($icon) $icon.toggleAttribute('active', whether);
                }
            });
            custom.call($target, whether);
            if ($target.changing) {
                for (const animating of $target.animatings) {
                    animating.reverse();
                }
            } else {
                const done = () => {
                    if ($target.changing) {
                        if ($target.changing.reversed) whether = !whether;
                        $target.toggleAttr('changing', false);
                    }
                    if (!whether) $target.rmClass('show');
                    $target.changing = false;
                    delete $target.animatings;
                    $target._opened = whether;
                    $target
                        .aria('hidden', !whether ? true : null)
                        .toggleAttr('opened', whether);
                    $.cb.call(this, complete);
                    if ($target.onPrepared) $target.onPrepared(whether);
                    if (whether && $target.onOpened) $target.onOpened(whether);
                    if (!whether && $target.onClosed) $target.onClosed(whether);
                    emit($target, whether ? 'opened' : 'closed');
                };
                if ($target.ready && $target.duration) {
                    $target
                        .toggleAttr('changing', true)
                        .animatings = $target.animatings ? $target.animatings : [];
                    const option: any = {
                        easing: $target.easing,
                        duration: $target.duration,
                        reverse: !whether
                    };
                    const keyframe = $target.keyframe(option); // after .animatings
                    // $target | wrap animation
                    $target.animatings.push(
                        $target.changing = (option.$target || $target).anime(keyframe, option, done)
                    );
                    // overlay animation
                    if ($target.overlay) {
                        $target.animatings.push(
                            $target.$overlay.anime({
                                opacity: [0, 1]
                            }, option)
                        );
                    }
                } else {
                    done();
                }
            }
            return $target;
        };
    }
}

export function Open() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const custom = descriptor.value;
        descriptor.value = function (complete?: () => any) {
            const $target = this;
            if ($target._opened === true) return $.cb.call($target, complete);
            $target._opened = true;
            $target.addClass('show');
            custom.call($target); // custom callback
            emit($target, 'open');
            $target.prepare(true, complete);
        };
    }
}

export function Close() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const custom = descriptor.value;
        descriptor.value = function (complete?: () => any) {
            const $target = this;
            if ($target._opened === false) return $.cb.call($target, complete);
            $target._opened = false;
            custom.call($target); // custom callback
            emit($target, 'close');
            $target.prepare(false, complete);
        };
    }
}

export function ChangeAttr() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const custom = descriptor.value;
        descriptor.value = function (key: string, oldValue: string, value: any) {
            const
                $target = this,
                option = target.constructor['_attrs'][key];
            oldValue = String.parse(oldValue);
            value = String.parse(value);
            if (oldValue === value) return;
            if (option && option.reflect === 'toggle') {
                value = $.isBool(value) ? value : (value === '');
            }
            key = $.toCamel(key);
            if (!$target.ready) {
                $target['_' + key] = value;
            } else if (key !== 'disabled') {
                $target[key] = value;
            }
            if ($target.ready) {
                const parameters = [key, value, oldValue];
                custom.apply($target, parameters);
                emit($target, 'attrChanged', parameters);
            }
        };
    }
}

export function Element(name: string, builtin?: string) {
    return function (constructor: any) {
        customElements.define(
            'm-' + (constructor.prototype.namespace = name),
            window[constructor.name] = constructor,
            builtin ? { extends: builtin } : undefined
        );
    };
}

const hasCustomEvent = $.isFn(CustomEvent);

export function emit($target, type: string, parameters?) {
    if ($target.ready) {
        let event: any;
        if (hasCustomEvent) {
            event = new CustomEvent(type, {
                bubbles: false,
                cancelable: false,
                detail: parameters
            });
        } else {
            // On IE9-11, `CustomEvent` is not a constructor.
            event = document.createEvent('CustomEvent');
            event.initCustomEvent(type, false, false, parameters);
        }
        $target.dispatchEvent(event);
    }
}
