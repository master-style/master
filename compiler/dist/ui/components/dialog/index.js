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

/***/ 7043:
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
___CSS_LOADER_EXPORT___.push([module.id, ":host{--p: var(--modal-p, 1.25rem);--r: var(--modal-r, 0.625rem);--max-width: var(--modal-max-width, var(--wrap-xs));position:fixed;z-index:1050;left:0px;top:0px;display:flex;width:100vw;height:100%;align-items:center;justify-content:center;flex-direction:column;flex-wrap:nowrap;contain:style;padding:var(--p)}:host([placement=left]){--p: 0px;--r: 0px;right:auto}:host([placement=left]) [part=root]{margin-left:0;height:100%;border-top-left-radius:0;border-bottom-left-radius:0}:host([placement=right]){--p: 0px;--r: 0px;right:0;left:auto}:host([placement=right]) [part=root]{margin-right:0;height:100%}:host([placement=top]){--p: 0px;bottom:auto}:host([placement=top]) [part=root]{margin-top:0;width:100%;max-height:100%;border-top-left-radius:0;border-top-right-radius:0}:host([placement=bottom]){--p: 0px;top:auto;bottom:0}:host([placement=bottom]) [part=root]{margin-bottom:0;width:100%;max-height:100%;border-bottom-left-radius:0;border-bottom-right-radius:0}:host([changing]) [part=root]{will-change:height,opacity}:host([changing]) ::slotted(m-header){z-index:1050}:host(.full){width:100% !important;max-width:100% !important}:host(.full) [part=root]{height:100%}:host(.fill){--r: 0px;--p: 0px;width:100% !important;max-width:100% !important}:host(.fill) [part=root]{height:100%}[part=root]{max-width:var(--max-width);position:relative;contain:style;display:flex;flex:0 0 auto;margin:auto;flex-direction:column;max-height:100%;width:100%;border-radius:var(--r);overflow:hidden;background-color:var(--bg-body)}::slotted(m-content){--offset-top: calc(var(--modal-offset-top, 0px) + env(safe-area-inset-top));--offset-bottom: calc(var(--modal-offset-bottom, 0px) + env(safe-area-inset-bottom));height:100%;min-height:0;flex:0 0 auto}::slotted(m-header),::slotted(m-footer){position:absolute;z-index:1050;flex:0 0 auto}[part=close]{--button-bg-color: transparent;--button-bg-color-hover: transparent;color:var(--f-fader);position:absolute;z-index:1050;top:.5rem;left:.5rem;border-radius:50%;font-size:1.25rem}[part=close] m-icon{--icon-stroke-width: 3px}:host([close-button=cross]) [part=close]{right:.5rem;left:auto}@media(max-width: 1023.98px){:host{--p: 0.625rem}}:host{--max-width: var(--wrap-xxs)}slot[name=icon]::slotted(*),[part=icon]{margin:2.875rem auto 0 auto;font-size:4rem;border-radius:50%}[part=icon][name=check]{color:var(--green)}[part=icon][name=cross]{color:var(--red);transform:rotate(90deg)}[part=title]{text-align:center;font-weight:500;margin:2.5rem 2rem;font-size:1.875rem}[part=title]~[part=text],[part=title]~slot[name=body]::slotted([slot=body]){margin-top:-1.5rem !important;padding-top:0 !important}[part=title]+[part=form]{margin-top:-2.5rem}[part=form]:not(:first-of-type){margin-top:-2rem}[part=controls]{display:flex;flex-direction:column;padding:2rem;margin:-0.5rem}[part=controls] m-input,[part=controls] m-button,[part=controls] m-textarea,[part=controls] m-select{margin:.5rem}[part=text]{text-align:center;margin:2rem;color:var(--f-theme-fader);font-size:var(--f-sm);line-height:1.5}[part=icon]+[part=title],slot[name=icon]+[part=title]{margin-top:1.5rem}slot[name=body]::slotted([slot=body]){padding:2rem !important}[part=foot]{display:flex}[part=foot] m-button{flex:1 1 0;border-radius:0;border-top:1px solid var(--b-fadest)}[part=foot] m-button:not(:first-child){border-left:1px solid var(--b-fadest)}[part=cancel]{--button-f-color: var(--f-fader)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3412:
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
___CSS_LOADER_EXPORT___.push([module.id, ":host{--p: var(--modal-p, 1.25rem);--r: var(--modal-r, 0.625rem);--max-width: var(--modal-max-width, var(--wrap-xs));position:fixed;z-index:1050;left:0px;top:0px;display:flex;width:100vw;height:100%;align-items:center;justify-content:center;flex-direction:column;flex-wrap:nowrap;contain:style;padding:var(--p)}:host([placement=left]){--p: 0px;--r: 0px;right:auto}:host([placement=left]) [part=root]{margin-left:0;height:100%;border-top-left-radius:0;border-bottom-left-radius:0}:host([placement=right]){--p: 0px;--r: 0px;right:0;left:auto}:host([placement=right]) [part=root]{margin-right:0;height:100%}:host([placement=top]){--p: 0px;bottom:auto}:host([placement=top]) [part=root]{margin-top:0;width:100%;max-height:100%;border-top-left-radius:0;border-top-right-radius:0}:host([placement=bottom]){--p: 0px;top:auto;bottom:0}:host([placement=bottom]) [part=root]{margin-bottom:0;width:100%;max-height:100%;border-bottom-left-radius:0;border-bottom-right-radius:0}:host([changing]) [part=root]{will-change:height,opacity}:host([changing]) ::slotted(m-header){z-index:1050}:host(.full){width:100% !important;max-width:100% !important}:host(.full) [part=root]{height:100%}:host(.fill){--r: 0px;--p: 0px;width:100% !important;max-width:100% !important}:host(.fill) [part=root]{height:100%}[part=root]{max-width:var(--max-width);position:relative;contain:style;display:flex;flex:0 0 auto;margin:auto;flex-direction:column;max-height:100%;width:100%;border-radius:var(--r);overflow:hidden;background-color:var(--bg-body)}::slotted(m-content){--offset-top: calc(var(--modal-offset-top, 0px) + env(safe-area-inset-top));--offset-bottom: calc(var(--modal-offset-bottom, 0px) + env(safe-area-inset-bottom));height:100%;min-height:0;flex:0 0 auto}::slotted(m-header),::slotted(m-footer){position:absolute;z-index:1050;flex:0 0 auto}[part=close]{--button-bg-color: transparent;--button-bg-color-hover: transparent;color:var(--f-fader);position:absolute;z-index:1050;top:.5rem;left:.5rem;border-radius:50%;font-size:1.25rem}[part=close] m-icon{--icon-stroke-width: 3px}:host([close-button=cross]) [part=close]{right:.5rem;left:auto}@media(max-width: 1023.98px){:host{--p: 0.625rem}}", ""]);
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
  "fI": () => /* reexport */ Prop,
  "Qu": () => /* reexport */ TargetElement,
  "kh": () => /* reexport */ attrEnabled
});

