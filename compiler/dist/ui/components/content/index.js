(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Master"] = factory();
	else
		root["Master"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 223:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _compiler_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _compiler_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_compiler_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _compiler_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host{--offset-top: var(--content-offset-top, 0px);--offset-bottom: var(--content-offset-bottom, 0px);--offset-left: var(--content-offset-left, 0px);--offset-right: var(--content-offset-right, 0px);--bar-p: var(--content-bar-p, 4px);position:relative;contain:style;width:100%;display:block;flex-direction:column;-webkit-user-drag:none;-webkit-touch-callout:none;-ms-overflow-style:none;-ms-user-select:none;user-select:none;box-sizing:border-box}:host([changing]){overflow:hidden !important;contain:style}:host([collapse-x]){min-width:0 !important;will-change:width,opacity}:host([collapse-y]){min-height:0 !important;will-change:height,opacity}:host([collapse-x][collapse-y]){min-height:0 !important;min-width:0 !important;will-change:height,width,opacity}:host([scroll-y]) [part=root],:host([scroll-x]) [part=root]{will-change:scroll-position,-webkit-mask-image;-webkit-overflow-scrolling:touch;-ms-overflow-style:none;scrollbar-width:none}:host([scroll-y]) [part=root]::-webkit-scrollbar,:host([scroll-x]) [part=root]::-webkit-scrollbar{display:none}:host([scroll-x]) [part=root]{overflow-y:hidden;overflow-x:auto;overscroll-behavior-x:contain;touch-action:pan-x}:host([scroll-y]) [part=root]{overflow-y:auto;overflow-x:hidden;overscroll-behavior-y:contain;touch-action:pan-y}:host([scroll-x][scroll-y]) [part=root]{overflow:auto;touch-action:manipulation}:host([overscroll]){-ms-scroll-chaining:auto auto;overscroll-behavior:auto auto}[part=root]{display:inherit;width:100%;height:100%;align-items:inherit;justify-content:inherit;flex-direction:inherit;max-height:inherit;box-sizing:border-box;contain:style;margin:auto;padding:var(--offset-top) var(--offset-right) var(--offset-bottom) var(--offset-left)}m-bar{position:absolute;display:block;z-index:1010;pointer-events:none !important;box-sizing:border-box;contain:content;opacity:1;padding:var(--bar-p)}m-bar[hidden]{opacity:0;transition:opacity .2s ease-out .5s;will-change:opacity}m-thumb{position:relative;display:block;border-radius:2px;box-sizing:border-box;background-color:var(--f-fadest);contain:strict;will-change:transform;opacity:.5}m-bar[part=x]{bottom:0;left:var(--offset-left);width:calc(100% - var(--offset-left) - var(--offset-right))}m-bar[part=x] m-thumb{height:4px}m-bar[part=y]{top:var(--offset-top);right:0;height:calc(100% - var(--offset-top) - var(--offset-bottom))}m-bar[part=y] m-thumb{width:4px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => /* binding */ Event
/* harmony export */ });
function Event(options) {
    return (target, propKey) => {
        const name = propKey.split('Emitter')[0];
        const event = new CustomEvent(name, options);
        const emitter = function (data) {
            if (!this.emit && !(options === null || options === void 0 ? void 0 : options.force))
                return;
            event.data = data;
            this.dispatchEvent(event);
            return event;
        };
        return {
            get() {
                return emitter;
            }
        };
    };
}


/***/ }),

/***/ 5109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ps": () => /* reexport */ Attr,
  "W_": () => /* reexport */ Element,
  "ju": () => /* reexport */ element_event/* Event */.j,
  "Qu": () => /* reexport */ TargetElement
});

// UNUSED EXPORTS: ClickableElement, ControlElement, Prop, attrEnabled

// CONCATENATED MODULE: ../src/app/utils/camel-to-kebab-case.ts
function camelToKebabCase(str) {
    return str
        .replace(/([A-Z])/g, g => '-' + g[0])
        .toLowerCase();
}

// EXTERNAL MODULE: ../src/app/element/node_modules/reflect-metadata/Reflect.js
var reflect_metadata_Reflect = __webpack_require__(6472);
// CONCATENATED MODULE: ../src/app/element/attr/index.ts