// UNUSED EXPORTS: ClickableElement, ControlElement

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

/***/ 6828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogElement": () => /* binding */ DialogElement
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9312);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5109);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1637);
/* harmony import */ var _dialog_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7043);




const NAME = 'dialog';
const parserObject = (dialog, value, oldValue) => {
    if (oldValue) {
        return Object.assign({}, oldValue, value);
    }
    else {
        return value;
    }
};
var TYPE_ICON;
(function (TYPE_ICON) {
    TYPE_ICON["success"] = "check";
    TYPE_ICON["error"] = "cross";
})(TYPE_ICON || (TYPE_ICON = {}));
let DialogElement = class DialogElement extends _modal__WEBPACK_IMPORTED_MODULE_1__.ModalElement {
    constructor() {
        super(...arguments);
        this.lightTemplate = window['Master'](() => [
            'div', {
                $if: this.icon,
                slot: 'icon',
                $html: this.icon ? (this.iconOnBusy || this.icon) : this.icon
            },
            'article', {
                $if: this.body,
                slot: 'body',
                class: 'prose',
                $html: this.body ? (this.bodyOnBusy || this.body) : this.body
            }
        ]);
        this.contentTokens = () => [
            'm-icon', {
                class: 'animated',
                $if: this.type,
                part: 'icon',
                name: TYPE_ICON[this.type]
            },
            'slot', {
                $if: this.icon,
                name: 'icon'
            },
            'h2', {
                $if: this.title,
                part: 'title',
                $text: this.busy ? (this.titleOnBusy || this.title) : this.title
            },
            'p', {
                $if: this.text,
                part: 'text',
                $text: this.busy ? (this.textOnBusy || this.text) : this.text
            },
            'slot', {
                name: 'body',
                $if: this.body,
                $text: this.busy ? (this.bodyOnBusy || this.body) : this.body
            },
            'form', {
                part: 'form',
                $created: (element) => this.form = element
                    .on('submit', (event) => {
                    console.log(event);
                    event.preventDefault();
                })
            }, [
                'div', {
                    $if: this.controls.length,
                    part: 'controls',
                    class: 'y',
                }, this.controls,
                'div', {
                    part: 'foot'
                }, [
                    'm-button', this.cancelButton,
                    'm-button', this.rejectButton,
                    'm-button', this.acceptButton
                ]
            ],
        ];
        this._hidden = true;
        this._duration = 300;
        this._placement = 'center';
        this.controls = [];
        this.role = 'dialog';
        this.acceptButton = {
            $if: true,
            $text: 'ok',
            $on: {
                click: () => this.accept()
            },
            busy: false,
            disabled: false
        };
        this.rejectButton = {
            $if: false,
            $text: 'deny',
            $on: {
                click: () => this.reject()
            },
            busy: false,
            disabled: false
        };
        this.cancelButton = {
            $if: false,
            $text: 'cancel',
            $on: {
                click: () => this.cancel()
            },
            style: '--button-f-color: var(--f-fade)',
            busy: false,
            disabled: false
        };
        this.busy = false;
    }
    get data() {
        const value = {};
        let valid = true;
        this.form
            .querySelectorAll('m-input,m-select,m-textarea,m-check')
            .map((eachControl) => {
            if (eachControl.name) {
                value[eachControl.name] = eachControl.value;
                valid = valid && eachControl.valid;
            }
        });
        return {
            value,
            valid
        };
    }
    handleAction(action) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__awaiter */ .mG)(this, void 0, void 0, function* () {
            let whether = true;
            this.lastAction = action;
            const onAction = this['on' + action.charAt(0).toUpperCase() + action.slice(1)];
            if (onAction) {
                const result = onAction(this.data, this);
                if (result instanceof Promise) {
                    const actionButton = this[action + 'Button'];
                    this.busy = actionButton.busy = true;
                    try {
                        whether = yield result;
                    }
                    catch (_a) {
                        whether = false;
                    }
                    this.busy = actionButton.busy = false;
                }
                else {
                    whether = result;
                }
            }
            if (whether) {
                this.close();
            }
            return whether;
        });
    }
    accept() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__awaiter */ .mG)(this, void 0, void 0, function* () {
            yield this.handleAction('accept');
        });
    }
    reject() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__awaiter */ .mG)(this, void 0, void 0, function* () {
            yield this.handleAction('reject');
        });
    }
    cancel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__awaiter */ .mG)(this, void 0, void 0, function* () {
            yield this.handleAction('cancel');
        });
    }
    onClosed() {
        this.remove();
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__metadata */ .w6)("design:type", Array)
], DialogElement.prototype, "controls", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({ observe: false, render: false }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__metadata */ .w6)("design:type", Object)
], DialogElement.prototype, "role", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__metadata */ .w6)("design:type", String)
], DialogElement.prototype, "title", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__metadata */ .w6)("design:type", String)
], DialogElement.prototype, "titleOnBusy", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__metadata */ .w6)("design:type", String)
], DialogElement.prototype, "text", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__metadata */ .w6)("design:type", String)
], DialogElement.prototype, "textOnBusy", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ parse: parserObject }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__metadata */ .w6)("design:type", Object)
], DialogElement.prototype, "acceptButton", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ parse: parserObject }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__metadata */ .w6)("design:type", Object)
], DialogElement.prototype, "rejectButton", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ parse: parserObject }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__metadata */ .w6)("design:type", Object)
], DialogElement.prototype, "cancelButton", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__metadata */ .w6)("design:type", String)
], DialogElement.prototype, "body", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__metadata */ .w6)("design:type", String)
], DialogElement.prototype, "bodyOnBusy", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__metadata */ .w6)("design:type", String)
], DialogElement.prototype, "type", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__metadata */ .w6)("design:type", String)
], DialogElement.prototype, "typeOnBusy", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__metadata */ .w6)("design:type", String)
], DialogElement.prototype, "icon", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__metadata */ .w6)("design:type", String)
], DialogElement.prototype, "iconOnBusy", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__metadata */ .w6)("design:type", Boolean)
], DialogElement.prototype, "busy", void 0);
DialogElement = (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_)({
        tag: 'm-' + NAME,
        css: _dialog_scss__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z
    })
], DialogElement);