const DEFAULT_ATTR_OPTION = {
    reflect: true,
    observe: true,
    render: true
};
function Attr(options) {
    options = Object.assign(Object.assign({}, DEFAULT_ATTR_OPTION), options);
    return (target, propKey) => {
        options.type = Reflect.getMetadata('design:type', target, propKey).name;
        options.propKey = propKey;
        const _propKey = '_' + propKey;
        const attrKey = options.key = (options.key || camelToKebabCase(propKey));
        const constructor = target.constructor;
        const update = options.update;
        const parse = options.parse;
        const descriptor = {
            get() {
                return this[_propKey];
            },
            set(value, settedAttr) {
                const oldValue = this[_propKey];
                if (parse) {
                    value = parse(this, value, oldValue);
                }
                if (value === oldValue)
                    return;
                this[_propKey] = value;
                if (this.initial) {
                    if (update) {
                        update(this, value, oldValue);
                    }
                    if (options.reflect && !settedAttr) {
                        if (options.type === 'Boolean') {
                            this.toggleAttribute(attrKey, !!value);
                        }
                        else {
                            this.setAttribute(attrKey, value);
                        }
                    }
                    if (options.render && this.render) {
                        this.render();
                    }
                }
            }
        };
        options.set = descriptor.set;
        if (options.observe) {
            if (!constructor.observedAttributes) {
                constructor.observedAttributes = [];
            }
            constructor.observedAttributes.push(attrKey);
        }
        if (!constructor.attrsOptions) {
            constructor.attrsOptions = {};
        }
        else {
            // 必須 assign，否則會污染到繼承的父元素
            constructor.attrsOptions = Object.assign({}, constructor.attrsOptions);
        }
        constructor.attrsOptions[attrKey] = options;
        return descriptor;
    };
}
function attrEnabled(value) {
    return value && value !== 'none';
}

// CONCATENATED MODULE: ../src/app/element/prop/index.ts

const prop_DEFAULT_ATTR_OPTION = {
    render: true
};
function Prop(options) {
    options = Object.assign(Object.assign({}, prop_DEFAULT_ATTR_OPTION), options);
    return (target, key) => {
        options.type = Reflect.getMetadata('design:type', target, key).name;
        const _key = '_' + key;
        const constructor = target.constructor;
        const update = options.update;
        const parse = options.parse;
        const descriptor = {
            get() {
                return this[_key];
            },
            set(value) {
                const oldValue = this[_key];
                if (parse) {
                    value = parse(this, value, oldValue);
                }
                if (value === oldValue)
                    return;
                this[_key] = value;
                if (this.initial) {
                    if (update) {
                        update(this, value, oldValue);
                    }
                    if (options.render && this.render) {
                        this.render();
                    }
                }
            }
        };
        if (!constructor.propsOptions) {
            constructor.propsOptions = {};
        }
        else {
            // 必須 assign，否則會污染到繼承的父元素
            constructor.propsOptions = Object.assign({}, constructor.propsOptions);
        }
        constructor.propsOptions[key] = options;
        return descriptor;
    };
}

// EXTERNAL MODULE: ../src/app/element/event/index.ts
var element_event = __webpack_require__(453);
// CONCATENATED MODULE: ../src/app/element/core.ts
const readyEvent = new CustomEvent('ready');
const DEFAULT_ELEMENT_OPTION = {
    shadow: true
};
function Element(options) {
    options = Object.assign(Object.assign({}, DEFAULT_ELEMENT_OPTION), options);
    return function (constructor) {
        constructor['elementName'] = options.tag.replace('m-', '');
        const prototype = constructor.prototype;
        const attrsOptions = constructor.attrsOptions;
        const propsOptions = constructor.propsOptions;
        const onConnected = prototype.onConnected;
        const onDisconnected = prototype.onDisconnected;
        const onAttrChanged = prototype.onAttrChanged;
        prototype.attributeChangedCallback = function (attrKey, oldValue, value) {
            if (value === oldValue)
                return;
            const eachAttrOptions = attrsOptions[attrKey];
            const type = eachAttrOptions.type;
            value = parseAttrValue(value, type);
            oldValue = parseAttrValue(oldValue, type);
            eachAttrOptions.set.call(this, value, true);
            if (onAttrChanged)
                onAttrChanged.call(this, attrKey, value, oldValue);
        };
        prototype.connectedCallback = function () {
            this.ready = false; // prevent rendering many times
            this.initial = false;
            if (propsOptions) {
                for (const eachPropKey in constructor.propsOptions) {
                    const eachPropOption = propsOptions[eachPropKey];
                    const eachPropValue = this['_' + eachPropKey];
                    const eachUpdate = eachPropOption.update;
                    if (eachUpdate) {
                        eachUpdate(this, eachPropValue);
                    }
                }
            }
            if (attrsOptions) {
                // 取得當前 attr 與 prop 比對，避免重複設置相同 attr
                const attributes = this.attributes;
                for (const eachAttrKey in attrsOptions) {
                    const eachAttrOptions = attrsOptions[eachAttrKey];
                    const eachpropKey = eachAttrOptions.propKey;
                    const eachPropValue = this['_' + eachpropKey];
                    const eachAttr = attributes[eachAttrKey];
                    if (eachPropValue === undefined)
                        continue;
                    let value;
                    let eachAttrValue;
                    if (eachAttr) {
                        eachAttrValue = parseAttrValue(eachAttr.value, eachAttrOptions.type);
                    }
                    if (eachAttrValue === eachPropValue) {
                        continue;
                    }
                    else if (eachAttrValue !== undefined) {
                        value = eachAttrValue;
                    }
                    else if (eachPropValue !== undefined) {
                        value = eachPropValue;
                    }
                    else {
                        continue;
                    }
                    if (eachAttrOptions.reflect) {
                        if (eachAttrOptions.type === 'Boolean') {
                            this.toggleAttribute(eachAttrKey, value);
                        }
                        else {
                            this.setAttribute(eachAttrKey, value);
                        }
                    }
                }
            }
            if (options.shadow && !this.shadowRoot) {
                // https://www.npmjs.com/package/construct-style-sheets-polyfill
                const shadowRoot = this.attachShadow({ mode: 'open' });
                if (options.css && shadowRoot.adoptedStyleSheets) {
                    const styleSheet = new CSSStyleSheet();
                    styleSheet['replaceSync'](options.css);
                    shadowRoot.adoptedStyleSheets = [styleSheet];
                }
                else if (options.css) {
                    const styleElement = document.createElement('style');
                    styleElement.innerHTML = options.css;
                    shadowRoot.appendChild(styleElement);
                }
            }
            if (this.render)
                this.render();
            this.initial = true;
            if (attrsOptions) {
                for (const eachAttrKey in constructor.attrsOptions) {
                    const eachAttrOptions = attrsOptions[eachAttrKey];
                    const eachPropKey = eachAttrOptions.propKey;
                    const eachPropValue = this['_' + eachPropKey];
                    const eachUpdate = eachAttrOptions.update;
                    if (eachUpdate) {
                        eachUpdate(this, eachPropValue);
                    }
                }
            }
            this.ready = true;
            if (this.emit)
                this.dispatchEvent(readyEvent);
            if (onConnected)
                onConnected.call(this);
        };
        prototype.disconnectedCallback = function () {
            if (this.removeRender)
                this.removeRender();
            if (onDisconnected)
                onDisconnected.call(this);
        };
        window.customElements.define(options.tag, constructor);
    };
}
const parseAttrValue = (value, type) => {
    if (value === 'undefined')
        return undefined;
    switch (type) {
        case 'Number':
            if (value === '')
                return null;
            return isNaN(+value) ? value : +value;
        case 'Boolean':
            return (value === '' || value) ? true : false;
        default:
            return value;
    }
};

// EXTERNAL MODULE: ../node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(9312);
// CONCATENATED MODULE: ../src/app/element/clickable/index.ts


class ClickableElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.template = window['Master'](() => {
            const tag = ((this.href || this.type === 'anchor') && !this.disabled)
                ? 'a'
                : (this.type || this.disabled) ? 'button' : null;
            const spinnerTemplate = [
                'm-icon', {
                    $if: this.busy,
                    name: 'spinner',
                    part: 'spinner'
                }
            ];
            switch (tag) {
                case 'button':
                    return [
                        tag, {
                            class: 'touch',
                            part: 'root',
                            disabled: this.disabled,
                            type: this.type
                        },
                        this.slotTemplate || ['slot'], spinnerTemplate
                    ];
                case 'a':
                    return [
                        tag, {
                            class: 'touch',
                            part: 'root',
                            href: this.href,
                            download: this.download,
                            rel: this.rel,
                            target: this.target
                        },
                        this.slotTemplate || ['slot'], spinnerTemplate
                    ];
                default:
                    return [
                        'div', { part: 'root' },
                        this.slotTemplate || ['slot'], spinnerTemplate
                    ];
            }
        });
    }
    render() {
        this.template.render(this.shadowRoot);
    }
}
(0,tslib_es6/* __decorate */.gn)([
    Attr({
        update(clickable, value, oldValue) {
            if (value === 'submit') {
                clickable.on('click', (event) => {
                    const form = clickable.closest('form');
                    form.querySelectorAll('m-input,m-textarea,m-select,m-check')
                        .forEach((eachElement) => {
                        eachElement.dirty = true;
                    });
                    if (form) {
                        if (!form.checkValidity())
                            return;
                        if (form.requestSubmit) {
                            form.requestSubmit();
                        }
                        else {
                            form.submit();
                        }
                    }
                }, { id: [clickable], passive: true });
            }
            else if (value !== 'submit'
                || oldValue === 'submit') {
                clickable.off({ id: [clickable] });
            }
        }
    }),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ClickableElement.prototype, "type", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ClickableElement.prototype, "busy", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr(),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ClickableElement.prototype, "rel", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr(),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ClickableElement.prototype, "href", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ClickableElement.prototype, "disabled", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Number)
], ClickableElement.prototype, "download", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr(),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ClickableElement.prototype, "target", void 0);

// CONCATENATED MODULE: ../src/app/element/target/index.ts



class TargetElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.hidden = false;
        this.duration = 500;
        this.easing = 'cubic-bezier(.25,.8,.25,1)';
        this.triggerEvent = 'click';
        this.emit = false;
        this.animations = [];
    }
    prepare() {
        return (0,tslib_es6/* __awaiter */.mG)(this, void 0, void 0, function* () {
            if (this.triggerEvent) {
                const name = this.constructor['elementName'];
                const toggleAttrKey = 'toggle-' + name;
                $('[' + toggleAttrKey + ']')
                    .forEach((eachToggle) => {
                    if (this.matches(eachToggle.getAttribute(toggleAttrKey))) {
                        const hidden = this.hidden;
                        eachToggle.toggleAttribute('aria-expanded', !hidden);
                        eachToggle.toggleAttribute('active', !hidden);
                        const icon = eachToggle.querySelector('.toggled');
                        if (icon)
                            icon.toggleAttribute('active', !this.hidden);
                    }
                });
            }
            if (this.animation) {
                for (const eachAnimation of this.animations) {
                    eachAnimation.reverse();
                }
            }
            else if (this.duration) {
                this.toggleAttribute('changing', true);
                yield this['toggling']({
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
                if (completed)
                    completed.call(this);
            }
        });
    }
    open() {
        return (0,tslib_es6/* __awaiter */.mG)(this, void 0, void 0, function* () {
            if (!this.hidden) {
                return false;
            }
            this['_hidden'] = false;
            this.toggleAttribute('hidden', false);
            const onOpen = this['onOpen'];
            if (onOpen) {
                yield onOpen.call(this);
            }
            this.openEmitter();
            yield (this.changing = this.prepare());
            this.openedEmitter();
            return true;
        });
    }
    close() {
        return (0,tslib_es6/* __awaiter */.mG)(this, void 0, void 0, function* () {
            if (this.hidden) {
                return false;
            }
            this['_hidden'] = true;
            const onClose = this['onClose'];
            if (onClose) {
                yield onClose.call(this);
            }
            this.closeEmitter();
            yield (this.changing = this.prepare());
            this.closedEmitter();
            return true;
        });
    }
    toggle(whether) {
        return (0,tslib_es6/* __awaiter */.mG)(this, void 0, void 0, function* () {
            whether = typeof whether === 'boolean' ? whether : this.hidden;
            yield (whether ? this.open() : this.close());
        });
    }
    onDisconnected() {
        document.body.off({ id: [this, this.constructor['elementName']] });
    }
}
(0,tslib_es6/* __decorate */.gn)([
    Attr({
        update(toggleable, value) {
            if (toggleable['ready']) {
                const start = toggleable[value ? 'onClose' : 'onOpen'];
                if (start)
                    start();
                toggleable.prepare();
            }
        }
    }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], TargetElement.prototype, "hidden", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({ reflect: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Object)
], TargetElement.prototype, "duration", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({ reflect: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], TargetElement.prototype, "fade", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({ reflect: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Object)
], TargetElement.prototype, "easing", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({
        reflect: false,
        update(target, value, oldValue) {
            const name = target.constructor['elementName'];
            if (oldValue) {
                document.body.off({ id: [target, name] });
            }
            if (value) {
                const toggleAttrKey = 'toggle-' + name;
                const typeSets = value.split(',');
                const handleTrigger = target['handleTrigger'];
                // open
                document.body
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
                    let whether;
                    if (typeSets.length > 1) {
                        whether = target.hidden;
                        if (whether && typeSets[0].split(' ').indexOf(eventType) === -1
                            || !whether && typeSets[1].split(' ').indexOf(eventType) === -1) {
                            return;
                        }
                        if (handleTrigger && handleTrigger.call(target, event, whether) === false) {
                            return;
                        }
                    }
                    else {
                        if ('checked' in trigger
                            && (eventType === 'input' || eventType === 'change')) {
                            whether = !!trigger.checked;
                        }
                        else {
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
    }),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], TargetElement.prototype, "triggerEvent", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({ reflect: false, render: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], TargetElement.prototype, "emit", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,element_event/* Event */.j)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Function)
], TargetElement.prototype, "openEmitter", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,element_event/* Event */.j)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Function)
], TargetElement.prototype, "closeEmitter", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,element_event/* Event */.j)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Function)
], TargetElement.prototype, "openedEmitter", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,element_event/* Event */.j)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Function)
], TargetElement.prototype, "closedEmitter", void 0);

// CONCATENATED MODULE: ../src/app/utils/capitalize.ts
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// CONCATENATED MODULE: ../src/app/element/control/index.ts



class ControlElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.dirty = false;
        this.touched = false;
    }
    validate() {
        if (!this['ready']) {
            return;
        }
        this.valid = this.validity.valid;
        this.invalid = !this.validity.valid;
        let prompt;
        for (const key in this.validity) {
            const eachWhether = this.validity[key];
            const eachPrompt = this['when' + capitalize(key)];
            if (eachPrompt !== undefined) {
                if (eachWhether) {
                    prompt = eachPrompt;
                    break;
                }
                else {
                    prompt = '';
                }
            }
        }
        if (prompt !== undefined) {
            this.prompt = prompt;
        }
        else {
            this.toggleAttribute('prompt', false);
        }
    }
    render() {
        this.controlTemplate.render(this);
        this.template.render(this.shadowRoot);
    }
}
(0,tslib_es6/* __decorate */.gn)([
    Attr({ render: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ControlElement.prototype, "emit", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ControlElement.prototype, "busy", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr(),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ControlElement.prototype, "name", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ControlElement.prototype, "disabled", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ControlElement.prototype, "required", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({ reflect: false, update: (control) => control.validate() }),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ControlElement.prototype, "whenBadInput", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({ reflect: false, update: (control) => control.validate() }),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ControlElement.prototype, "whenCustomError", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({ reflect: false, update: (control) => control.validate() }),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ControlElement.prototype, "whenPatternMismatch", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({ reflect: false, update: (control) => control.validate() }),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ControlElement.prototype, "whenRangeOverflow", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({ reflect: false, update: (control) => control.validate() }),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ControlElement.prototype, "whenRangeUnderflow", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({ reflect: false, update: (control) => control.validate() }),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ControlElement.prototype, "whenStepMismatch", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({ reflect: false, update: (control) => control.validate() }),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ControlElement.prototype, "whenTooLong", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({ reflect: false, update: (control) => control.validate() }),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ControlElement.prototype, "whenTypeMismatch", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({ reflect: false, update: (control) => control.validate() }),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ControlElement.prototype, "whenValueMissing", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({ reflect: false, update: (control) => control.validate() }),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ControlElement.prototype, "whenValid", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({ observe: false, render: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ControlElement.prototype, "prompt", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({ observe: false, render: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ControlElement.prototype, "valid", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({ observe: false, render: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ControlElement.prototype, "warning", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({ observe: false, render: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ControlElement.prototype, "invalid", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({ observe: false, render: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ControlElement.prototype, "dirty", void 0);
(0,tslib_es6/* __decorate */.gn)([
    Attr({ observe: false, render: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ControlElement.prototype, "touched", void 0);

// CONCATENATED MODULE: ../src/app/element/index.ts









/***/ }),

/***/ 1546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ContentElement": () => /* binding */ ContentElement
});

// EXTERNAL MODULE: ../node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(9312);
// EXTERNAL MODULE: ../src/app/element/index.ts + 8 modules
var app_element = __webpack_require__(5109);
// CONCATENATED MODULE: ../src/app/ui/node_modules/lodash-es/isObject.js
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ const lodash_es_isObject = (isObject);

// CONCATENATED MODULE: ../src/app/ui/node_modules/lodash-es/_freeGlobal.js
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/* harmony default export */ const _freeGlobal = (freeGlobal);

// CONCATENATED MODULE: ../src/app/ui/node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

/* harmony default export */ const _root = (root);

// CONCATENATED MODULE: ../src/app/ui/node_modules/lodash-es/now.js


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root.Date.now();
};

/* harmony default export */ const lodash_es_now = (now);

// CONCATENATED MODULE: ../src/app/ui/node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var Symbol = _root.Symbol;

/* harmony default export */ const _Symbol = (Symbol);

// CONCATENATED MODULE: ../src/app/ui/node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ const _getRawTag = (getRawTag);

// CONCATENATED MODULE: ../src/app/ui/node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ const _objectToString = (objectToString);

// CONCATENATED MODULE: ../src/app/ui/node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ const _baseGetTag = (baseGetTag);

// CONCATENATED MODULE: ../src/app/ui/node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ const lodash_es_isObjectLike = (isObjectLike);

// CONCATENATED MODULE: ../src/app/ui/node_modules/lodash-es/isSymbol.js



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (lodash_es_isObjectLike(value) && _baseGetTag(value) == symbolTag);
}

/* harmony default export */ const lodash_es_isSymbol = (isSymbol);

// CONCATENATED MODULE: ../src/app/ui/node_modules/lodash-es/toNumber.js



/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (lodash_es_isSymbol(value)) {
    return NAN;
  }
  if (lodash_es_isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = lodash_es_isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ const lodash_es_toNumber = (toNumber);

// CONCATENATED MODULE: ../src/app/ui/node_modules/lodash-es/debounce.js




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = lodash_es_toNumber(wait) || 0;
  if (lodash_es_isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(lodash_es_toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = lodash_es_now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(lodash_es_now());
  }

  function debounced() {
    var time = lodash_es_now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ const lodash_es_debounce = (debounce);

// EXTERNAL MODULE: ../src/app/ui/components/content/content.scss
var content = __webpack_require__(223);
// CONCATENATED MODULE: ../src/app/utils/is-num.ts
function isNum(value) {
    return typeof value === 'number' && !isNaN(value);
}

// CONCATENATED MODULE: ../src/app/ui/components/content/index.ts
var _time, _thumbSize, _bar, _scrollSize, _scrollEndTimeout, _animationFrame, _enabled, _thumb, _lastMorePosition;





const NAME = 'content';
const PX = 'px';
const SCROLL_KEY = 'scroll', OFFSET_KEY = 'offset', WIDTH_KEY = 'Width', HEIGHT_KEY = 'Height', LEFT_KEY = 'Left', TOP_KEY = 'Top', SIZE_KEY = { X: 'width', Y: 'height' }, POSITION_KEY = { X: 'x', Y: 'y' }, SCROLL_SIZE_KEY = { X: SCROLL_KEY + WIDTH_KEY, Y: SCROLL_KEY + HEIGHT_KEY }, SCROLL_POSITION_KEY = { X: SCROLL_KEY + LEFT_KEY, Y: SCROLL_KEY + TOP_KEY }, OFFSET_POSITION_KEY = { X: OFFSET_KEY + LEFT_KEY, Y: OFFSET_KEY + TOP_KEY }, OFFSET_SIZE_KEY = { X: OFFSET_KEY + WIDTH_KEY, Y: OFFSET_KEY + HEIGHT_KEY }, CLIENT_SIZE_KEY = { X: 'client' + WIDTH_KEY, Y: 'client' + HEIGHT_KEY };
let ContentElement = class ContentElement extends app_element/* TargetElement */.Qu {
    constructor() {
        super(...arguments);
        _time.set(this, {});
        _thumbSize.set(this, {});
        _bar.set(this, {});
        _scrollSize.set(this, {});
        _scrollEndTimeout.set(this, void 0);
        _animationFrame.set(this, void 0);
        _enabled.set(this, void 0);
        _thumb.set(this, {});
        _lastMorePosition.set(this, -1);
        this.template = window['Master'](() => [
            'slot',
            {
                part: 'root',
                $created: (element) => this.root = element
            },
            'slot', {
                name: 'part'
            },
            'm-bar',
            {
                part: 'x',
                hidden: !this.scrolling,
                $if: this.scrollX,
                $created: (element) => (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _bar).X = element
            }, [
                'm-thumb',
                {
                    $created: (element) => (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _thumb).X = element
                }
            ],
            'm-bar',
            {
                part: 'y',
                hidden: !this.scrolling,
                $if: this.scrollY,
                $created: (element) => (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _bar).Y = element
            }, [
                'm-thumb',
                {
                    $created: (element) => (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _thumb).Y = element
                }
            ]
        ]);
        this.scrolling = false;
        this.x = 0;
        this.y = 0;
        this.duration = 300;
        this.emit = false;
        this.center = true;
        this.guideSize = 48;
        this.collapseX = false;
        this.collapseY = false;
    }
    render() {
        this.template.render(this.shadowRoot);
        this.renderScroll();
    }
    enable() {
        if ((0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _enabled))
            return;
        (0,tslib_es6/* __classPrivateFieldSet */.YH)(this, _enabled, true);
        this.scrolling = false;
        this.root
            .on('scroll', (event) => {
            if (!this.renderScroll())
                return;
            if (!this.scrolling) {
                this.scrolling = true;
                this.template.render(this.shadowRoot);
                this.scrollStartEmitter();
            }
            this.scrollEmitter();
            if ((0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _scrollEndTimeout)) {
                (0,tslib_es6/* __classPrivateFieldSet */.YH)(this, _scrollEndTimeout, clearTimeout((0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _scrollEndTimeout)));
            }
            (0,tslib_es6/* __classPrivateFieldSet */.YH)(this, _scrollEndTimeout, setTimeout(() => {
                if ((0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _animationFrame)) {
                    (0,tslib_es6/* __classPrivateFieldSet */.YH)(this, _animationFrame, cancelAnimationFrame((0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _animationFrame)));
                }
                this.scrolling = false;
                (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _time).X = (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _time).Y = 0;
                this.template.render(this.shadowRoot);
                this.scrollEndEmitter();
            }, 100));
        }, {
            id: [NAME],
            passive: true
        })
            .on('slotchange', (event) => {
            this.renderScroll();
            this.changeEmitter();
        }, {
            id: [NAME],
            passive: true
        });
        window.on('resize', lodash_es_debounce(() => {
            this.renderScroll();
        }, 70), {
            id: [this, NAME]
        });
    }
    disable() {
        if (!(0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _enabled))
            return;
        (0,tslib_es6/* __classPrivateFieldSet */.YH)(this, _enabled, false);
        this.root.off({ id: ['scroll'] });
        window.off({ id: [this, NAME] });
    }
    get scrollable() {
        return this.scrolling || !!(this.maxX || this.maxY);
    }
    to(point, duration, complete) {
        if (!this.scrollable)
            return;
        const to = { X: point.x, Y: point.y };
        if (point instanceof HTMLElement) {
            // change by element
            const element = point;
            const calc = (dir) => {
                to[dir] = element[OFFSET_POSITION_KEY[dir]];
                if (this.center) {
                    const elementSize = element[CLIENT_SIZE_KEY[dir]], offsetSize = this.root[OFFSET_SIZE_KEY[dir]], centerOffset = (offsetSize - elementSize) / 2;
                    if (to[dir] < centerOffset) {
                        to[dir] = 0;
                    }
                    else if (to[dir] >= this['max' + dir] + centerOffset) {
                        to[dir] = this['max' + dir];
                    }
                    else {
                        to[dir] -= centerOffset;
                    }
                }
            };
            if (this.scrollX)
                calc('X');
            if (this.scrollY)
                calc('Y');
        }
        else {
            const calc = (dir) => {
                if (to[dir] > this['max' + dir]) {
                    to[dir] = this['max' + dir];
                }
                else if (to[dir] < 0) {
                    to[dir] = 0;
                }
                const current = this[POSITION_KEY[dir]] = this.root[SCROLL_POSITION_KEY[dir]];
                if (to[dir] === current)
                    return to[dir] = null;
            };
            if (this.scrollX)
                calc('X');
            if (this.scrollY)
                calc('Y');
        }
        if (typeof duration === 'function') {
            complete = duration;
            duration = this.duration;
        }
        if (this.scrolling) {
            if ((0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _animationFrame)) {
                (0,tslib_es6/* __classPrivateFieldSet */.YH)(this, _animationFrame, cancelAnimationFrame((0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _animationFrame)));
            }
            (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _time).X = (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _time).Y = 0;
        }
        if (duration === 0) {
            if (this.scrollX && isNum(to.X))
                this.x = this.root.scrollLeft = to.X;
            if (this.scrollY && isNum(to.Y))
                this.y = this.root.scrollTop = to.Y;
        }
        else {
            duration = duration || this.duration;
            this.scrolling = true;
            const scroll = (dir, currentValue, toValue) => {
                (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _time)[dir] += 20;
                const newValue = (function (t, b, c, d) {
                    t = (t /= d) * .5;
                    return Math.round(b + c * t);
                })((0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _time)[dir], currentValue, toValue - currentValue, duration);
                if (currentValue !== Math.round(toValue)) {
                    this[POSITION_KEY[dir]] = this.root[SCROLL_POSITION_KEY[dir]] = newValue;
                    (0,tslib_es6/* __classPrivateFieldSet */.YH)(this, _animationFrame, requestAnimationFrame(() => scroll(dir, newValue, toValue)));
                }
                else {
                    this.scrolling = false;
                    if (complete)
                        complete();
                }
            };
            if (this.scrollX && isNum(to.X))
                scroll('X', this.x = this.root[SCROLL_POSITION_KEY.X], to.X);
            if (this.scrollY && isNum(to.Y))
                scroll('Y', this.y = this.root[SCROLL_POSITION_KEY.Y], to.Y);
        }
    }
    reset() {
        this.to({ y: 0 }, 0);
        (0,tslib_es6/* __classPrivateFieldSet */.YH)(this, _lastMorePosition, -1);
    }
    renderScroll() {
        const render = (dir) => {
            if (this['scroll' + dir]) {
                const scrollSize = (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _scrollSize)[dir] = this.root[SCROLL_SIZE_KEY[dir]], size = this[CLIENT_SIZE_KEY[dir]], 
                // tslint:disable-next-line: radix
                rootSize = this.root[CLIENT_SIZE_KEY[dir]], scrollPosition = this[POSITION_KEY[dir]] = this.root[SCROLL_POSITION_KEY[dir]], maxPosition = this['max' + dir] = scrollSize - rootSize < 0 ? 0 : (scrollSize - rootSize), reach = scrollPosition <= 0 ? -1 : scrollPosition >= maxPosition ? 1 : 0;
                if (this.guide) {
                    const guideSize = this.guideSize, startGuide = (scrollPosition < guideSize) ? scrollPosition : guideSize, endGuide = (scrollPosition > maxPosition - guideSize) ?
                        (size + scrollPosition - maxPosition) :
                        (size - guideSize), maskImage = this.scrollable ?
                        `linear-gradient(to ${dir === 'X' ? 'right' : 'bottom'},rgba(0,0,0,0) 0px,rgba(0,0,0,1) ${startGuide}px,rgba(0,0,0,1) ${endGuide}px,rgba(0,0,0,0) ${size}px)` :
                        '';
                    // tslint:disable-next-line: deprecation
                    this.root.style.webkitMaskImage = this.root.style.maskImage = maskImage;
                }
                let morePosition = maxPosition * 2 / 3;
                if ((0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _lastMorePosition) > 0) {
                    morePosition = (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _lastMorePosition) + (maxPosition - (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _lastMorePosition)) / 2;
                }
                if (scrollPosition < rootSize * 2 / 3
                    && (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _lastMorePosition) === -1 ||
                    scrollPosition >= morePosition
                        && morePosition > (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _lastMorePosition)) {
                    (0,tslib_es6/* __classPrivateFieldSet */.YH)(this, _lastMorePosition, morePosition);
                    this.moreEmitter();
                }
                if (this['reach' + dir] !== reach)
                    this['reach' + dir] = reach;
                const thumb = (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _thumb)[dir];
                if (thumb) {
                    const barPosition = scrollPosition < 0 ? 0 : (scrollPosition > maxPosition ? maxPosition : scrollPosition);
                    const barStyles = window.getComputedStyle((0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _bar)[dir]), 
                    // tslint:disable-next-line: radix
                    padding = parseInt(barStyles['padding']), 
                    // tslint:disable-next-line: radix
                    barSize = parseInt(barStyles[SIZE_KEY[dir]]) - padding * 2, thumbSize = barSize / (maxPosition + barSize) * barSize;
                    thumb.style.transform =
                        'translate' + dir + '(' + barPosition / (maxPosition + barSize) * barSize + 'px)';
                    if ((0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _thumbSize)[dir] !== thumbSize) {
                        (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _thumbSize)[dir] = thumbSize;
                        thumb.style[SIZE_KEY[dir]] = thumbSize + 'px';
                    }
                }
                return scrollPosition !== maxPosition;
            }
            else {
                return false;
            }
        };
        return render('X') || render('Y');
    }
    // stop current animation
    stop() {
        if ((0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _animationFrame)) {
            (0,tslib_es6/* __classPrivateFieldSet */.YH)(this, _animationFrame, cancelAnimationFrame((0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _animationFrame)));
        }
        this.scrolling = false;
        (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _time).X = (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _time).Y = 0;
        this.render();
    }
    onOpened() {
        this.renderScroll();
    }
    toggling(options) {
        const keyframes = [];
        const startKeyframe = {};
        const endKeyframe = {};
        if (this.collapseY || this.collapseX && this.collapseY) {
            startKeyframe.height = 0 + PX;
            endKeyframe.height = this.offsetHeight + PX;
        }
        if (this.collapseX || this.collapseX && this.collapseY) {
            startKeyframe.width = 0 + PX;
            endKeyframe.width = this.offsetWidth + PX;
        }
        if (this.fade) {
            startKeyframe.opacity = 0;
            endKeyframe.opacity = 1;
        }
        if (this.hidden) {
            keyframes.push(endKeyframe, startKeyframe);
        }
        else {
            keyframes.push(startKeyframe, endKeyframe);
        }
        this.animation = this.animate(keyframes, options);
        this.animations.push(this.animation);
        return new Promise((finish) => {
            this.animation.onfinish = finish;
        });
    }
    onDisconnected() {
        document.body.off({ id: [this, NAME] });
        this.disable();
    }
};
_time = new WeakMap(), _thumbSize = new WeakMap(), _bar = new WeakMap(), _scrollSize = new WeakMap(), _scrollEndTimeout = new WeakMap(), _animationFrame = new WeakMap(), _enabled = new WeakMap(), _thumb = new WeakMap(), _lastMorePosition = new WeakMap();
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Event */.ju)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Function)
], ContentElement.prototype, "moreEmitter", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Event */.ju)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Function)
], ContentElement.prototype, "changeEmitter", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Event */.ju)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Function)
], ContentElement.prototype, "scrollEmitter", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Event */.ju)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Function)
], ContentElement.prototype, "scrollStartEmitter", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Event */.ju)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Function)
], ContentElement.prototype, "scrollEndEmitter", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({ reflect: false, render: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Number)
], ContentElement.prototype, "duration", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({ reflect: false, render: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ContentElement.prototype, "emit", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ContentElement.prototype, "center", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({ reflect: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ContentElement.prototype, "guide", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({ reflect: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Number)
], ContentElement.prototype, "guideSize", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({
        update(content) {
            (content.scrollX || content.scrollY) ? content.enable() : content.disable();
        }
    }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ContentElement.prototype, "scrollY", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({
        update(content) {
            (content.scrollX || content.scrollY) ? content.enable() : content.disable();
        }
    }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ContentElement.prototype, "scrollX", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ContentElement.prototype, "overscroll", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({ observe: false, render: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Number)
], ContentElement.prototype, "reachX", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({ observe: false, render: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Number)
], ContentElement.prototype, "reachY", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ContentElement.prototype, "name", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ContentElement.prototype, "collapseX", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ContentElement.prototype, "collapseY", void 0);
ContentElement = (0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Element */.W_)({
        tag: 'm-' + NAME,
        css: content/* default */.Z
    })
], ContentElement);



/***/ }),

/***/ 9312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gn": () => /* binding */ __decorate,
/* harmony export */   "w6": () => /* binding */ __metadata,
/* harmony export */   "mG": () => /* binding */ __awaiter,
/* harmony export */   "Q_": () => /* binding */ __classPrivateFieldGet,
/* harmony export */   "YH": () => /* binding */ __classPrivateFieldSet
/* harmony export */ });
/* unused harmony exports __extends, __assign, __rest, __param, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ 6472:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof __webpack_require__.g === "object" ? __webpack_require__.g :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(1546);
/******/ })()
;
});