const DIALOG_ELEMENT = document.createElement('m-dialog');
window['$'].dialog = (options) => {
    const eachDialog = DIALOG_ELEMENT.cloneNode();
    for (const eachPropKey in options) {
        const eachPropValue = options[eachPropKey];
        eachDialog[eachPropKey] = eachPropValue;
    }
    document.body.appendChild(eachDialog);
    eachDialog.open();
    console.log(eachDialog.acceptButton);
    return eachDialog;
};


/***/ }),

/***/ 1637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ModalElement": () => /* binding */ ModalElement
});

// EXTERNAL MODULE: ../node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(9312);
// EXTERNAL MODULE: ../src/app/element/index.ts + 8 modules
var app_element = __webpack_require__(5109);
// CONCATENATED MODULE: ../src/app/ui/node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Older browsers don't support event options, feature detect it.

// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

var hasPassiveEvents = false;
if (typeof window !== 'undefined') {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    }
  };
  window.addEventListener('testPassive', null, passiveTestOptions);
  window.removeEventListener('testPassive', null, passiveTestOptions);
}

var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);


var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPaddingRight = void 0;

// returns true if `el` should be allowed to receive touchmove events.
var allowTouchMove = function allowTouchMove(el) {
  return locks.some(function (lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }

    return false;
  });
};

var preventDefault = function preventDefault(rawEvent) {
  var e = rawEvent || window.event;

  // For the case whereby consumers adds a touchmove event listener to document.
  // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
  // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
  // the touchmove event on document will break.
  if (allowTouchMove(e.target)) {
    return true;
  }

  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;

  if (e.preventDefault) e.preventDefault();

  return false;
};

var setOverflowHidden = function setOverflowHidden(options) {
  // If previousBodyPaddingRight is already set, don't set it again.
  if (previousBodyPaddingRight === undefined) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

    if (_reserveScrollBarGap && scrollBarGap > 0) {
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = scrollBarGap + 'px';
    }
  }

  // If previousBodyOverflowSetting is already set, don't set it again.
  if (previousBodyOverflowSetting === undefined) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
};

var restoreOverflowSetting = function restoreOverflowSetting() {
  if (previousBodyPaddingRight !== undefined) {
    document.body.style.paddingRight = previousBodyPaddingRight;

    // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
    // can be set again.
    previousBodyPaddingRight = undefined;
  }

  if (previousBodyOverflowSetting !== undefined) {
    document.body.style.overflow = previousBodyOverflowSetting;

    // Restore previousBodyOverflowSetting to undefined
    // so setOverflowHidden knows it can be set again.
    previousBodyOverflowSetting = undefined;
  }
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};

var handleScroll = function handleScroll(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;

  if (allowTouchMove(event.target)) {
    return false;
  }

  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    // element is at the top of its scroll.
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the bottom of its scroll.
    return preventDefault(event);
  }

  event.stopPropagation();
  return true;
};

var disableBodyScroll = function disableBodyScroll(targetElement, options) {
  // targetElement must be provided
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
    return;
  }

  // disableBodyScroll must not have been called on this targetElement before
  if (locks.some(function (lock) {
    return lock.targetElement === targetElement;
  })) {
    return;
  }

  var lock = {
    targetElement: targetElement,
    options: options || {}
  };

  locks = [].concat(_toConsumableArray(locks), [lock]);

  if (isIosDevice) {
    targetElement.ontouchstart = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        handleScroll(event, targetElement);
      }
    };

    if (!documentListenerAdded) {
      document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = true;
    }
  } else {
    setOverflowHidden(options);
  }
};

var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
  if (isIosDevice) {
    // Clear all locks ontouchstart/ontouchmove handlers, and the references.
    locks.forEach(function (lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });

    if (documentListenerAdded) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }

    // Reset initial clientY.
    initialClientY = -1;
  } else {
    restoreOverflowSetting();
  }

  locks = [];
};

var enableBodyScroll = function enableBodyScroll(targetElement) {
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
    return;
  }

  locks = locks.filter(function (lock) {
    return lock.targetElement !== targetElement;
  });

  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;

    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }
  } else if (!locks.length) {
    restoreOverflowSetting();
  }
};


// EXTERNAL MODULE: ../src/app/ui/components/modal/modal.scss
var modal = __webpack_require__(3412);
// CONCATENATED MODULE: ../src/app/ui/components/modal/index.ts




const NAME = 'modal';
const PX = 'px';
let ModalElement = class ModalElement extends app_element/* TargetElement */.Qu {
    constructor() {
        super(...arguments);
        this.contentTokens = () => [
            'slot',
            {
                $created: (element) => this.wrap = element
            }
        ];
        this.template = window['Master'](() => [
            'm-overlay',
            {
                part: 'overlay',
                $if: (0,app_element/* attrEnabled */.kh)(this.overlay),
                $created: (element) => this.overlayElement = element
            },
            'div',
            {
                part: 'root',
                $created: (element) => this.root = element
            }, [
                ...this.contentTokens(),
                'm-button',
                {
                    part: 'close',
                    class: 'round xs',
                    $if: this.closeButton,
                    $created: (element) => this.closeElement = element,
                },
                [
                    'm-icon', { name: this.closeButton, direction: 'left' }
                ]
            ]
        ]);
        this.overlay = 'static';
    }
    render() {
        this.template.render(this.shadowRoot);
        if (this.lightTemplate)
            this.lightTemplate.render(this);
    }
    removeRender() {
        this.template.remove();
    }
    toggling(options) {
        let keyframes;
        let content;
        let pushing;
        if (this.placement === 'origin' && this.trigger) {
            if (!this.hidden && this.hideTrigger) {
                this.trigger.toggleClass('invisible', true);
            }
            content = this.children
                .filter((eachElement) => eachElement.matches('m-content'))[0];
            if (content) {
                content.disable();
                content.to({ x: 0, y: 0 }, this.duration);
            }
            const triggerRect = this.trigger.getBoundingClientRect(), rootRect = this.root.getBoundingClientRect();
            const scale = triggerRect.width / rootRect.width;
            console.log(rootRect);
            const x = triggerRect.left - rootRect.left
                + (triggerRect.width - rootRect.width) / 2;
            const y = triggerRect.top - rootRect.top
                + (triggerRect.height - rootRect.height) / 2;
            keyframes = [
                {
                    transform: `translate(${x + PX}, ${y + PX}) scale(${scale})`,
                    height: triggerRect.height / scale + PX,
                    opacity: this.fade ? 0 : 1
                },
                {
                    transform: 'translate(0,0) scale(1)',
                    height: rootRect.height + PX,
                    opacity: 1
                }
            ];
        }
        else {
            if (!this.placement || this.placement === 'origin') {
                keyframes = [
                    { opacity: 0 },
                    { opacity: 1 }
                ];
            }
            else if (this.placement === 'center') {
                keyframes = [
                    {
                        transform: `scale(${this.hidden ? .9 : 1.1})`,
                        opacity: 0
                    },
                    {
                        transform: 'scale(1)',
                        opacity: 1
                    }
                ];
            }
            else {
                let pushingKeyframes;
                let dir;
                let offset;
                let pushingOffset;
                switch (this.placement) {
                    case 'right':
                        dir = 'X';
                        offset = '100%';
                        if (this.pushing)
                            pushingOffset = -this.root.offsetWidth / 3;
                        break;
                    case 'left':
                        dir = 'X';
                        offset = '-100%';
                        if (this.pushing)
                            pushingOffset = this.root.offsetWidth / 3;
                        break;
                    case 'bottom':
                        dir = 'Y';
                        offset = '100%';
                        if (this.pushing)
                            pushingOffset = -this.root.offsetHeight / 3;
                        break;
                    case 'top':
                        dir = 'Y';
                        offset = '-100%';
                        if (this.pushing)
                            pushingOffset = this.root.offsetHeight / 3;
                        break;
                }
                if (this.pushing) {
                    pushingKeyframes = [
                        { transform: 'translate' + dir + '(0)' },
                        { transform: 'translate' + dir + '(' + pushingOffset + PX + ')' }
                    ];
                    if (this.hidden)
                        pushingKeyframes.reverse();
                    pushing = document.querySelector(this.pushing);
                    if (pushing) {
                        this.animations.push(pushing.animate(pushingKeyframes, Object.assign(Object.assign({}, options), { fill: 'both' })));
                    }
                }
                keyframes = [
                    { transform: 'translate' + dir + '(' + offset + ')' },
                    { transform: 'translate' + dir + '(0)' }
                ];
            }
        }
        const overlayKeyframes = [
            { opacity: 0 },
            { opacity: 1 }
        ];
        if (this.hidden) {
            keyframes.reverse();
            overlayKeyframes.reverse();
        }
        if ((0,app_element/* attrEnabled */.kh)(this.overlay)) {
            this.animations.push(this.overlayElement.animate(overlayKeyframes, options));
        }
        this.animation = this.root.animate(keyframes, options);
        this.animations.push(this.animation);
        return new Promise((finish) => {
            this.animation.onfinish = () => {
                const hidden = this.hidden;
                if (hidden && this.trigger && this.hideTrigger) {
                    this.trigger.toggleClass('invisible', false);
                }
                if (content) {
                    if (hidden) {
                        enableBodyScroll(content.root);
                    }
                    else {
                        disableBodyScroll(content.root);
                        content.enable();
                    }
                }
                finish();
            };
        });
    }
};
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Event */.ju)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Function)
], ModalElement.prototype, "closedByClickEmitter", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ModalElement.prototype, "placement", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({ reflect: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ModalElement.prototype, "pushing", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({ reflect: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ModalElement.prototype, "closeOnScroll", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({
        update(modal, value, oldValue) {
            if (value && oldValue ||
                !value && oldValue) {
                modal.closeElement.off({ id: [NAME] });
            }
            if (value) {
                modal.closeElement
                    .on('click', () => (0,tslib_es6/* __awaiter */.mG)(this, void 0, void 0, function* () {
                    if ((yield modal.close()) !== false) {
                        modal.closedByClickEmitter(modal.closeElement);
                    }
                }), { passive: true, id: [NAME] });
            }
        }
    }),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ModalElement.prototype, "closeButton", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({ reflect: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], ModalElement.prototype, "hideTrigger", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({
        reflect: false,
        update(modal, value, oldValue) {
            if (oldValue === 'close' || oldValue === 'none') {
                modal.overlayElement.off({ id: [NAME] });
            }
            if (value === 'close') {
                modal.overlayElement
                    .on('click', () => (0,tslib_es6/* __awaiter */.mG)(this, void 0, void 0, function* () {
                    if (yield modal.close()) {
                        modal.closedByClickEmitter(modal.overlayElement);
                    }
                }), { passive: true, id: [NAME] });
            }
        }
    }),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], ModalElement.prototype, "overlay", void 0);
ModalElement = (0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Element */.W_)({
        tag: 'm-' + NAME,
        css: modal/* default */.Z
    })
], ModalElement);



/***/ }),

/***/ 9312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gn": () => /* binding */ __decorate,
/* harmony export */   "w6": () => /* binding */ __metadata,
/* harmony export */   "mG": () => /* binding */ __awaiter
/* harmony export */ });
/* unused harmony exports __extends, __assign, __rest, __param, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/******/ 	return __webpack_require__(6828);
/******/ })()
;
});