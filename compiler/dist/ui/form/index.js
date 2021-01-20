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

/***/ 1247:
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
___CSS_LOADER_EXPORT___.push([module.id, ":host(.blue){--bg-color: var(--blue);--bg-color-hover: var(--f-blue)}:host(.blue.outlined){--f-theme: var(--f-blue);--bg-color-head: var(--blue-fader);--bg-color-hover: var(--blue-fader);--b-color: var(--blue);--b-color-active: var(--blue)}:host(.blue\\+){--bg-color-head: var(--blue-fade);--bg-color: var(--blue-fader);--bg-color-hover: var(--blue-fade);--f-theme: var(--f-blue)}:host(.blue\\+.outlined){--bg-color-head: var(--blue-fader);--bg-color-hover: var(--blue-fader);--b-color: var(--b-fader);--b-color-active: var(--blue-fade)}:host(.green){--bg-color: var(--green);--bg-color-hover: var(--f-green)}:host(.green.outlined){--f-theme: var(--f-green);--bg-color-head: var(--green-fader);--bg-color-hover: var(--green-fader);--b-color: var(--green);--b-color-active: var(--green)}:host(.green\\+){--bg-color-head: var(--green-fade);--bg-color: var(--green-fader);--bg-color-hover: var(--green-fade);--f-theme: var(--f-green)}:host(.green\\+.outlined){--bg-color-head: var(--green-fader);--bg-color-hover: var(--green-fader);--b-color: var(--b-fader);--b-color-active: var(--green-fade)}:host(.red){--bg-color: var(--red);--bg-color-hover: var(--f-red)}:host(.red.outlined){--f-theme: var(--f-red);--bg-color-head: var(--red-fader);--bg-color-hover: var(--red-fader);--b-color: var(--red);--b-color-active: var(--red)}:host(.red\\+){--bg-color-head: var(--red-fade);--bg-color: var(--red-fader);--bg-color-hover: var(--red-fade);--f-theme: var(--f-red)}:host(.red\\+.outlined){--bg-color-head: var(--red-fader);--bg-color-hover: var(--red-fader);--b-color: var(--b-fader);--b-color-active: var(--red-fade)}:host(.purple){--bg-color: var(--purple);--bg-color-hover: var(--f-purple)}:host(.purple.outlined){--f-theme: var(--f-purple);--bg-color-head: var(--purple-fader);--bg-color-hover: var(--purple-fader);--b-color: var(--purple);--b-color-active: var(--purple)}:host(.purple\\+){--bg-color-head: var(--purple-fade);--bg-color: var(--purple-fader);--bg-color-hover: var(--purple-fade);--f-theme: var(--f-purple)}:host(.purple\\+.outlined){--bg-color-head: var(--purple-fader);--bg-color-hover: var(--purple-fader);--b-color: var(--b-fader);--b-color-active: var(--purple-fade)}:host(.yellow){--bg-color: var(--yellow);--bg-color-hover: var(--f-yellow)}:host(.yellow.outlined){--f-theme: var(--f-yellow);--bg-color-head: var(--yellow-fader);--bg-color-hover: var(--yellow-fader);--b-color: var(--yellow);--b-color-active: var(--yellow)}:host(.yellow\\+){--bg-color-head: var(--yellow-fade);--bg-color: var(--yellow-fader);--bg-color-hover: var(--yellow-fade);--f-theme: var(--f-yellow)}:host(.yellow\\+.outlined){--bg-color-head: var(--yellow-fader);--bg-color-hover: var(--yellow-fader);--b-color: var(--b-fader);--b-color-active: var(--yellow-fade)}:host(.object){--bg-color: var(--bg-object);--bg-color-head: var(--theme-fade);--bg-color-hover: var(--theme-fade);--blur: 35px}:host(.object.outlined){--bg-color-hover: var(--theme-fader);--b-color: var(--b-fader);--b-color-active: var(--b-fade)}:host(.theme){--bg-color: var(--theme);--bg-color-head: var(--theme-fade);--bg-color-hover: var(--theme-fade)}:host(.theme.outlined){--bg-color-hover: var(--theme-fader);--b-color: var(--b-fader);--b-color-active: var(--b-fade)}:host(.theme\\+){--bg-color-head: var(--theme);--bg-color: var(--theme-fade);--bg-color-hover: var(--theme-fader)}:host(.theme\\+.outlined){--bg-color-head: var(--theme-fader);--bg-color-hover: var(--theme-fade);--b-color: var(--b-fader);--b-color-active: var(--b-fade)}:host(.brand),:host(.blue),:host(.red),:host(.green),:host(.purple),:host(.yellow){--bg-color-head: rgba(0, 0, 0, .1);--f-theme: #fff}:host([disabled]){--bg-color: transparent;--b-color: transparent}:host{--f-color: var(--badge-f-color, var(--f-theme));--f-size: var(--badge-f-size, var(--f-xxs));--bg-color: var(--badge-bg-color);--b-color-active: var(--badge-b-color-active);--b-color: var(--badge-b-color);--b-width: var(--badge-b-width, 0px);background-color:var(--bg-color);border:var(--b-color) var(--b-width, 0) var(--b-style, solid);color:var(--f-color);display:inline-flex;align-items:center;justify-content:center;font-size:var(--f-size);font-weight:500;margin:.125rem;padding:0 .25rem;border-radius:100rem;letter-spacing:0;height:1.25rem;min-width:1.25rem;-ms-user-select:none;user-select:none;white-space:nowrap;contain:style;flex:0 0 auto}:host(.sm){--badge-f-size: .625rem;height:.875rem;min-width:.875rem}:host(.lg){height:1.5rem;min-width:1.5rem}:host(.outlined){--b-width: 1px;background-color:transparent}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2345:
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
___CSS_LOADER_EXPORT___.push([module.id, "[part=root]{position:relative;display:inherit;-webkit-appearance:none;contain:style;font:inherit;flex-wrap:inherit;flex-direction:inherit;align-items:inherit;justify-content:inherit;letter-spacing:inherit;line-height:inherit;text-transform:inherit;text-overflow:inherit;text-align:inherit;white-space:inherit;text-decoration:inherit;color:inherit;border-radius:inherit;padding:0;border:var(--b-color) var(--b-width, 0) var(--b-style, solid);width:100%;height:100%;outline:none;overflow:hidden;background-origin:border-box;background-color:var(--bg-color);box-sizing:border-box;transition:box-shadow ease-out .15s;will-change:transform;backdrop-filter:blur(var(--blur))}[part=root][disabled]{color:var(--f-fadest) !important;box-shadow:none !important}[part=root][disabled] ::slotted([part=foot]){color:inherit}:host(.outlined) [part=root]{border-width:var(--b-width, 1px)}::slotted([part=body]){display:flex;flex:1 1 auto}::slotted([part=foot]),::slotted([part=head]){display:flex;flex:0 0 auto}@media(any-hover: hover){.touch:hover:not([disabled]){background-color:var(--bg-color-hover)}:host(.outlined) .touch:hover:not([disabled]){background-color:var(--bg-color-hover);box-shadow:inset 0 0 0 1px var(--b-color-active);border-color:var(--b-color-active)}}button[part=root],a[part=root]{-webkit-appearance:none;-ms-user-select:none;user-select:none;cursor:pointer}:host(.outlined){--b-width: 1px}:host(.outlined) [part=root]{background-color:transparent}:host([disabled]){pointer-events:none !important}:host([part=foot]) [part=root]{border:0;box-shadow:none}:host([busy]){pointer-events:none !important;box-shadow:none !important}:host([busy]) [part=root] *:not([part=spinner]),:host([busy]) ::slotted(*){visibility:hidden !important}:host([busy]) slot,:host([busy]) ::slotted(*){color:transparent !important}[part=spinner]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;height:fit-content;width:fit-content}:host{display:inline-flex;font-size:var(--f-xs);color:var(--f-fade)}[part=root]{white-space:nowrap;justify-content:center;align-items:center;overflow:visible}@media(any-hover: hover){.touch:hover:not([disabled]){background-color:transparent}.touch:hover:not([disabled]) [part=body]{text-decoration:underline;color:var(--f-theme)}}:host(:not(:last-of-type)):after{content:\"/\";display:inline-flex;align-items:center;margin:0 .5rem;font-size:90%;color:var(--f-fadest);font-family:\"Gill Sans\",\"Gill Sans MT\",Calibri,\"Trebuchet MS\",sans-serif}:host([aria-current=page]){pointer-events:none}:host([aria-current=page]) [part=body]{font-style:italic;color:var(--f-theme)}:host([aria-current=page]) slot[name=head]{display:none}slot[name=head]::slotted(*){margin-right:.3125rem}slot[name=head]::slotted(img){width:1rem;height:1rem;object-fit:cover;border-radius:50%}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6415:
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
___CSS_LOADER_EXPORT___.push([module.id, "[part=root]{position:relative;display:inherit;-webkit-appearance:none;contain:style;font:inherit;flex-wrap:inherit;flex-direction:inherit;align-items:inherit;justify-content:inherit;letter-spacing:inherit;line-height:inherit;text-transform:inherit;text-overflow:inherit;text-align:inherit;white-space:inherit;text-decoration:inherit;color:inherit;border-radius:inherit;padding:0;border:var(--b-color) var(--b-width, 0) var(--b-style, solid);width:100%;height:100%;outline:none;overflow:hidden;background-origin:border-box;background-color:var(--bg-color);box-sizing:border-box;transition:box-shadow ease-out .15s;will-change:transform;backdrop-filter:blur(var(--blur))}[part=root][disabled]{color:var(--f-fadest) !important;box-shadow:none !important}[part=root][disabled] ::slotted([part=foot]){color:inherit}:host(.outlined) [part=root]{border-width:var(--b-width, 1px)}::slotted([part=body]){display:flex;flex:1 1 auto}::slotted([part=foot]),::slotted([part=head]){display:flex;flex:0 0 auto}@media(any-hover: hover){.touch:hover:not([disabled]){background-color:var(--bg-color-hover)}:host(.outlined) .touch:hover:not([disabled]){background-color:var(--bg-color-hover);box-shadow:inset 0 0 0 1px var(--b-color-active);border-color:var(--b-color-active)}}button[part=root],a[part=root]{-webkit-appearance:none;-ms-user-select:none;user-select:none;cursor:pointer}:host(.outlined){--b-width: 1px}:host(.outlined) [part=root]{background-color:transparent}:host([disabled]){pointer-events:none !important}:host([part=foot]) [part=root]{border:0;box-shadow:none}:host([busy]){pointer-events:none !important;box-shadow:none !important}:host([busy]) [part=root] *:not([part=spinner]),:host([busy]) ::slotted(*){visibility:hidden !important}:host([busy]) slot,:host([busy]) ::slotted(*){color:transparent !important}[part=spinner]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;height:fit-content;width:fit-content}:host{--bg-color: var(--card-bg-color, var(--bg-object));--bg-color-hover: var(--card-bg-color-hover);--b-width: var(--card-b-width, 0px);--b-color: var(--card-b-color, var(--b-fader));--b-color-active: var(--card-b-color-active, var(--b-fade));--bg-disabled: var(--card-bg-disabled, var(--bg-color));--foot-px: var(--card-foot-px, 1rem);--foot-py: var(--card-foot-py, .8rem);display:flex;flex-direction:column;flex-wrap:nowrap;border-radius:.3125rem}:host(.raised){border:0;box-shadow:0 .5px .9px rgba(0,0,0,.025),0 1.3px 2.2px rgba(0,0,0,.035),0 2.7px 4.4px rgba(0,0,0,.045),0 5.5px 9.1px rgba(0,0,0,.055),0 15px 25px rgba(0,0,0,.08)}:host([disabled]){box-shadow:none}:host([disabled]) ::slotted(*){pointer-events:none !important}:host([disabled]) ::slotted([part=body]),:host([disabled]) ::slotted([part=head]),:host([disabled]) ::slotted([part=foot]){opacity:.5}::slotted([part=head]){position:relative;grid-area:head;border:0;background-size:cover;background-repeat:no-repeat;background-position:center center;width:100%;margin:0 !important}::slotted([part=head]) ::slotted(m-skeleton){height:100%}::slotted([part=body]){display:block;grid-area:body;padding:1rem;width:100%;flex-direction:column}::slotted([part=foot]){flex-wrap:wrap;padding:var(--foot-py) var(--foot-px);grid-area:foot;clear:both;line-height:0}::slotted(m-button[part=foot]){padding:0;border-radius:0;flex:1 1 auto;--px: 1.1rem;--py: 0;--size: 2.5rem;--f-size: .9125rem}:host(.body\\/foot\\+head) [part=root]{display:grid;grid-template-columns:2fr 1fr;grid-template-rows:1fr auto;grid-template-areas:\"body head\" \"foot head\"}:host(.head\\+body\\/foot) [part=root]{display:grid;grid-template-columns:1fr 2fr;grid-template-rows:1fr auto;grid-template-areas:\"head body\" \"head foot\"}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1815:
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
___CSS_LOADER_EXPORT___.push([module.id, "[part=root]{position:relative;display:inherit;-webkit-appearance:none;contain:style;font:inherit;flex-wrap:inherit;flex-direction:inherit;align-items:inherit;justify-content:inherit;letter-spacing:inherit;line-height:inherit;text-transform:inherit;text-overflow:inherit;text-align:inherit;white-space:inherit;text-decoration:inherit;color:inherit;border-radius:inherit;padding:0;border:var(--b-color) var(--b-width, 0) var(--b-style, solid);width:100%;height:100%;outline:none;overflow:hidden;background-origin:border-box;background-color:var(--bg-color);box-sizing:border-box;transition:box-shadow ease-out .15s;will-change:transform;backdrop-filter:blur(var(--blur))}[part=root][disabled]{color:var(--f-fadest) !important;box-shadow:none !important}[part=root][disabled] ::slotted([part=foot]){color:inherit}:host(.outlined) [part=root]{border-width:var(--b-width, 1px)}::slotted([part=body]){display:flex;flex:1 1 auto}::slotted([part=foot]),::slotted([part=head]){display:flex;flex:0 0 auto}@media(any-hover: hover){.touch:hover:not([disabled]){background-color:var(--bg-color-hover)}:host(.outlined) .touch:hover:not([disabled]){background-color:var(--bg-color-hover);box-shadow:inset 0 0 0 1px var(--b-color-active);border-color:var(--b-color-active)}}button[part=root],a[part=root]{-webkit-appearance:none;-ms-user-select:none;user-select:none;cursor:pointer}:host(.outlined){--b-width: 1px}:host(.outlined) [part=root]{background-color:transparent}:host([disabled]){pointer-events:none !important}:host([part=foot]) [part=root]{border:0;box-shadow:none}:host([busy]){pointer-events:none !important;box-shadow:none !important}:host([busy]) [part=root] *:not([part=spinner]),:host([busy]) ::slotted(*){visibility:hidden !important}:host([busy]) slot,:host([busy]) ::slotted(*){color:transparent !important}[part=spinner]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;height:fit-content;width:fit-content}:host(.blue){--bg-color: var(--blue);--bg-color-hover: var(--f-blue)}:host(.blue.outlined){--f-theme: var(--f-blue);--bg-color-head: var(--blue-fader);--bg-color-hover: var(--blue-fader);--b-color: var(--blue);--b-color-active: var(--blue)}:host(.blue\\+){--bg-color-head: var(--blue-fade);--bg-color: var(--blue-fader);--bg-color-hover: var(--blue-fade);--f-theme: var(--f-blue)}:host(.blue\\+.outlined){--bg-color-head: var(--blue-fader);--bg-color-hover: var(--blue-fader);--b-color: var(--b-fader);--b-color-active: var(--blue-fade)}:host(.green){--bg-color: var(--green);--bg-color-hover: var(--f-green)}:host(.green.outlined){--f-theme: var(--f-green);--bg-color-head: var(--green-fader);--bg-color-hover: var(--green-fader);--b-color: var(--green);--b-color-active: var(--green)}:host(.green\\+){--bg-color-head: var(--green-fade);--bg-color: var(--green-fader);--bg-color-hover: var(--green-fade);--f-theme: var(--f-green)}:host(.green\\+.outlined){--bg-color-head: var(--green-fader);--bg-color-hover: var(--green-fader);--b-color: var(--b-fader);--b-color-active: var(--green-fade)}:host(.red){--bg-color: var(--red);--bg-color-hover: var(--f-red)}:host(.red.outlined){--f-theme: var(--f-red);--bg-color-head: var(--red-fader);--bg-color-hover: var(--red-fader);--b-color: var(--red);--b-color-active: var(--red)}:host(.red\\+){--bg-color-head: var(--red-fade);--bg-color: var(--red-fader);--bg-color-hover: var(--red-fade);--f-theme: var(--f-red)}:host(.red\\+.outlined){--bg-color-head: var(--red-fader);--bg-color-hover: var(--red-fader);--b-color: var(--b-fader);--b-color-active: var(--red-fade)}:host(.purple){--bg-color: var(--purple);--bg-color-hover: var(--f-purple)}:host(.purple.outlined){--f-theme: var(--f-purple);--bg-color-head: var(--purple-fader);--bg-color-hover: var(--purple-fader);--b-color: var(--purple);--b-color-active: var(--purple)}:host(.purple\\+){--bg-color-head: var(--purple-fade);--bg-color: var(--purple-fader);--bg-color-hover: var(--purple-fade);--f-theme: var(--f-purple)}:host(.purple\\+.outlined){--bg-color-head: var(--purple-fader);--bg-color-hover: var(--purple-fader);--b-color: var(--b-fader);--b-color-active: var(--purple-fade)}:host(.yellow){--bg-color: var(--yellow);--bg-color-hover: var(--f-yellow)}:host(.yellow.outlined){--f-theme: var(--f-yellow);--bg-color-head: var(--yellow-fader);--bg-color-hover: var(--yellow-fader);--b-color: var(--yellow);--b-color-active: var(--yellow)}:host(.yellow\\+){--bg-color-head: var(--yellow-fade);--bg-color: var(--yellow-fader);--bg-color-hover: var(--yellow-fade);--f-theme: var(--f-yellow)}:host(.yellow\\+.outlined){--bg-color-head: var(--yellow-fader);--bg-color-hover: var(--yellow-fader);--b-color: var(--b-fader);--b-color-active: var(--yellow-fade)}:host(.object){--bg-color: var(--bg-object);--bg-color-head: var(--theme-fade);--bg-color-hover: var(--theme-fade);--blur: 35px}:host(.object.outlined){--bg-color-hover: var(--theme-fader);--b-color: var(--b-fader);--b-color-active: var(--b-fade)}:host(.theme){--bg-color: var(--theme);--bg-color-head: var(--theme-fade);--bg-color-hover: var(--theme-fade)}:host(.theme.outlined){--bg-color-hover: var(--theme-fader);--b-color: var(--b-fader);--b-color-active: var(--b-fade)}:host(.theme\\+){--bg-color-head: var(--theme);--bg-color: var(--theme-fade);--bg-color-hover: var(--theme-fader)}:host(.theme\\+.outlined){--bg-color-head: var(--theme-fader);--bg-color-hover: var(--theme-fade);--b-color: var(--b-fader);--b-color-active: var(--b-fade)}:host(.brand),:host(.blue),:host(.red),:host(.green),:host(.purple),:host(.yellow){--bg-color-head: rgba(0, 0, 0, .1);--f-theme: #fff}:host([disabled]){--bg-color: transparent;--b-color: transparent}:host{--f-size: var(--chip-f-size, .8125rem);--f-color: var(--chip-f-color, var(--f-theme));--bg-color: var(--chip-bg-color);--bg-color-head: var(--chip-bg-color-head);--bg-color-hover: var(--chip-bg-color-hover);--b-color-active: var(--chip-b-color-active);--b-color: var(--chip-b-color);--b-width: var(--chip-b-width, 0px);--bg-disabled: var(--chip-bg-disabled);--radius: var(--chip-radius, 0.3125rem);--size: var(--chip-size, 2rem);--p: var(--chip-p, .25rem);--px: var(--chip-px, .625rem);--mx: calc(var(--p) - var(--px));display:inline-flex;border-radius:var(--radius)}[part=root]{padding:var(--p) var(--px);white-space:nowrap;font-weight:400;font-size:var(--f-size);vertical-align:middle;line-height:1.2;height:var(--size);color:var(--f-color);background-color:var(--bg-color);-ms-user-select:none;user-select:none;contain:style;align-items:center}slot{border-radius:inherit}:host(.outlined) ::slotted([part=head]){margin-left:calc(var(--mx) - 1px)}:host(.rounded){border-radius:inherit}:host(.rounded) ::slotted([part=head]),:host(.rounded) ::slotted([part=foot]),:host(.rounded) ::slotted([part=close]){border-radius:50%}:host(.sm){--chip-size: 1.5rem;--chip-px: .4375rem;--chip-f-size: var(--f-xxs)}:host(.sm) ::slotted([part=head]){font-size:.625rem;padding:0 .25rem}:host(.sm) ::slotted([part=close]){--size: .875rem;font-size:.625rem;margin-right:-0.125rem}::slotted([part=close]){--button-size: 1.125rem;--button-px: 0px;--button-f-size: var(--f-xxs);border-radius:calc(var(--radius) / 2);margin-right:-0.1875rem;margin-left:.375rem}[part=body],::slotted([part=head]),::slotted([part=foot]){align-items:center;justify-content:center;contain:layout style}::slotted([part=head]),::slotted([part=foot]){border-radius:calc(var(--radius) / 2);height:calc(var(--size) - var(--p) * 2)}::slotted([part=head]){letter-spacing:0;font-weight:600;color:var(--f-theme);text-transform:uppercase;background-color:var(--bg-color-head);padding:0 .3125rem;min-width:calc(var(--size) - var(--p) * 2);margin-right:.375rem;margin-left:var(--mx)}::slotted([role=img]),::slotted(img[part=head]){padding:0;width:calc(var(--size) - var(--p) * 2);height:calc(var(--size) - var(--p) * 2);object-fit:cover}::slotted([part=foot]){color:var(--f-fade);margin-left:.375rem}:host([disabled]) ::slotted([part=head]){color:inherit !important;background-color:var(--b-fadest) !important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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

/***/ 2330:
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
___CSS_LOADER_EXPORT___.push([module.id, ":host{width:100%;min-height:3rem;top:0;text-align:center;text-align-last:center;border-top-right-radius:0;border-top-left-radius:0}@supports(backdrop-filter: none) or (-webkit-backdrop-filter: none){:host{background-color:rgba(var(--bg-raise-rgb), 0.8);backdrop-filter:blur(35px);-webkit-backdrop-filter:blur(35px)}}:host,slot{display:flex;align-items:center;justify-content:center}:host(.safe) [part=root]{padding-bottom:env(safe-area-inset-bottom)}[part=root]{display:flex;justify-content:space-between;align-items:center;width:100%}slot[name=end],slot[name=start]{min-width:3rem}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1159:
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
___CSS_LOADER_EXPORT___.push([module.id, ":host{width:100%;min-height:3rem;top:0;text-align:center;text-align-last:center;border-bottom-right-radius:0;border-bottom-left-radius:0}@supports(backdrop-filter: none) or (-webkit-backdrop-filter: none){:host{background-color:rgba(var(--bg-raise-rgb), 0.8);backdrop-filter:blur(35px);-webkit-backdrop-filter:blur(35px)}}:host,slot{display:flex;align-items:center;justify-content:center}:host(.safe) [part=root]{padding-top:env(safe-area-inset-top)}[part=root]{display:flex;justify-content:space-between;align-items:center;width:100%}slot[name=end],slot[name=start]{min-width:3rem}::slotted(h2){font-size:var(--f-sm) !important;margin:0 !important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3897:
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
___CSS_LOADER_EXPORT___.push([module.id, "[part=root]{position:relative;display:inherit;-webkit-appearance:none;contain:style;font:inherit;flex-wrap:inherit;flex-direction:inherit;align-items:inherit;justify-content:inherit;letter-spacing:inherit;line-height:inherit;text-transform:inherit;text-overflow:inherit;text-align:inherit;white-space:inherit;text-decoration:inherit;color:inherit;border-radius:inherit;padding:0;border:var(--b-color) var(--b-width, 0) var(--b-style, solid);width:100%;height:100%;outline:none;overflow:hidden;background-origin:border-box;background-color:var(--bg-color);box-sizing:border-box;transition:box-shadow ease-out .15s;will-change:transform;backdrop-filter:blur(var(--blur))}[part=root][disabled]{color:var(--f-fadest) !important;box-shadow:none !important}[part=root][disabled] ::slotted([part=foot]){color:inherit}:host(.outlined) [part=root]{border-width:var(--b-width, 1px)}::slotted([part=body]){display:flex;flex:1 1 auto}::slotted([part=foot]),::slotted([part=head]){display:flex;flex:0 0 auto}@media(any-hover: hover){.touch:hover:not([disabled]){background-color:var(--bg-color-hover)}:host(.outlined) .touch:hover:not([disabled]){background-color:var(--bg-color-hover);box-shadow:inset 0 0 0 1px var(--b-color-active);border-color:var(--b-color-active)}}button[part=root],a[part=root]{-webkit-appearance:none;-ms-user-select:none;user-select:none;cursor:pointer}:host(.outlined){--b-width: 1px}:host(.outlined) [part=root]{background-color:transparent}:host([disabled]){pointer-events:none !important}:host([part=foot]) [part=root]{border:0;box-shadow:none}:host([busy]){pointer-events:none !important;box-shadow:none !important}:host([busy]) [part=root] *:not([part=spinner]),:host([busy]) ::slotted(*){visibility:hidden !important}:host([busy]) slot,:host([busy]) ::slotted(*){color:transparent !important}[part=spinner]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;height:fit-content;width:fit-content}:host{--bg-color: var(--item-bg-color);--bg-color-hover: var(--item-bg-color-hover, var(--bg-object-hover));--b-color-active: var(--item-b-color-active);--bg-disabled: var(--item-bg-disabled);--f-size: var(--item-f-size, 1rem);--size: var(--item-size, 3rem);--py: var(--item-py, .875rem);--px: var(--item-px, 1.25rem);--icon-size: var(--item-icon-size, 2rem);display:flex;flex-direction:row;align-items:flex-start;width:100%;font-size:var(--f-size)}[part=root]{padding-left:var(--px);line-height:1.3}[part=body]{display:flex;padding:var(--py) 0;text-align:left;flex-direction:column;justify-content:space-between;flex:1;min-width:0}:host([type=button]) ::slotted(m-check){--check-position: static}:host(.lined:not(:last-of-type)) [part=root]{border-bottom:1px solid var(--b-fadest)}:host(.indent-lined:not(:last-of-type)) [part=lower]{border-bottom:1px solid var(--b-fadest)}:host(.indent-lined:not(:last-of-type)) [part=body]{padding-top:calc(var(--py) + 1px);padding-bottom:calc(var(--py) - 1px)}:host(.sm){--f-size: .9125rem;--size: 2.5rem;--px: 1.125rem;--py: .6875rem;--icon-size: 1.625rem}:host(.xs){--f-size: .875rem;--size: 2rem;--px: 1rem;--py: .5rem;--icon-size: 1.25rem}:host([active]){font-weight:500}:host([disabled]){background-color:transparent !important}:host([disabled]) ::slotted(*){color:var(--f-fadest) !important}:host([disabled]) ::slotted(img){opacity:.25;filter:grayscale(1)}[part=lower]{width:100%;flex-wrap:nowrap;flex:1 1 auto;padding-right:var(--px);box-sizing:border-box}slot[name=foot],slot[name=head],[part=lower]{display:flex;contain:style}slot[name=head]{text-align:center;white-space:nowrap;align-items:center;justify-content:center;min-height:var(--size)}slot[name=foot]{color:var(--f-fade);align-items:center;white-space:nowrap}slot[name=foot]::slotted(*){margin-left:calc(var(--px) / 2)}slot[name=foot]::slotted(m-check){margin-right:calc(var(--px) / -4)}slot[name=head]::slotted(*){display:flex;justify-content:center;align-items:center;margin:0 .8125rem 0 calc(.8125rem - var(--px));object-fit:cover;height:var(--icon-size);width:var(--icon-size)}slot[name=img]::slotted(*){object-fit:cover;margin:calc(var(--px) / 2);margin-right:calc(var(--px) / -2);border-radius:.125rem}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6487:
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
___CSS_LOADER_EXPORT___.push([module.id, ":host{contain:style;display:flex;width:100%;flex-direction:column}.dark m-list [is=m-check]~i{--checked: #fff}::slotted(header){font-size:var(--f-md);color:var(--f-theme);line-height:100%;font-weight:500;padding:1.25rem 1rem .625rem 1rem}::slotted(label){line-height:100%;font-weight:500;padding:1.25rem 1rem .625rem 1rem;font-size:var(--f-xxs);color:var(--f-fader);letter-spacing:1px;text-transform:uppercase}::slotted(label:first-child){padding-top:.625rem}", ""]);
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

/***/ 1028:
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
___CSS_LOADER_EXPORT___.push([module.id, ":host{position:absolute;contain:content;height:125%;width:100%;top:0;left:0;z-index:0;background-color:rgba(0,0,0,.5)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1607:
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
___CSS_LOADER_EXPORT___.push([module.id, ":host{z-index:1060}[part=content]{--content-offset-top: .375rem;--content-offset-bottom: .375rem;border-radius:.3125rem;background-color:rgba(var(--bg-object-rgb), 0.8);backdrop-filter:blur(35px);-webkit-backdrop-filter:blur(35px)}[part=content]:after{position:absolute;top:0;left:0;pointer-events:none;box-sizing:border-box;content:\"\";border:1px solid var(--b-fadest);display:block;width:100%;height:100%;border-radius:inherit;box-shadow:0 .5px .8px rgba(0,0,0,.017),0 1.3px 1.9px rgba(0,0,0,.024),0 2.4px 3.6px rgba(0,0,0,.03),0 4.2px 6.5px rgba(0,0,0,.036),0 7.9px 12.1px rgba(0,0,0,.043),0 19px 29px rgba(0,0,0,.06),0 -4.2px 6.5px rgba(0,0,0,.036)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8294:
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
___CSS_LOADER_EXPORT___.push([module.id, ":host{contain:style paint;display:inline-flex;border-radius:.125rem;height:100%;width:100%;pointer-events:none;-ms-user-select:none;user-select:none;-webkit-user-select:none}:host:before{content:\" \"}[part=bg]{position:absolute;content:\"\";contain:strict;top:0;bottom:0;margin:auto;border-radius:inherit;height:100%;width:100%;background-color:rgba(var(--bg-skeleton-rgb), 0.05)}:host(.animated){position:relative}:host(.animated) [part=bg]{background-color:transparent;background-image:linear-gradient(to right, rgba(var(--bg-skeleton-rgb), 0.05) 2%, rgba(var(--bg-skeleton-rgb), 0.08) 18%, rgba(var(--bg-skeleton-rgb), 0.05) 33%);background-size:800px 104px;animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-timing-function:linear;animation-name:animate;will-change:background-position}@keyframes animate{0%{background-position:-400px 0}100%{background-position:400px 0}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 868:
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
___CSS_LOADER_EXPORT___.push([module.id, "[part=root]{position:relative;display:inherit;-webkit-appearance:none;contain:style;font:inherit;flex-wrap:inherit;flex-direction:inherit;align-items:inherit;justify-content:inherit;letter-spacing:inherit;line-height:inherit;text-transform:inherit;text-overflow:inherit;text-align:inherit;white-space:inherit;text-decoration:inherit;color:inherit;border-radius:inherit;padding:0;border:var(--b-color) var(--b-width, 0) var(--b-style, solid);width:100%;height:100%;outline:none;overflow:hidden;background-origin:border-box;background-color:var(--bg-color);box-sizing:border-box;transition:box-shadow ease-out .15s;will-change:transform;backdrop-filter:blur(var(--blur))}[part=root][disabled]{color:var(--f-fadest) !important;box-shadow:none !important}[part=root][disabled] ::slotted([part=foot]){color:inherit}:host(.outlined) [part=root]{border-width:var(--b-width, 1px)}::slotted([part=body]){display:flex;flex:1 1 auto}::slotted([part=foot]),::slotted([part=head]){display:flex;flex:0 0 auto}@media(any-hover: hover){.touch:hover:not([disabled]){background-color:var(--bg-color-hover)}:host(.outlined) .touch:hover:not([disabled]){background-color:var(--bg-color-hover);box-shadow:inset 0 0 0 1px var(--b-color-active);border-color:var(--b-color-active)}}button[part=root],a[part=root]{-webkit-appearance:none;-ms-user-select:none;user-select:none;cursor:pointer}:host(.outlined){--b-width: 1px}:host(.outlined) [part=root]{background-color:transparent}:host([disabled]){pointer-events:none !important}:host([part=foot]) [part=root]{border:0;box-shadow:none}:host([busy]){pointer-events:none !important;box-shadow:none !important}:host([busy]) [part=root] *:not([part=spinner]),:host([busy]) ::slotted(*){visibility:hidden !important}:host([busy]) slot,:host([busy]) ::slotted(*){color:transparent !important}[part=spinner]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;height:fit-content;width:fit-content}:host(.blue){--bg-color: var(--blue);--bg-color-hover: var(--f-blue)}:host(.blue.outlined){--f-theme: var(--f-blue);--bg-color-head: var(--blue-fader);--bg-color-hover: var(--blue-fader);--b-color: var(--blue);--b-color-active: var(--blue)}:host(.blue\\+){--bg-color-head: var(--blue-fade);--bg-color: var(--blue-fader);--bg-color-hover: var(--blue-fade);--f-theme: var(--f-blue)}:host(.blue\\+.outlined){--bg-color-head: var(--blue-fader);--bg-color-hover: var(--blue-fader);--b-color: var(--b-fader);--b-color-active: var(--blue-fade)}:host(.green){--bg-color: var(--green);--bg-color-hover: var(--f-green)}:host(.green.outlined){--f-theme: var(--f-green);--bg-color-head: var(--green-fader);--bg-color-hover: var(--green-fader);--b-color: var(--green);--b-color-active: var(--green)}:host(.green\\+){--bg-color-head: var(--green-fade);--bg-color: var(--green-fader);--bg-color-hover: var(--green-fade);--f-theme: var(--f-green)}:host(.green\\+.outlined){--bg-color-head: var(--green-fader);--bg-color-hover: var(--green-fader);--b-color: var(--b-fader);--b-color-active: var(--green-fade)}:host(.red){--bg-color: var(--red);--bg-color-hover: var(--f-red)}:host(.red.outlined){--f-theme: var(--f-red);--bg-color-head: var(--red-fader);--bg-color-hover: var(--red-fader);--b-color: var(--red);--b-color-active: var(--red)}:host(.red\\+){--bg-color-head: var(--red-fade);--bg-color: var(--red-fader);--bg-color-hover: var(--red-fade);--f-theme: var(--f-red)}:host(.red\\+.outlined){--bg-color-head: var(--red-fader);--bg-color-hover: var(--red-fader);--b-color: var(--b-fader);--b-color-active: var(--red-fade)}:host(.purple){--bg-color: var(--purple);--bg-color-hover: var(--f-purple)}:host(.purple.outlined){--f-theme: var(--f-purple);--bg-color-head: var(--purple-fader);--bg-color-hover: var(--purple-fader);--b-color: var(--purple);--b-color-active: var(--purple)}:host(.purple\\+){--bg-color-head: var(--purple-fade);--bg-color: var(--purple-fader);--bg-color-hover: var(--purple-fade);--f-theme: var(--f-purple)}:host(.purple\\+.outlined){--bg-color-head: var(--purple-fader);--bg-color-hover: var(--purple-fader);--b-color: var(--b-fader);--b-color-active: var(--purple-fade)}:host(.yellow){--bg-color: var(--yellow);--bg-color-hover: var(--f-yellow)}:host(.yellow.outlined){--f-theme: var(--f-yellow);--bg-color-head: var(--yellow-fader);--bg-color-hover: var(--yellow-fader);--b-color: var(--yellow);--b-color-active: var(--yellow)}:host(.yellow\\+){--bg-color-head: var(--yellow-fade);--bg-color: var(--yellow-fader);--bg-color-hover: var(--yellow-fade);--f-theme: var(--f-yellow)}:host(.yellow\\+.outlined){--bg-color-head: var(--yellow-fader);--bg-color-hover: var(--yellow-fader);--b-color: var(--b-fader);--b-color-active: var(--yellow-fade)}:host(.object){--bg-color: var(--bg-object);--bg-color-head: var(--theme-fade);--bg-color-hover: var(--theme-fade);--blur: 35px}:host(.object.outlined){--bg-color-hover: var(--theme-fader);--b-color: var(--b-fader);--b-color-active: var(--b-fade)}:host(.theme){--bg-color: var(--theme);--bg-color-head: var(--theme-fade);--bg-color-hover: var(--theme-fade)}:host(.theme.outlined){--bg-color-hover: var(--theme-fader);--b-color: var(--b-fader);--b-color-active: var(--b-fade)}:host(.theme\\+){--bg-color-head: var(--theme);--bg-color: var(--theme-fade);--bg-color-hover: var(--theme-fader)}:host(.theme\\+.outlined){--bg-color-head: var(--theme-fader);--bg-color-hover: var(--theme-fade);--b-color: var(--b-fader);--b-color-active: var(--b-fade)}:host(.brand),:host(.blue),:host(.red),:host(.green),:host(.purple),:host(.yellow){--bg-color-head: rgba(0, 0, 0, .1);--f-theme: #fff}:host([disabled]){--bg-color: transparent;--b-color: transparent}:host{--px: var(--button-px, 1.25rem);--py: var(--button-py, 0rem);--size: var(--button-size, 3rem);--f-size: var(--button-f-size, var(--f-sm));--f-color: var(--button-f-color, var(--f-theme));--b-width: var(--button-b-width, 0px);--b-color: var(--button-b-color, var(--b-fader));--b-color-active: var(--button-b-color-active, var(--b-fade));--bg-color: var(--button-bg-color, transparent);--bg-color-hover: var(--button-bg-color-hover, var(--bg-color));display:inline-flex;font-size:var(--f-size);color:var(--f-color);font-weight:500;letter-spacing:1.25px;line-height:1.2;text-transform:uppercase;white-space:nowrap;border-radius:.3125rem;align-items:center;justify-content:center}:host::-moz-focus-inner{border-style:none;padding:0}:host m-load{position:absolute;left:0;right:0;top:0;bottom:0;margin:auto}:host(.raised:not([disabled])){box-shadow:0px 3px 1px -2px rgba(0,0,0,.2),0px 2px 2px 0px rgba(0,0,0,.14),0px 1px 5px 0px rgba(0,0,0,.12)}:host(.xs){--px: .8rem;--size: 2rem;--f-size: .8125rem}:host(.sm){--px: 1.1rem;--size: 2.5rem;--f-size: .9125rem}:host(.lg){--px: 1.4rem;--size: 3.5rem;--f-size: 1.125rem}:host(.round),:host(.square){--px: 0;width:var(--size);height:var(--size)}:host(.outlined) ::slotted([part=foot]){color:var(--f-fader)}[part=root]{padding:var(--py) var(--px);min-width:var(--size);min-height:var(--size)}::slotted([part=head]),::slotted([part=foot]){align-items:center;justify-content:center}::slotted([part=head]){margin-left:-0.25rem;margin-right:.5rem}::slotted([part=head].abs){position:absolute;left:0;margin-left:calc(var(--px) - .3rem)}::slotted([part=foot]){margin-right:-0.25rem;margin-left:.5rem}::slotted([part=foot].abs){position:absolute;right:0;margin-right:calc(var(--px) - .3rem)}:host([part=close]){--bg-color: var(--button-bg-color, var(--b-fade));--bg-color-hover: var(--button-bg-color-hover, var(--f-fadest));--b-color-active: var(--button-b-color-active, transparent);--f-color: var(--button-f-color, var(--theme-fade))}:host([part=close]) ::slotted(m-icon){--icon-stroke-width: 4px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 699:
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
___CSS_LOADER_EXPORT___.push([module.id, ":host([prompt][valid][dirty]),:host([prompt][valid][touched]),:host([prompt][class*=-valid][class*=-dirty]),:host([prompt][class*=-valid][class*=-touched]){--prompt-bg-color: var(--green-fader);--prompt-f-color: var(--green);--label-f-color: var(--green)}:host([prompt][invalid][dirty]),:host([prompt][invalid][touched]),:host([prompt][class*=-invalid][class*=-dirty]),:host([prompt][class*=-invalid][class*=-touched]){--prompt-bg-color: var(--red-fader) !important;--prompt-f-color: var(--f-red) !important;--label-f-color: var(--f-red) !important;--b-color: var(--red) !important}:host([prompt]:not([prompt=\"\"])[dirty]):after,:host([prompt]:not([prompt=\"\"])[touched]):after,:host([prompt]:not([prompt=\"\"])[class*=-dirty]):after,:host([prompt]:not([prompt=\"\"])[class*=-touched]):after{content:attr(prompt);position:absolute;z-index:1000;bottom:-0.1875rem;right:0;transform:translateY(100%);font-size:var(--f-xxs);font-weight:500;border-radius:.125rem;color:var(--prompt-f-color);background-color:var(--prompt-bg-color);white-space:normal;text-align:right;line-height:1.2;padding:.1875rem .375rem .125rem .375rem}::slotted(label){margin-left:.5rem}:host{--position: var(--check-position, relative);--size: var(--check-size, 1.5rem);--bg-color: var(--check-bg-color, var(--b-fadest));--color: var(--check-color, var(--f-theme));position:var(--position);display:inline-flex;align-items:center;cursor:pointer}:host(.sm){--size: 1.25rem}:host(.sm) [part=check-icon],:host(.sm) [part=ban-icon]{stroke-width:2.5px}:host(.lg){--size: 2rem}::slotted([part=body]){opacity:0;position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;-webkit-appearance:none;cursor:pointer !important}:host([type=radio]) [part=check]{border-radius:50%}:host([type=radio][checked]){pointer-events:none}:host([type=radio][checked]) [part=check]{background-color:transparent}[part=check]{box-sizing:border-box;width:var(--size);height:var(--size);border:2px solid;border-color:var(--b-fadest);border-radius:.1875rem}[part=ban-icon]{stroke:var(--b-fadest);display:none}[part=check-icon],[part=ban-icon]{fill:none;box-sizing:border-box;stroke-width:2px;stroke-linecap:round;stroke-linejoin:round}[part=check-icon]{stroke:var(--color);stroke-dasharray:65%;stroke-dashoffset:65%;will-change:stroke-dashoffset;transition:.2s ease-out stroke-dashoffset}:host([disabled]) [part=check-icon]{stroke:var(--f-fadest)}:host([disabled]) [part=ban-icon]{display:block}:host([disabled]) ::slotted(label){color:var(--f-fadest)}:host([disabled][checked]) [part=ban-icon]{display:none}:host([checked]) [part=check]{background-color:var(--bg-color);border-color:transparent}:host([checked]) [part=check-icon]{stroke-dashoffset:0}:host([checked]) ::slotted(label){font-weight:500}:host([interface=switch]){--bg-color: var(--check-bg-color, #56dd6a)}[part=switch]{box-sizing:border-box;width:calc(var(--size) * 1.6);height:var(--size);border-radius:var(--size);background-color:var(--b-fadest);transition:.2s ease background-color}[part=button-icon]{fill:#fff;transition:transform .2s ease,width .2s ease;transform:translateX(-6px);transform-origin:0px -6px;filter:url(#s)}:host([checked]) [part=switch]{background-color:var(--bg-color)}:host([checked]) [part=button-icon]{transform:translateX(6px);transform-origin:0px 6px}:host(:not([disabled]):active) [part=button-icon]{width:20px}:host(:not([disabled])[checked]:active) [part=button-icon]{width:20px;transform:translateX(2px);transform-origin:0px 2px}:host([interface=switch][disabled]) [part=button-icon]{filter:none}:host([interface=switch][disabled]:not([checked])) [part=button-icon]{fill:var(--switch-button-color)}:host([interface=switch][disabled][checked]) [part=switch]{opacity:.5}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3131:
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
___CSS_LOADER_EXPORT___.push([module.id, "::slotted(input),::slotted(textarea),input,textarea{cursor:text;border:0;font-weight:inherit;color:inherit;-webkit-appearance:none;white-space:nowrap;font-family:inherit;font-size:inherit;text-align:inherit;line-height:inherit;letter-spacing:inherit;-webkit-text-fill-color:unset;outline:none;background-color:transparent;-webkit-user-drag:none;-ms-user-select:text;user-select:text;-webkit-user-select:text;touch-action:manipulation;-webkit-touch-action:manipulation;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}::slotted(:-webkit-autofill),:-webkit-autofill{-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s;border-style:dashed !important;caret-color:var(--f-theme);-webkit-text-fill-color:var(--f-blue)}::-webkit-inner-spin-button,::-webkit-outer-spin-button{display:none}::-webkit-search-cancel-button,::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:-ms-input-placeholder{opacity:1;color:var(--f-fadest);-webkit-text-fill-color:var(--f-fadest)}::placeholder{opacity:1;color:var(--f-fadest);-webkit-text-fill-color:var(--f-fadest)}:-moz-read-only{cursor:default;caret-color:transparent}:host{position:relative;display:inline-flex;align-items:flex-start;font-size:var(--f-size);line-height:1.2}:host(.xs){--f-size: var(--f-xs);--py: .5rem;--px: .8rem;--size: 2rem;--label-px: .25rem;--label-f-size: .65625rem}:host(.sm){--py: 0.65625rem;--label-px: .25rem;--size: 2.5rem}:host(.lg){--f-size: var(--f-md);--py: 1rem;--px: 1.2rem;--size: 3.5rem;--label-px: .3125rem;--label-f-size: .9375rem}:host(.outlined),:host(.underlined){--b-color: var(--b-fader);--b-color-active: var(--b-fade);backdrop-filter:none}@media(any-hover: hover){:host(:not([disabled]):not([readonly]):hover) fieldset{border-color:var(--b-color-active)}}:host([readonly]:not(.output)) fieldset{border-style:dashed}:host(:active:not([readonly]):not([disabled])) fieldset,:host(:focus-within:not([readonly]):not([disabled])) fieldset,:host([focused]:not([readonly]):not([disabled])) fieldset{--b-width: 2px;border-color:var(--b-color-active)}:host(:active:not([readonly]):not([disabled])) ::slotted([part=body]),:host(:active:not([readonly]):not([disabled])) [part=body],:host(:focus-within:not([readonly]):not([disabled])) ::slotted([part=body]),:host(:focus-within:not([readonly]):not([disabled])) [part=body],:host([focused]:not([readonly]):not([disabled])) ::slotted([part=body]),:host([focused]:not([readonly]):not([disabled])) [part=body]{color:var(--f-fade)}:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) ::slotted([part=head]),:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) ::slotted([part=foot]),:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) ::slotted([part=body]),:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) [part=body]{opacity:0;transition-delay:0s}:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) legend{max-width:0}:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) label{transition-delay:.1s;transform:translate(0, var(--py))}:host(.outlined){border-radius:.3125rem}:host(.outlined) fieldset{border-width:var(--b-width)}:host(.outlined) legend{transition:max-width .2s cubic-bezier(0.33, 1, 0.68, 1) .1s;margin-left:0;will-change:max-width}:host(.outlined[label]:not([label=\"\"])) [part=label]{padding:0 var(--label-px);letter-spacing:inherit;contain:strict}:host(.outlined[busy]) legend,:host(.outlined[expanded]) legend,:host(.outlined[label]:not([empty]):not(:focus-within)) legend{transition:none;margin-left:0}:host(.outlined[label]:active:not([readonly]):not([disabled])) legend,:host(.outlined[label]:focus-within:not([readonly]):not([disabled])) legend,:host(.outlined[label][focused]:not([readonly]):not([disabled])) legend{transition:max-width .2s ease-in;margin-left:-1px;height:2px}:host(.underlined){--px: 0}:host(.underlined) fieldset{border-bottom-width:var(--b-width)}:host(.underlined) ::slotted([part=head]),:host(.underlined) ::slotted([part=foot]),:host(.underlined) ::slotted([part=body]),:host(.underlined) [part=icon],:host(.underlined) [part=body]{padding-top:calc(var(--py) + .125rem);padding-bottom:calc(var(--py) - .125rem)}label{position:absolute;top:0;left:var(--px);display:block;-ms-user-select:none;user-select:none;pointer-events:none;transition-property:transform,opacity;will-change:transform,opacity;transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-duration:.2s;transform-origin:left;line-height:inherit;color:var(--label-f-color);transform:scale(0.75) translate(0, -65%);white-space:nowrap;letter-spacing:inherit;font-weight:inherit}fieldset{position:absolute;box-sizing:border-box;top:0;left:0;width:100%;height:100%;margin:0;display:flex;color:var(--theme, var(--f-theme-fader));border-color:var(--b-color);border-width:0;border-style:solid;padding:0 calc(var(--px) - .3125rem);border-radius:inherit;pointer-events:none}legend{max-width:100%;height:1px;font-size:var(--label-f-size);line-height:0;padding:0;margin:0;contain:layout paint style;-ms-user-select:none;user-select:none;visibility:hidden}::slotted(:invalid){box-shadow:none}::slotted([part=head]),::slotted([part=foot]),::slotted([part=body]),[part=icon],[part=body]{box-sizing:border-box;padding-top:var(--py);padding-bottom:var(--py);transition:opacity .2s .1s cubic-bezier(0, 0, 0.2, 1);will-change:opacity;min-height:var(--size)}::slotted([part=body]),[part=body]{z-index:1;display:flex;text-overflow:ellipsis;-ms-text-overflow:ellipsis;align-items:center;contain:style;width:100%;padding-left:var(--px);padding-right:var(--px)}::slotted([part=head]),::slotted([part=foot]),[part=icon]{display:flex;-ms-user-select:none;user-select:none;white-space:nowrap;align-items:center}::slotted([part=head]){margin-right:.3125rem;padding-left:var(--px);order:-1}:host(.outlined) ::slotted([part=head]){margin-right:-0.6875rem}::slotted([part=foot]){order:1;margin-left:.3125rem;padding-right:var(--px);font-size:var(--f-xxs);color:var(--f-fade)}:host([busy]){pointer-events:none !important}:host([busy]) ::slotted([part=body]),:host([busy]) [part=body]{visibility:hidden}:host([busy]) [part=icon]{visibility:hidden}[part=spinner]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;height:fit-content;width:fit-content}:host([disabled]){-webkit-text-fill-color:var(--f-fadest);cursor:no-drop !important;color:var(--f-fadest) !important}:host([disabled]) fieldset{border-style:dashed;border-color:var(--b-color) !important}:host([disabled]):after{display:none}[part=clear]{--button-bg-color-hover: var(--theme-fade);--button-f-color: var(--f-fadest);--button-f-size: var(--f-xxs);--button-size: 1.25rem;--icon-stroke-width: 3px;border-radius:50%}[part=clear]+[part=icon]{margin-left:.25rem}[part=foot]{display:flex;align-items:center;height:var(--size);padding-right:calc(var(--px) / 1.5)}:host([prompt][valid][dirty]),:host([prompt][valid][touched]),:host([prompt][class*=-valid][class*=-dirty]),:host([prompt][class*=-valid][class*=-touched]){--prompt-bg-color: var(--green-fader);--prompt-f-color: var(--green);--label-f-color: var(--green)}:host([prompt][invalid][dirty]),:host([prompt][invalid][touched]),:host([prompt][class*=-invalid][class*=-dirty]),:host([prompt][class*=-invalid][class*=-touched]){--prompt-bg-color: var(--red-fader) !important;--prompt-f-color: var(--f-red) !important;--label-f-color: var(--f-red) !important;--b-color: var(--red) !important}:host([prompt]:not([prompt=\"\"])[dirty]):after,:host([prompt]:not([prompt=\"\"])[touched]):after,:host([prompt]:not([prompt=\"\"])[class*=-dirty]):after,:host([prompt]:not([prompt=\"\"])[class*=-touched]):after{content:attr(prompt);position:absolute;z-index:1000;bottom:-0.1875rem;right:0;transform:translateY(100%);font-size:var(--f-xxs);font-weight:500;border-radius:.125rem;color:var(--prompt-f-color);background-color:var(--prompt-bg-color);white-space:normal;text-align:right;line-height:1.2;padding:.1875rem .375rem .125rem .375rem}:host{--f-size: var(--input-f-size, var(--f-sm));--b-width: var(--input-b-width, 1px);--b-color: var(--input-b-color, transparent);--py: var(--input-py, .90625rem);--px: var(--input-px, 1rem);--size: var(--input-size, 3rem);--label-px: var(--input-label-px, .25rem);--label-f-size: var(--input-label-f-size, var(--f-xxs));--label-f-color: var(--input-label-f-color, var(--f-theme-fader));--image-size: var(--input-image-size, 10rem)}:host(.outlined) ::slotted([part=body]){padding-left:0;padding-right:0;text-indent:var(--px)}:host(:focus-within:not([readonly]):not([disabled])) ::slotted([part=body]){-webkit-mask-image:linear-gradient(to right, rgba(0, 0, 0, 0) 0px, black var(--px), black calc(100% - var(--px)), rgba(0, 0, 0, 0) 100%)}:host([type=file]){cursor:copy}:host([type=file]) ::slotted([part=body]){position:absolute;pointer-events:none;z-index:2;opacity:0;height:100%;width:100%;cursor:copy !important}:host([type=file]) ::slotted(img){width:var(--image-size);height:var(--image-size);object-fit:cover}:host([dragging]) ::slotted([part=body]){cursor:grab !important}:host([dragging]) fieldset{--b-width: 2px;border-color:var(--b-color-active)}[part=image]{width:var(--image-size);height:var(--image-size);object-fit:cover;background-color:rgba(var(--bg-skeleton-rgb), 0.05)}:host([interface=image]) [part=body]:before{display:flex;justify-content:center;min-height:var(--image-size);min-width:var(--image-size);align-items:center}:host([interface=image]) [part=output]{display:flex;flex-direction:column;margin:.25rem;border-radius:3px;overflow:hidden}:host([interface=image]) m-chip{border-radius:0;width:var(--image-size);margin:0}:host([interface=image]) m-chip m-button[part=close]{margin-left:auto}[part=filename]{overflow:hidden;flex:1 1 auto;text-overflow:ellipsis}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9297:
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
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7283:
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
___CSS_LOADER_EXPORT___.push([module.id, ":host{z-index:1060}[part=content]{--content-offset-top: .375rem;--content-offset-bottom: .375rem;border-radius:.3125rem;background-color:rgba(var(--bg-object-rgb), 0.8);backdrop-filter:blur(35px);-webkit-backdrop-filter:blur(35px)}[part=content]:after{position:absolute;top:0;left:0;pointer-events:none;box-sizing:border-box;content:\"\";border:1px solid var(--b-fadest);display:block;width:100%;height:100%;border-radius:inherit;box-shadow:0 .5px .8px rgba(0,0,0,.017),0 1.3px 1.9px rgba(0,0,0,.024),0 2.4px 3.6px rgba(0,0,0,.03),0 4.2px 6.5px rgba(0,0,0,.036),0 7.9px 12.1px rgba(0,0,0,.043),0 19px 29px rgba(0,0,0,.06),0 -4.2px 6.5px rgba(0,0,0,.036)}:host([searching]) ::slotted(m-item:not([found])){display:none}[part=search-info]{font-size:var(--f-xxs);padding:.5rem 1.25rem;font-style:italic;text-align:center;letter-spacing:1px;color:var(--f-fade)}[part=content]{max-height:inherit}::slotted(m-item[selected]){font-weight:600}::slotted(m-item[empty]){color:var(--f-fade);font-weight:normal}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 924:
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
___CSS_LOADER_EXPORT___.push([module.id, "::slotted(input),::slotted(textarea),input,textarea{cursor:text;border:0;font-weight:inherit;color:inherit;-webkit-appearance:none;white-space:nowrap;font-family:inherit;font-size:inherit;text-align:inherit;line-height:inherit;letter-spacing:inherit;-webkit-text-fill-color:unset;outline:none;background-color:transparent;-webkit-user-drag:none;-ms-user-select:text;user-select:text;-webkit-user-select:text;touch-action:manipulation;-webkit-touch-action:manipulation;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}::slotted(:-webkit-autofill),:-webkit-autofill{-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s;border-style:dashed !important;caret-color:var(--f-theme);-webkit-text-fill-color:var(--f-blue)}::-webkit-inner-spin-button,::-webkit-outer-spin-button{display:none}::-webkit-search-cancel-button,::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:-ms-input-placeholder{opacity:1;color:var(--f-fadest);-webkit-text-fill-color:var(--f-fadest)}::placeholder{opacity:1;color:var(--f-fadest);-webkit-text-fill-color:var(--f-fadest)}:-moz-read-only{cursor:default;caret-color:transparent}:host{position:relative;display:inline-flex;align-items:flex-start;font-size:var(--f-size);line-height:1.2}:host(.xs){--f-size: var(--f-xs);--py: .5rem;--px: .8rem;--size: 2rem;--label-px: .25rem;--label-f-size: .65625rem}:host(.sm){--py: 0.65625rem;--label-px: .25rem;--size: 2.5rem}:host(.lg){--f-size: var(--f-md);--py: 1rem;--px: 1.2rem;--size: 3.5rem;--label-px: .3125rem;--label-f-size: .9375rem}:host(.outlined),:host(.underlined){--b-color: var(--b-fader);--b-color-active: var(--b-fade);backdrop-filter:none}@media(any-hover: hover){:host(:not([disabled]):not([readonly]):hover) fieldset{border-color:var(--b-color-active)}}:host([readonly]:not(.output)) fieldset{border-style:dashed}:host(:active:not([readonly]):not([disabled])) fieldset,:host(:focus-within:not([readonly]):not([disabled])) fieldset,:host([focused]:not([readonly]):not([disabled])) fieldset{--b-width: 2px;border-color:var(--b-color-active)}:host(:active:not([readonly]):not([disabled])) ::slotted([part=body]),:host(:active:not([readonly]):not([disabled])) [part=body],:host(:focus-within:not([readonly]):not([disabled])) ::slotted([part=body]),:host(:focus-within:not([readonly]):not([disabled])) [part=body],:host([focused]:not([readonly]):not([disabled])) ::slotted([part=body]),:host([focused]:not([readonly]):not([disabled])) [part=body]{color:var(--f-fade)}:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) ::slotted([part=head]),:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) ::slotted([part=foot]),:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) ::slotted([part=body]),:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) [part=body]{opacity:0;transition-delay:0s}:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) legend{max-width:0}:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) label{transition-delay:.1s;transform:translate(0, var(--py))}:host(.outlined){border-radius:.3125rem}:host(.outlined) fieldset{border-width:var(--b-width)}:host(.outlined) legend{transition:max-width .2s cubic-bezier(0.33, 1, 0.68, 1) .1s;margin-left:0;will-change:max-width}:host(.outlined[label]:not([label=\"\"])) [part=label]{padding:0 var(--label-px);letter-spacing:inherit;contain:strict}:host(.outlined[busy]) legend,:host(.outlined[expanded]) legend,:host(.outlined[label]:not([empty]):not(:focus-within)) legend{transition:none;margin-left:0}:host(.outlined[label]:active:not([readonly]):not([disabled])) legend,:host(.outlined[label]:focus-within:not([readonly]):not([disabled])) legend,:host(.outlined[label][focused]:not([readonly]):not([disabled])) legend{transition:max-width .2s ease-in;margin-left:-1px;height:2px}:host(.underlined){--px: 0}:host(.underlined) fieldset{border-bottom-width:var(--b-width)}:host(.underlined) ::slotted([part=head]),:host(.underlined) ::slotted([part=foot]),:host(.underlined) ::slotted([part=body]),:host(.underlined) [part=icon],:host(.underlined) [part=body]{padding-top:calc(var(--py) + .125rem);padding-bottom:calc(var(--py) - .125rem)}label{position:absolute;top:0;left:var(--px);display:block;-ms-user-select:none;user-select:none;pointer-events:none;transition-property:transform,opacity;will-change:transform,opacity;transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-duration:.2s;transform-origin:left;line-height:inherit;color:var(--label-f-color);transform:scale(0.75) translate(0, -65%);white-space:nowrap;letter-spacing:inherit;font-weight:inherit}fieldset{position:absolute;box-sizing:border-box;top:0;left:0;width:100%;height:100%;margin:0;display:flex;color:var(--theme, var(--f-theme-fader));border-color:var(--b-color);border-width:0;border-style:solid;padding:0 calc(var(--px) - .3125rem);border-radius:inherit;pointer-events:none}legend{max-width:100%;height:1px;font-size:var(--label-f-size);line-height:0;padding:0;margin:0;contain:layout paint style;-ms-user-select:none;user-select:none;visibility:hidden}::slotted(:invalid){box-shadow:none}::slotted([part=head]),::slotted([part=foot]),::slotted([part=body]),[part=icon],[part=body]{box-sizing:border-box;padding-top:var(--py);padding-bottom:var(--py);transition:opacity .2s .1s cubic-bezier(0, 0, 0.2, 1);will-change:opacity;min-height:var(--size)}::slotted([part=body]),[part=body]{z-index:1;display:flex;text-overflow:ellipsis;-ms-text-overflow:ellipsis;align-items:center;contain:style;width:100%;padding-left:var(--px);padding-right:var(--px)}::slotted([part=head]),::slotted([part=foot]),[part=icon]{display:flex;-ms-user-select:none;user-select:none;white-space:nowrap;align-items:center}::slotted([part=head]){margin-right:.3125rem;padding-left:var(--px);order:-1}:host(.outlined) ::slotted([part=head]){margin-right:-0.6875rem}::slotted([part=foot]){order:1;margin-left:.3125rem;padding-right:var(--px);font-size:var(--f-xxs);color:var(--f-fade)}:host([busy]){pointer-events:none !important}:host([busy]) ::slotted([part=body]),:host([busy]) [part=body]{visibility:hidden}:host([busy]) [part=icon]{visibility:hidden}[part=spinner]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;height:fit-content;width:fit-content}:host([disabled]){-webkit-text-fill-color:var(--f-fadest);cursor:no-drop !important;color:var(--f-fadest) !important}:host([disabled]) fieldset{border-style:dashed;border-color:var(--b-color) !important}:host([disabled]):after{display:none}[part=clear]{--button-bg-color-hover: var(--theme-fade);--button-f-color: var(--f-fadest);--button-f-size: var(--f-xxs);--button-size: 1.25rem;--icon-stroke-width: 3px;border-radius:50%}[part=clear]+[part=icon]{margin-left:.25rem}[part=foot]{display:flex;align-items:center;height:var(--size);padding-right:calc(var(--px) / 1.5)}:host([prompt][valid][dirty]),:host([prompt][valid][touched]),:host([prompt][class*=-valid][class*=-dirty]),:host([prompt][class*=-valid][class*=-touched]){--prompt-bg-color: var(--green-fader);--prompt-f-color: var(--green);--label-f-color: var(--green)}:host([prompt][invalid][dirty]),:host([prompt][invalid][touched]),:host([prompt][class*=-invalid][class*=-dirty]),:host([prompt][class*=-invalid][class*=-touched]){--prompt-bg-color: var(--red-fader) !important;--prompt-f-color: var(--f-red) !important;--label-f-color: var(--f-red) !important;--b-color: var(--red) !important}:host([prompt]:not([prompt=\"\"])[dirty]):after,:host([prompt]:not([prompt=\"\"])[touched]):after,:host([prompt]:not([prompt=\"\"])[class*=-dirty]):after,:host([prompt]:not([prompt=\"\"])[class*=-touched]):after{content:attr(prompt);position:absolute;z-index:1000;bottom:-0.1875rem;right:0;transform:translateY(100%);font-size:var(--f-xxs);font-weight:500;border-radius:.125rem;color:var(--prompt-f-color);background-color:var(--prompt-bg-color);white-space:normal;text-align:right;line-height:1.2;padding:.1875rem .375rem .125rem .375rem}:host{--f-size: var(--select-f-size, var(--f-sm));--b-width: var(--select-b-width, 1px);--b-color: var(--select-b-color, var(--b-fade));--py: var(--select-py, .90625rem);--px: var(--select-px, 1rem);--size: var(--select-size, 3rem);--label-px: var(--select-label-px, .25rem);--label-f-size: var(--select-label-f-size, var(--f-xxs));--label-f-color: var(--select-label-f-color, var(--f-theme-fader));cursor:pointer}[part=root]{display:flex;contain:style;font:inherit;flex-wrap:inherit;flex-direction:inherit;align-items:center;justify-content:inherit;letter-spacing:inherit;line-height:inherit;text-transform:inherit;text-overflow:inherit;text-align:inherit;white-space:inherit;text-decoration:inherit;color:inherit;border-radius:inherit;width:100%;height:100%;background-origin:border-box;box-sizing:border-box}[part=body]{flex-wrap:wrap;flex:1 1 auto;width:auto;margin:-0.28125rem 0;padding-right:0}[part=body]:empty[placeholder]{margin:0 !important}[part=body]:empty[placeholder]:before{content:attr(placeholder);color:var(--f-fadest)}[part=body]:empty[label]:not([placeholder]):before{content:attr(label);color:transparent}[part=foot]{margin-left:.375rem}m-chip{--chip-bg-color-head: var(--theme-fade);--chip-bg-color: var(--theme-fader);--chip-b-color: transparent;--chip-radius: .25rem;flex:0 0 auto;margin:.125rem .25rem .125rem 0}m-button[part=close]{--button-bg-color-hover: var(--bg-object-hover);--button-bg-color: transparent;--button-f-color: var(--f-fader)}m-button[part=close] m-icon{--icon-stroke-width: 3px}:host([readonly]){cursor:text}[part=search]{max-width:fit-content;display:inline-flex;order:1;flex:1 1 auto;padding:0;margin:.28125rem 0;white-space:nowrap;outline:none}[part=search][placeholder]:empty:before{content:attr(placeholder);color:var(--f-fadest)}:host([multiple]) [part=body]{padding-left:calc(var(--px) - .25rem);padding-right:calc(var(--px) - .25rem)}:host([multiple]) [part=search]{margin-left:.25rem;margin-right:.25rem}:host(.underlined[multiple]) [part=search]{margin-left:0;margin-right:0}:host(.underlined[multiple]) m-chip:last-of-type{margin-right:.5rem}::slotted([part=output]){display:none}m-icon[part=icon]{--f-color: var(--f-fadest);font-size:var(--f-size)}@media(any-hover: hover){:host(:not([disabled]):not([readonly]):hover) m-icon[part=icon]{color:var(--f-fade)}}:host(:not([multiple]):not([searchable])) [part=search]{cursor:pointer}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8112:
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
___CSS_LOADER_EXPORT___.push([module.id, "::slotted(input),::slotted(textarea),input,textarea{cursor:text;border:0;font-weight:inherit;color:inherit;-webkit-appearance:none;white-space:nowrap;font-family:inherit;font-size:inherit;text-align:inherit;line-height:inherit;letter-spacing:inherit;-webkit-text-fill-color:unset;outline:none;background-color:transparent;-webkit-user-drag:none;-ms-user-select:text;user-select:text;-webkit-user-select:text;touch-action:manipulation;-webkit-touch-action:manipulation;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}::slotted(:-webkit-autofill),:-webkit-autofill{-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s;border-style:dashed !important;caret-color:var(--f-theme);-webkit-text-fill-color:var(--f-blue)}::-webkit-inner-spin-button,::-webkit-outer-spin-button{display:none}::-webkit-search-cancel-button,::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:-ms-input-placeholder{opacity:1;color:var(--f-fadest);-webkit-text-fill-color:var(--f-fadest)}::placeholder{opacity:1;color:var(--f-fadest);-webkit-text-fill-color:var(--f-fadest)}:-moz-read-only{cursor:default;caret-color:transparent}:host{position:relative;display:inline-flex;align-items:flex-start;font-size:var(--f-size);line-height:1.2}:host(.xs){--f-size: var(--f-xs);--py: .5rem;--px: .8rem;--size: 2rem;--label-px: .25rem;--label-f-size: .65625rem}:host(.sm){--py: 0.65625rem;--label-px: .25rem;--size: 2.5rem}:host(.lg){--f-size: var(--f-md);--py: 1rem;--px: 1.2rem;--size: 3.5rem;--label-px: .3125rem;--label-f-size: .9375rem}:host(.outlined),:host(.underlined){--b-color: var(--b-fader);--b-color-active: var(--b-fade);backdrop-filter:none}@media(any-hover: hover){:host(:not([disabled]):not([readonly]):hover) fieldset{border-color:var(--b-color-active)}}:host([readonly]:not(.output)) fieldset{border-style:dashed}:host(:active:not([readonly]):not([disabled])) fieldset,:host(:focus-within:not([readonly]):not([disabled])) fieldset,:host([focused]:not([readonly]):not([disabled])) fieldset{--b-width: 2px;border-color:var(--b-color-active)}:host(:active:not([readonly]):not([disabled])) ::slotted([part=body]),:host(:active:not([readonly]):not([disabled])) [part=body],:host(:focus-within:not([readonly]):not([disabled])) ::slotted([part=body]),:host(:focus-within:not([readonly]):not([disabled])) [part=body],:host([focused]:not([readonly]):not([disabled])) ::slotted([part=body]),:host([focused]:not([readonly]):not([disabled])) [part=body]{color:var(--f-fade)}:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) ::slotted([part=head]),:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) ::slotted([part=foot]),:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) ::slotted([part=body]),:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) [part=body]{opacity:0;transition-delay:0s}:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) legend{max-width:0}:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) label{transition-delay:.1s;transform:translate(0, var(--py))}:host(.outlined){border-radius:.3125rem}:host(.outlined) fieldset{border-width:var(--b-width)}:host(.outlined) legend{transition:max-width .2s cubic-bezier(0.33, 1, 0.68, 1) .1s;margin-left:0;will-change:max-width}:host(.outlined[label]:not([label=\"\"])) [part=label]{padding:0 var(--label-px);letter-spacing:inherit;contain:strict}:host(.outlined[busy]) legend,:host(.outlined[expanded]) legend,:host(.outlined[label]:not([empty]):not(:focus-within)) legend{transition:none;margin-left:0}:host(.outlined[label]:active:not([readonly]):not([disabled])) legend,:host(.outlined[label]:focus-within:not([readonly]):not([disabled])) legend,:host(.outlined[label][focused]:not([readonly]):not([disabled])) legend{transition:max-width .2s ease-in;margin-left:-1px;height:2px}:host(.underlined){--px: 0}:host(.underlined) fieldset{border-bottom-width:var(--b-width)}:host(.underlined) ::slotted([part=head]),:host(.underlined) ::slotted([part=foot]),:host(.underlined) ::slotted([part=body]),:host(.underlined) [part=icon],:host(.underlined) [part=body]{padding-top:calc(var(--py) + .125rem);padding-bottom:calc(var(--py) - .125rem)}label{position:absolute;top:0;left:var(--px);display:block;-ms-user-select:none;user-select:none;pointer-events:none;transition-property:transform,opacity;will-change:transform,opacity;transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-duration:.2s;transform-origin:left;line-height:inherit;color:var(--label-f-color);transform:scale(0.75) translate(0, -65%);white-space:nowrap;letter-spacing:inherit;font-weight:inherit}fieldset{position:absolute;box-sizing:border-box;top:0;left:0;width:100%;height:100%;margin:0;display:flex;color:var(--theme, var(--f-theme-fader));border-color:var(--b-color);border-width:0;border-style:solid;padding:0 calc(var(--px) - .3125rem);border-radius:inherit;pointer-events:none}legend{max-width:100%;height:1px;font-size:var(--label-f-size);line-height:0;padding:0;margin:0;contain:layout paint style;-ms-user-select:none;user-select:none;visibility:hidden}::slotted(:invalid){box-shadow:none}::slotted([part=head]),::slotted([part=foot]),::slotted([part=body]),[part=icon],[part=body]{box-sizing:border-box;padding-top:var(--py);padding-bottom:var(--py);transition:opacity .2s .1s cubic-bezier(0, 0, 0.2, 1);will-change:opacity;min-height:var(--size)}::slotted([part=body]),[part=body]{z-index:1;display:flex;text-overflow:ellipsis;-ms-text-overflow:ellipsis;align-items:center;contain:style;width:100%;padding-left:var(--px);padding-right:var(--px)}::slotted([part=head]),::slotted([part=foot]),[part=icon]{display:flex;-ms-user-select:none;user-select:none;white-space:nowrap;align-items:center}::slotted([part=head]){margin-right:.3125rem;padding-left:var(--px);order:-1}:host(.outlined) ::slotted([part=head]){margin-right:-0.6875rem}::slotted([part=foot]){order:1;margin-left:.3125rem;padding-right:var(--px);font-size:var(--f-xxs);color:var(--f-fade)}:host([busy]){pointer-events:none !important}:host([busy]) ::slotted([part=body]),:host([busy]) [part=body]{visibility:hidden}:host([busy]) [part=icon]{visibility:hidden}[part=spinner]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;height:fit-content;width:fit-content}:host([disabled]){-webkit-text-fill-color:var(--f-fadest);cursor:no-drop !important;color:var(--f-fadest) !important}:host([disabled]) fieldset{border-style:dashed;border-color:var(--b-color) !important}:host([disabled]):after{display:none}[part=clear]{--button-bg-color-hover: var(--theme-fade);--button-f-color: var(--f-fadest);--button-f-size: var(--f-xxs);--button-size: 1.25rem;--icon-stroke-width: 3px;border-radius:50%}[part=clear]+[part=icon]{margin-left:.25rem}[part=foot]{display:flex;align-items:center;height:var(--size);padding-right:calc(var(--px) / 1.5)}:host([prompt][valid][dirty]),:host([prompt][valid][touched]),:host([prompt][class*=-valid][class*=-dirty]),:host([prompt][class*=-valid][class*=-touched]){--prompt-bg-color: var(--green-fader);--prompt-f-color: var(--green);--label-f-color: var(--green)}:host([prompt][invalid][dirty]),:host([prompt][invalid][touched]),:host([prompt][class*=-invalid][class*=-dirty]),:host([prompt][class*=-invalid][class*=-touched]){--prompt-bg-color: var(--red-fader) !important;--prompt-f-color: var(--f-red) !important;--label-f-color: var(--f-red) !important;--b-color: var(--red) !important}:host([prompt]:not([prompt=\"\"])[dirty]):after,:host([prompt]:not([prompt=\"\"])[touched]):after,:host([prompt]:not([prompt=\"\"])[class*=-dirty]):after,:host([prompt]:not([prompt=\"\"])[class*=-touched]):after{content:attr(prompt);position:absolute;z-index:1000;bottom:-0.1875rem;right:0;transform:translateY(100%);font-size:var(--f-xxs);font-weight:500;border-radius:.125rem;color:var(--prompt-f-color);background-color:var(--prompt-bg-color);white-space:normal;text-align:right;line-height:1.2;padding:.1875rem .375rem .125rem .375rem}:host{--f-size: var(--textarea-f-size, var(--f-sm));--b-width: var(--textarea-b-width, 1px);--b-color: var(--textarea-b-color, var(--b-fade));--py: var(--textarea-py, .90625rem);--px: var(--textarea-px, 1rem);--size: var(--textarea-size, 3rem);--label-px: var(--textarea-label-px, .25rem);--label-f-size: var(--textarea-label-f-size, var(--f-xxs));--label-f-color: var(--textarea-label-f-color, var(--f-theme-fader));flex-direction:column}::slotted([part=body]){overflow:visible;white-space:pre-wrap;min-height:var(--size)}::slotted([part=foot]){margin-left:auto;padding:.5rem .6rem;min-height:auto}:host(:not([disabled])) ::slotted([part=body]){-webkit-mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, black var(--py), black calc(100% - var(--py)), rgba(0, 0, 0, 0) 100%)}", ""]);
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
  "Uf": () => /* reexport */ ClickableElement,
  "w5": () => /* reexport */ ControlElement,
  "W_": () => /* reexport */ Element,
  "ju": () => /* reexport */ element_event/* Event */.j,
  "fI": () => /* reexport */ Prop,
  "Qu": () => /* reexport */ TargetElement,
  "kh": () => /* reexport */ attrEnabled
});

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

/***/ 8320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export BadgeElement */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9312);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5109);
/* harmony import */ var _badge_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1247);



const NAME = 'badge';
let BadgeElement = class BadgeElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.template = window['Master'](() => [
            'slot'
        ]);
    }
    render() {
        this.template.render(this.shadowRoot);
    }
};
BadgeElement = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_)({
        tag: 'm-' + NAME,
        css: _badge_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z
    })
], BadgeElement);



/***/ }),

/***/ 9445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export BreadcrumbElement */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9312);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5109);
/* harmony import */ var _breadcrumb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2345);



const NAME = 'breadcrumb';
let BreadcrumbElement = class BreadcrumbElement extends _element__WEBPACK_IMPORTED_MODULE_0__/* .ClickableElement */ .Uf {
    constructor() {
        super(...arguments);
        this.slotTemplate = [
            'slot', { name: 'head' },
            'slot', { part: 'body' }
        ];
    }
};
BreadcrumbElement = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_)({
        tag: 'm-' + NAME,
        css: _breadcrumb_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z
    })
], BreadcrumbElement);



/***/ }),

/***/ 7728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export CardElement */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9312);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5109);
/* harmony import */ var _card_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6415);



const NAME = 'card';
let CardElement = class CardElement extends _element__WEBPACK_IMPORTED_MODULE_0__/* .ClickableElement */ .Uf {
};
CardElement = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_)({
        tag: 'm-' + NAME,
        css: _card_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z
    })
], CardElement);



/***/ }),

/***/ 4591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export ChipElement */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9312);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5109);
/* harmony import */ var _chip_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1815);



const NAME = 'chip';
let ChipElement = class ChipElement extends _element__WEBPACK_IMPORTED_MODULE_0__/* .ClickableElement */ .Uf {
};
ChipElement = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_)({
        tag: 'm-' + NAME,
        css: _chip_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z
    })
], ChipElement);



/***/ }),

/***/ 1546:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: ContentElement

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

/***/ 6828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export DialogElement */
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

/***/ 8668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export FooterElement */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9312);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5109);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2330);



const NAME = 'footer';
let FooterElement = class FooterElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.template = window['Master'](() => [
            'div', { part: 'root' }, [
                'slot', { name: 'start' },
                'slot',
                'slot', { name: 'end' }
            ]
        ]);
    }
    render() {
        this.template.render(this.shadowRoot);
    }
};
FooterElement = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_)({
        tag: 'm-' + NAME,
        css: _footer_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z
    })
], FooterElement);



/***/ }),

/***/ 7007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export HeaderElement */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9312);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5109);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1159);



const NAME = 'header';
let HeaderElement = class HeaderElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.template = window['Master'](() => [
            'div', { part: 'root' }, [
                'slot', { name: 'start' },
                'slot',
                'slot', { name: 'end' }
            ]
        ]);
    }
    render() {
        this.template.render(this.shadowRoot);
    }
};
HeaderElement = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_)({
        tag: 'm-' + NAME,
        css: _header_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z
    })
], HeaderElement);



/***/ }),

/***/ 2540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupElement": () => /* reexport safe */ _popup__WEBPACK_IMPORTED_MODULE_0__.PopupElement
/* harmony export */ });
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4910);
/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9809);
/* harmony import */ var _chip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4591);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7728);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2351);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5523);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1546);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1637);
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(765);
/* harmony import */ var _breadcrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9445);
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6828);
/* harmony import */ var _badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8320);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7007);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8668);
















/***/ }),

/***/ 5523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export ItemElement */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9312);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5109);
/* harmony import */ var _item_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3897);



const NAME = 'item';
let ItemElement = class ItemElement extends _element__WEBPACK_IMPORTED_MODULE_0__/* .ClickableElement */ .Uf {
    constructor() {
        super(...arguments);
        this.slotTemplate = [
            'slot', { name: 'head' },
            'div', { part: 'lower' }, [
                'slot', { part: 'body' },
                'slot', { name: 'foot' },
                'slot', { name: 'img' }
            ]
        ];
    }
};
ItemElement = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_)({
        tag: 'm-' + NAME,
        css: _item_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z
    })
], ItemElement);



/***/ }),

/***/ 2351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export ListElement */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9312);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5109);
/* harmony import */ var _list_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6487);



const NAME = 'list';
let ListElement = class ListElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.template = window['Master'](() => [
            'slot'
        ]);
    }
    render() {
        this.template.render(this.shadowRoot);
    }
};
ListElement = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_)({
        tag: 'm-' + NAME,
        css: _list_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z
    })
], ListElement);



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

/***/ 765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export SkeletonOverlay */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9312);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5109);
/* harmony import */ var _overlay_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1028);



const NAME = 'overlay';
let SkeletonOverlay = class SkeletonOverlay extends HTMLElement {
    constructor() {
        super(...arguments);
        this.template = window['Master'](() => ['slot']);
    }
    render() {
        this.template.render(this.shadowRoot);
    }
};
SkeletonOverlay = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_)({
        tag: 'm-' + NAME,
        css: _overlay_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z
    })
], SkeletonOverlay);



/***/ }),

/***/ 4910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PopupElement": () => /* binding */ PopupElement
});

// EXTERNAL MODULE: ../node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(9312);
// EXTERNAL MODULE: ../src/app/element/index.ts + 8 modules
var app_element = __webpack_require__(5109);
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
/*:: import type { Window } from '../types'; */

/*:: declare function getWindow(node: Node | Window): Window; */
function getWindow(node) {
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js

/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
  Element); */

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
  HTMLElement); */


function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
/*:: declare function isShadowRoot(node: mixed): boolean %checks(node instanceof
  ShadowRoot); */


function isShadowRoot(node) {
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}


// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js




function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js

function getDocumentElement(element) {
  // $FlowFixMe: assume body is always available
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js






 // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js


function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// $FlowFixMe: this is a quicker (but less type safe) way to save quite some bytes from the bundle
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    // $FlowFixMe: need a better way to handle this...
    element.host || // ShadowRoot detected
    // $FlowFixMe: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js





/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the 
reference element's position.
*/

function listScrollParents(element, list) {
  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = getNodeName(scrollParent) === 'body';
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js








function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  var offsetParent = element.offsetParent;

  if (offsetParent) {
    var html = getDocumentElement(offsetParent);

    if (getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && getComputedStyle(html).position !== 'static') {
      return html;
    }
  }

  return offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.

    if (css.transform !== 'none' || css.perspective !== 'none' || css.willChange && css.willChange !== 'auto') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static') {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/enums.js
var enums_top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [enums_top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var enums_placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/utils/orderModifiers.js
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign(Object.assign(Object.assign({}, existing), current), {}, {
      options: Object.assign(Object.assign({}, existing.options), current.options),
      data: Object.assign(Object.assign({}, existing.data), current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/createPopper.js














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (false) { var _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, flipModifier, modifiers; }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (false) {}

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (false) {}

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (false) {}

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/(/* unused pure expression or super */ null && (popperGenerator())); // eslint-disable-next-line import/no-unused-modules


// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/modifiers/eventListeners.js
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const eventListeners = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/utils/getBasePlacement.js

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split('-')[1];
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/utils/computeOffsets.js




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case enums_top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_popperOffsets = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/modifiers/computeStyles.js





 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsets(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive;

  var _roundOffsets = roundOffsets(offsets),
      x = _roundOffsets.x,
      y = _roundOffsets.y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = enums_top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
    } // $FlowFixMe: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    /*:: offsetParent = (offsetParent: Element); */


    if (placement === enums_top) {
      sideY = bottom;
      y -= offsetParent.clientHeight - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right;
      x -= offsetParent.clientWidth - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref3) {
  var state = _ref3.state,
      options = _ref3.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive;

  if (false) { var transitionProperty; }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false
    })));
  }

  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_computeStyles = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/modifiers/applyStyles.js

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function applyStyles_effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_applyStyles = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: applyStyles_effect,
  requires: ['computeStyles']
});
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/modifiers/offset.js


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, enums_top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign(Object.assign({}, rects), {}, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = enums_placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_offset = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var getOppositeVariationPlacement_hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return getOppositeVariationPlacement_hash[matched];
  });
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js



function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js



 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = element.ownerDocument.body;
  var width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/contains.js

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign(Object.assign({}, rect), {}, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js














function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = Math.max(rect.top, accRect.top);
    accRect.right = Math.min(rect.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js

function mergePaddingObject(paddingObject) {
  return Object.assign(Object.assign({}, getFreshSideObject()), paddingObject);
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/utils/detectOverflow.js








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign(Object.assign({}, popperRect), popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [enums_top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js





/*:: type OverflowsMap = { [ComputedPlacement]: number }; */

/*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements; // $FlowFixMe

  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (false) {}
  } // $FlowFixMe: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/modifiers/flip.js






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [enums_top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_flip = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/utils/within.js
function within(min, value, max) {
  return Math.max(min, Math.min(value, max));
}
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js











function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign(Object.assign({}, state.rects), {}, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var mainSide = mainAxis === 'y' ? enums_top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _mainSide = mainAxis === 'x' ? enums_top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var _preventedOffset = within(_min, _offset, _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_preventOverflow = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/modifiers/arrow.js









 // eslint-disable-next-line import/no-unused-modules

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = state.modifiersData[name + "#persistent"].padding;
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? enums_top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function arrow_effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
      _options$padding = options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (false) {}

  if (!contains(state.elements.popper, arrowElement)) {
    if (false) {}

    return;
  }

  state.elements.arrow = arrowElement;
  state.modifiersData[name + "#persistent"] = {
    padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements))
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_arrow = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: arrow_effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/modifiers/hide.js



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [enums_top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_hide = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});
// CONCATENATED MODULE: ../src/app/ui/node_modules/@popperjs/core/lib/popper.js










var defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide];
var popper_createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules


// CONCATENATED MODULE: ../src/app/utils/is-interact-outside.ts
function isInteractOutside(target, event, senseEdge = 0) {
    const x = event.clientX;
    const y = event.clientY;
    const rect = target.getBoundingClientRect();
    return rect.top > y + senseEdge ||
        rect.top + rect.height < y - senseEdge ||
        rect.left > x + senseEdge ||
        rect.left + rect.width < x - senseEdge;
}

// EXTERNAL MODULE: ../src/app/ui/components/popup/popup.scss
var popup = __webpack_require__(1607);
// CONCATENATED MODULE: ../src/app/ui/components/popup/index.ts
var _resizeObserver;





const NAME = 'popup';
let PopupElement = class PopupElement extends app_element/* TargetElement */.Qu {
    constructor() {
        super(...arguments);
        /**
         * default
         */
        this._fade = true;
        this._duration = 300;
        _resizeObserver.set(this, void 0);
        this.offset = 0;
        this.distance = 8;
        this.boundaryPadding = 10;
        this.placement = 'bottom';
        this.closeOn = 'click:outside';
        this.activeChildPopups = new Set;
        // arrow: SVGElement;
        this.contentTokens = () => [];
        this.template = window['Master'](() => [
            'm-content',
            {
                'scroll-y': true,
                guide: true,
                part: 'content',
                $created: (element) => this.content = element
            }, [
                'slot',
                {
                    $created: (element) => element.on('slotchange', (event) => {
                        const onSlotChange = this['onSlotChange'];
                        if (onSlotChange) {
                            onSlotChange.call(this, event);
                        }
                    })
                },
                ...this.contentTokens(),
            ]
        ]);
        this.determineClose = (event) => {
            if (this.animation || this.activeChildPopups.size) {
                return;
            }
            if (isInteractOutside(this.trigger, event) &&
                isInteractOutside(this.content, event, this.distance)) {
                this.close();
            }
        };
    }
    handleTrigger(event, whether) {
        if (!whether) {
            if (!isInteractOutside(this.trigger, event) ||
                !isInteractOutside(this.content, event, this.distance)) {
                return false;
            }
        }
    }
    updateSize() {
        const refRect = this.trigger.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const bottomDistance = windowHeight - (refRect.y + refRect.height);
        const topDistance = refRect.y;
        this.css('maxHeight', (topDistance < bottomDistance ? bottomDistance : topDistance) - this.distance - 10);
        if (this.minWidth === 'trigger') {
            this.css('minWidth', refRect.width);
        }
    }
    onOpen() {
        return (0,tslib_es6/* __awaiter */.mG)(this, void 0, void 0, function* () {
            const activate = (parent) => {
                if (!parent) {
                    return;
                }
                if (parent.tagName === 'M-POPUP') {
                    parent.activeChildPopups.add(this);
                }
                else if (parent !== document.body) {
                    activate(parent.parentNode);
                }
            };
            activate(this.trigger.parentNode);
            this.updateSize();
            if (!this.popper) {
                yield new Promise((resolve) => {
                    this.popper = popper_createPopper(this.trigger, this, {
                        placement: this.placement,
                        modifiers: [
                            // {
                            //     name: 'arrow',
                            //     options: {
                            //         element: this.arrow,
                            //     },
                            // },
                            {
                                name: 'offset',
                                options: {
                                    offset: [this.offset, this.distance],
                                },
                            },
                            {
                                name: 'flip',
                                options: {
                                    flipVariations: false,
                                },
                            },
                            {
                                name: 'preventOverflow',
                                options: {
                                    padding: this.boundaryPadding,
                                }
                            }
                        ],
                        onFirstUpdate: resolve
                    });
                });
            }
        });
    }
    onOpened() {
        if (this.popper) {
            if (this.closeOn && this.closeOn.indexOf('mouseout') !== -1) {
                document.body
                    .on('mousemove', this.determineClose, { passive: true });
            }
            if (this.closeOn && this.closeOn.indexOf('click:outside') !== -1) {
                document.body
                    .on('click', this.determineClose, { passive: true });
            }
            if (!(0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _resizeObserver)) {
                (0,tslib_es6/* __classPrivateFieldSet */.YH)(this, _resizeObserver, new ResizeObserver(() => {
                    this.updateSize();
                    this.popper.update();
                }));
                (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _resizeObserver).observe(this.content);
                (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _resizeObserver).observe(this.trigger);
            }
        }
    }
    onClose() {
        const deactivate = (parent) => {
            if (!parent) {
                return;
            }
            if (parent.tagName === 'M-POPUP') {
                parent.activeChildPopups.delete(this);
            }
            else if (parent !== document.body) {
                deactivate(parent.parentNode);
            }
        };
        deactivate(this.trigger.parentNode);
        if ((0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _resizeObserver)) {
            (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _resizeObserver).unobserve(this.content);
            (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _resizeObserver).unobserve(this.trigger);
            (0,tslib_es6/* __classPrivateFieldSet */.YH)(this, _resizeObserver, null);
        }
    }
    onClosed() {
        if (this.popper) {
            this.popper = this.popper.destroy();
            document.body.off(this.determineClose);
        }
    }
    toggling(options) {
        let keyframes;
        let scale = '';
        let translate = '';
        let transformOrigin = '';
        switch (this.popper.state.placement.split('-')[0]) {
            case 'top':
                scale = 'Y(.9)';
                transformOrigin = 'center bottom';
                break;
            case 'bottom':
                scale = 'Y(.9)';
                transformOrigin = 'top center';
                break;
            case 'left':
                scale = 'X(.9)';
                transformOrigin = 'right center';
                break;
            case 'right':
                scale = 'X(.9)';
                transformOrigin = 'left center';
                break;
        }
        keyframes = [
            {
                transformOrigin,
                transform: 'scale' + scale,
                opacity: this.fade ? 0 : 1
            },
            {
                transformOrigin,
                transform: 'scaleY(1)',
                opacity: 1
            }
        ];
        if (this.hidden) {
            keyframes.reverse();
        }
        this.animation = this.content.animate(keyframes, options);
        this.animations.push(this.animation);
        return new Promise((finish) => {
            this.animation.onfinish = finish;
        });
    }
    render() {
        this.template.render(this.shadowRoot);
    }
};
_resizeObserver = new WeakMap();
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({ reflect: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Object)
], PopupElement.prototype, "offset", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({ reflect: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Object)
], PopupElement.prototype, "distance", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({ reflect: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Object)
], PopupElement.prototype, "boundaryPadding", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({ reflect: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], PopupElement.prototype, "placement", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({ reflect: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Object)
], PopupElement.prototype, "closeOn", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({ reflect: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], PopupElement.prototype, "minWidth", void 0);
PopupElement = (0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Element */.W_)({
        tag: 'm-' + NAME,
        css: popup/* default */.Z
    })
], PopupElement);



/***/ }),

/***/ 9809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export SkeletonElement */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9312);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5109);
/* harmony import */ var _skeleton_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8294);



const NAME = 'skeleton';
let SkeletonElement = class SkeletonElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.template = window['Master'](() => {
            this.css('width', this.width);
            return [
                'div', {
                    part: 'bg', $css: {
                        height: this.height
                    }
                }
            ];
        });
    }
    render() {
        this.template.render(this.shadowRoot);
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Number)
], SkeletonElement.prototype, "width", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Number)
], SkeletonElement.prototype, "height", void 0);
SkeletonElement = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_)({
        tag: 'm-' + NAME,
        css: _skeleton_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z
    })
], SkeletonElement);



/***/ }),

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export ButtonElement */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9312);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5109);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(868);



const NAME = 'button';
let ButtonElement = class ButtonElement extends _element__WEBPACK_IMPORTED_MODULE_0__/* .ClickableElement */ .Uf {
    constructor() {
        super(...arguments);
        this._type = 'button';
    }
};
ButtonElement = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_)({
        tag: 'm-' + NAME,
        css: _button_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z
    })
], ButtonElement);



/***/ }),

/***/ 449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export CheckElement */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9312);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5109);
/* harmony import */ var _check_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(699);



const connectedChecks = new Set();
const nameMap = {};
const NAME = 'check';
let CheckElement = class CheckElement extends _element__WEBPACK_IMPORTED_MODULE_0__/* .ControlElement */ .w5 {
    constructor() {
        super(...arguments);
        this.controlTemplate = window['Master'](() => [
            'input',
            {
                part: 'body',
                type: this.type,
                name: this.name,
                disabled: this.disabled,
                required: this.required,
                $created: (element) => {
                    this.body = element;
                    this.validity = element.validity;
                }
            }
        ]);
        this.template = window['Master'](() => [
            'svg', {
                part: this.interface,
                viewBox: '0 0 20 20',
                $namespace: 'http://www.w3.org/2000/svg',
                $html: this.interface === 'switch'
                    ? '<rect x=2 y=2 rx=8 width=16 height=16 part="button-icon"/><filter id="s" x="0" y="0" filterUnits="userSpaceOnUse"><feOffset dy="2" input="SourceAlpha"/><feGaussianBlur stdDeviation="1 1" result="b"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter>'
                    : '<path part="check-icon" d="M5.5 10l2 2 1 1 6 -6"/><path part="ban-icon" d="M19 19L1 1h0"/>'
            },
            'slot'
        ]);
        this.interface = 'check';
        this.type = 'checkbox';
        this.checked = false;
    }
    onConnected() {
        this.validate();
        this.body
            .on('input', (event) => {
            this.checked = event.target.checked;
        }, { id: [NAME], passive: true });
        connectedChecks.add(this);
    }
    onDisconnected() {
        connectedChecks.delete(this);
        this.off({ id: [NAME] });
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({ observe: false, render: false }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", String)
], CheckElement.prototype, "role", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({
        update(check, value, oldValue) {
            if (value) {
                let checks = nameMap[value];
                if (!checks)
                    checks = nameMap[value] = [];
                checks.push(check);
            }
            if (oldValue) {
                let oldChecks = nameMap[oldValue] || [];
                if (!oldChecks)
                    oldChecks = nameMap[oldValue] = [];
                oldChecks.splice(oldChecks.indexOf(check), 1);
            }
        }
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", String)
], CheckElement.prototype, "name", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({
        update(check, value) {
            const parent = check.parentElement;
            if (parent.tagName === 'M-ITEM') {
                parent.disabled = value;
            }
        }
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Boolean)
], CheckElement.prototype, "disabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Boolean)
], CheckElement.prototype, "required", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", String)
], CheckElement.prototype, "promptValid", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", String)
], CheckElement.prototype, "promptInvalid", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", String)
], CheckElement.prototype, "promptWarning", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", String)
], CheckElement.prototype, "autocomplete", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", String)
], CheckElement.prototype, "interface", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({
        update(check, value, oldValue) {
            check.role = value;
        }
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", String)
], CheckElement.prototype, "type", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({
        update(check, value, oldValue) {
            check.body.checked = value;
            check.toggleAttribute('aria-checked', !!value);
            if (check.type === 'radio' && check.name && value) {
                nameMap[check.name]
                    .forEach((eachCheck) => {
                    if (eachCheck !== check && eachCheck.type === 'radio') {
                        eachCheck.checked = false;
                    }
                });
            }
            check.validate();
        }
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Boolean)
], CheckElement.prototype, "checked", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({
        reflect: false,
        render: false,
        update(check, value, oldValue) {
            if (value === oldValue)
                return;
            check.body.value = value !== null && value !== void 0 ? value : null;
        }
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Object)
], CheckElement.prototype, "value", void 0);
CheckElement = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_)({
        tag: 'm-' + NAME,
        css: _check_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z
    })
], CheckElement);



/***/ }),

/***/ 4115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(449);
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(116);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(993);
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9579);
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3274);








/***/ }),

/***/ 993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export InputElement */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9312);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5109);
/* harmony import */ var _input_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3131);
var _files;



const NAME = 'input';
const changeEvent = new window.Event('change', { 'bubbles': true, 'cancelable': false });
let InputElement = class InputElement extends _element__WEBPACK_IMPORTED_MODULE_0__/* .ControlElement */ .w5 {
    constructor() {
        super(...arguments);
        this.controlTemplate = window['Master'](() => [
            'input',
            {
                part: 'body',
                type: this.type,
                name: this.name,
                placeholder: this.placeholder,
                disabled: this.disabled,
                required: this.required,
                multiple: this.multiple,
                accept: this.accept,
                readonly: this.readOnly,
                pattern: this.pattern,
                autocomplete: this.autocomplete,
                autofocus: this.autofocus,
                $created: (element) => {
                    this.body = element;
                    this.validity = element.validity;
                }
            }
        ]);
        this.template = window['Master'](() => {
            var _a, _b;
            return [
                'slot',
                'div',
                {
                    $if: this.type === 'file',
                    part: 'body',
                    placeholder: this.placeholder,
                    label: ((_a = this.label) === null || _a === void 0 ? void 0 : _a.length) > ((_b = this.placeholder) === null || _b === void 0 ? void 0 : _b.length)
                        ? this.label
                        : this.placeholder,
                }, () => this.files.map((eachFile) => {
                    const eachFileNameSplits = eachFile.name.split('.');
                    const ext = eachFileNameSplits.pop();
                    const src = URL.createObjectURL(eachFile);
                    return [
                        'div', {
                            part: 'output'
                        }, [
                            'img', {
                                $if: this.interface === 'image',
                                part: 'image',
                                src,
                                $removed: () => URL.revokeObjectURL(src)
                            },
                            'm-chip', {
                                class: 'sm'
                            }, [
                                'div', {
                                    part: 'head',
                                    $text: ext
                                },
                                'span', {
                                    part: 'filename',
                                    $text: eachFileNameSplits.join()
                                },
                                'div', {
                                    part: 'foot',
                                    $text: (eachFile.size / 1024).toFixed(0) + 'KB'
                                },
                                'm-button', {
                                    $if: !this.readOnly && !this.disabled,
                                    part: 'close',
                                    $on: {
                                        click: (event) => {
                                            event.stopPropagation();
                                            this.value.splice(this.value.indexOf(eachFile), 1);
                                            this.render();
                                        }
                                    }
                                }, [
                                    'm-icon', { name: 'cross' }
                                ]
                            ]
                        ]
                    ];
                }),
                'fieldset', [
                    'legend', [
                        'span', { part: 'label', $text: this.label }
                    ]
                ],
                'label', { $text: this.label },
                'div', {
                    $if: this.busy
                        || this.clearable && !this.readOnly && !this.disabled && !this.empty,
                    part: 'foot'
                }, [
                    'm-icon', {
                        $if: this.busy,
                        name: 'spinner',
                        part: 'spinner'
                    },
                    'm-button', {
                        $if: this.clearable && !this.readOnly && !this.disabled && !this.empty,
                        class: 'round',
                        name: 'cross',
                        part: 'clear',
                        $on: {
                            click: () => {
                                this.value = null;
                            }
                        }
                    }, [
                        'm-icon', {
                            name: 'cross'
                        }
                    ]
                ],
            ];
        });
        _files.set(this, []);
        this.files = [];
        this.role = 'textbox';
        this.dragging = false;
        this.clearable = false;
    }
    addFiles(fileList) {
        if (!fileList.length)
            return;
        const files = Array.from(fileList);
        this.value
            = this.files
                = this.multiple ? this.files.concat(files) : files;
    }
    onConnected() {
        this.validate();
        this
            .on('click', (event) => {
            if (event.target === this.body)
                return;
            this.body.focus();
        }, {
            id: [NAME],
            passive: true
        });
        this.body
            .on('input', (event) => {
            if (this.type === 'file') {
                this.addFiles(this.body.files);
            }
            else {
                this.value = event.target.value;
            }
            if (!this.dirty) {
                this.dirty = true;
            }
        }, { id: [NAME], passive: true })
            .on('focusout', () => {
            this.touched = true;
        }, { id: [NAME], passive: true, once: true });
    }
    onDisconnected() {
        this.off({ id: [NAME] });
    }
};
_files = new WeakMap();
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({ observe: false }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Boolean)
], InputElement.prototype, "empty", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({ observe: false, render: false }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", String)
], InputElement.prototype, "role", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({ key: 'readonly' }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Boolean)
], InputElement.prototype, "readOnly", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", String)
], InputElement.prototype, "interface", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", String)
], InputElement.prototype, "accept", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", String)
], InputElement.prototype, "placeholder", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", String)
], InputElement.prototype, "label", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({ observe: false, render: false }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Boolean)
], InputElement.prototype, "dragging", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({
        update(input, value, oldValue) {
            if (value === 'file') {
                input
                    .on('click', (event) => {
                    input.body.focus();
                    input.body.click();
                }, { id: [NAME] + '.file', passive: true });
                // 拖拉檔案 accept 格式檢查待解決
                // .on('dragenter', (event) => {
                //     event.preventDefault();
                //     event.stopPropagation();
                //     input.dragging = true;
                // }, { id: [NAME] + '.file' })
                // .on('dragover', (event) => {
                //     event.preventDefault();
                //     event.stopPropagation();
                // }, { id: [NAME] + '.file' })
                // .on('dragleave dragend', (event) => {
                //     event.preventDefault();
                //     input.dragging = false;
                // }, { id: [NAME] + '.file' })
                // .on('drop', (event: any) => {
                //     input.dragging = false;
                //     event.preventDefault();
                //     if (input.body.files.length) {
                //         input.addFiles(input.body.files);
                //         input.body.dispatchEvent(changeEvent);
                //     }
                // }, { id: [NAME] + '.file' });
            }
            if (oldValue === 'file') {
                input.off({ id: [NAME] + '.file' });
            }
        }
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", String)
], InputElement.prototype, "type", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({ render: false }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Boolean)
], InputElement.prototype, "expanded", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({
        parse(input, value) {
            if (input.type === 'number') {
                if (value === '') {
                    value = null;
                }
                else {
                    value = isNaN(+value) ? 0 : +value;
                }
            }
            return value;
        },
        update(input, value) {
            if (input.type === 'file') {
                input.empty = !(value === null || value === void 0 ? void 0 : value.length) || !value;
                input.render();
            }
            else {
                input.empty = value === null || value === undefined || value === '';
                input.body.value = value !== null && value !== void 0 ? value : null;
                input.validate();
            }
        },
        render: false,
        reflect: false
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Object)
], InputElement.prototype, "value", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Boolean)
], InputElement.prototype, "multiple", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", String)
], InputElement.prototype, "autocomplete", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Number)
], InputElement.prototype, "max", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Number)
], InputElement.prototype, "min", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Number)
], InputElement.prototype, "maxLength", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Number)
], InputElement.prototype, "minLength", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", String)
], InputElement.prototype, "pattern", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Number)
], InputElement.prototype, "size", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Number)
], InputElement.prototype, "step", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Boolean)
], InputElement.prototype, "clearable", void 0);
InputElement = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_)({
        tag: 'm-' + NAME,
        css: _input_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z
    })
], InputElement);



/***/ }),

/***/ 116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export OptionElement */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9312);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5109);
/* harmony import */ var _option_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);



const NAME = 'option';
const updateSelected = (option, selected) => {
    const select = option.parentElement;
    if (select.updating) {
        return;
    }
    ;
    // updating 防止循環更新
    select.updating = true;
    if (!select.multiple && selected) {
        select.options.forEach((eachOption) => {
            if (option !== eachOption) {
                eachOption.selected = false;
            }
        });
    }
    select.composeValue();
    select.updating = false;
};
let OptionElement = class OptionElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.empty = false;
    }
    onConnected() {
        this.select = this.parentElement;
        updateSelected(this, this.selected);
    }
    onDisconnected() { }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Boolean)
], OptionElement.prototype, "disabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({
        update(option, value) {
            const select = option.parentElement;
            if (option['ready'] && !select.updating) {
                updateSelected(option, value);
            }
        },
        reflect: false
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Boolean)
], OptionElement.prototype, "selected", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({
        update(option, value) {
            if (option['ready']) {
                const select = option.parentElement;
                select.composeValue();
            }
            option.empty = value === null || value === undefined || value === '';
        },
        reflect: false
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Object)
], OptionElement.prototype, "value", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({ observe: false, render: false }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Boolean)
], OptionElement.prototype, "empty", void 0);
OptionElement = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_)({
        tag: 'm-' + NAME,
        css: _option_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z
    })
], OptionElement);



/***/ }),

/***/ 3274:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: SelectElement

// EXTERNAL MODULE: ../node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(9312);
// EXTERNAL MODULE: ../src/app/element/index.ts + 8 modules
var app_element = __webpack_require__(5109);
// EXTERNAL MODULE: ../src/app/ui/form/select/select.scss
var select_select = __webpack_require__(924);
// EXTERNAL MODULE: ../src/app/ui/form/select/select-popup.scss
var select_popup = __webpack_require__(7283);
// EXTERNAL MODULE: ../src/app/ui/components/index.ts
var components = __webpack_require__(2540);
// CONCATENATED MODULE: ../src/app/ui/form/select/select-popup.ts
var _foundCount, _keyword, _matchKeyword;




const NAME = 'select-popup';
let SelectPopupElement = class SelectPopupElement extends components.PopupElement {
    constructor() {
        super(...arguments);
        this._duration = 300;
        this._triggerEvent = null;
        this._placement = 'bottom-start';
        this.items = [];
        this.multiple = false;
        this.contentTokens = () => [
            'div',
            {
                $if: (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _keyword) && (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _foundCount) === 0 && !this.select.addable,
                part: 'search-info',
                $text: 'Not Found'
            },
            'm-item',
            {
                class: 'xs',
                type: 'button',
                style: '--f-size: var(--f-sm); --py: 0.375rem;',
                $if: (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _keyword) && !(0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _matchKeyword) && this.select.addable,
                $text: (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _keyword),
                $on: {
                    click: () => {
                        this.select.addEmitter({
                            value: (0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _keyword)
                        });
                    }
                }
            },
            [
                'm-icon', {
                    style: 'color: var(--f-fade)',
                    name: 'add',
                    slot: 'head'
                }
            ]
        ];
        this.lightTemplate = window['Master'](() => [
            ...[].concat(...Array.from(this.select.options)
                .map((eachOption) => [
                'm-item',
                {
                    class: 'xs',
                    type: 'button',
                    style: '--f-size: var(--f-sm); --py: 0.375rem;',
                    empty: eachOption.empty,
                    selected: eachOption.selected,
                    $data: eachOption,
                    $html: eachOption.innerHTML,
                    $created: (item) => {
                        this.items.push(item);
                    },
                    $removed: (item) => {
                        this.items.splice(this.items.indexOf(item), 1);
                    }
                }, [
                    'm-check',
                    {
                        slot: 'foot',
                        name: '!option' + this.select.uid,
                        class: 'sm',
                        style: 'margin-left: 1rem',
                        checked: eachOption.selected,
                        $data: eachOption,
                        type: this.multiple ? 'checkbox' : 'radio',
                        $created: (check, node) => {
                            check
                                .on('change', () => {
                                if (this.multiple) {
                                    node.$data.selected = check.checked;
                                    if (this.select.search)
                                        this.select.search.focus();
                                    this.render();
                                }
                                else {
                                    node.$data.selected = check.checked;
                                    this.close();
                                }
                                this.select.changeEmitter(this.select.value);
                                if (!this.select.dirty) {
                                    this.select.dirty = true;
                                }
                            }, { passive: true })
                                .on('click', () => {
                                if (!this.multiple && check.checked) {
                                    this.close();
                                }
                            }, { passive: true });
                        }
                    }
                ]
            ]))
        ]);
        _foundCount.set(this, 0);
        _keyword.set(this, void 0);
        _matchKeyword.set(this, false);
    }
    search(keyword) {
        (0,tslib_es6/* __classPrivateFieldSet */.YH)(this, _keyword, keyword = keyword.trim());
        (0,tslib_es6/* __classPrivateFieldSet */.YH)(this, _foundCount, 0);
        (0,tslib_es6/* __classPrivateFieldSet */.YH)(this, _matchKeyword, false);
        this.toggleAttribute('searching', !!keyword);
        if (keyword) {
            this.items.forEach((eachItem) => {
                const text = eachItem === null || eachItem === void 0 ? void 0 : eachItem.childNodes.filter((eachElement) => !eachElement.slot).map((eachElement) => eachElement.textContent).join(' ').trim();
                const found = text.indexOf(keyword) !== -1;
                if (found)
                    (0,tslib_es6/* __classPrivateFieldSet */.YH)(this, _foundCount, +(0,tslib_es6/* __classPrivateFieldGet */.Q_)(this, _foundCount) + 1);
                if (text === keyword) {
                    (0,tslib_es6/* __classPrivateFieldSet */.YH)(this, _matchKeyword, true);
                }
                eachItem
                    .toggleAttribute('found', found);
            });
        }
        this.render();
    }
    onSlotChange() {
        this.lightTemplate.render(this);
    }
    onOpen() {
        const _super = Object.create(null, {
            onOpen: { get: () => super.onOpen }
        });
        return (0,tslib_es6/* __awaiter */.mG)(this, void 0, void 0, function* () {
            _super.onOpen.call(this);
            this.content.renderScroll();
            if (this.select.search) {
                // this.select.search.readOnly = false;
                this.select.search.focus();
            }
        });
    }
    onClose() {
        super.onClose();
        if (this.select.search) {
            this.select.search.textContent = this.select.keyword = '';
        }
        this.select.focused = false;
        this.select.output();
    }
    onClosed() {
        super.onClosed();
        // if (this.select.search) {
        //     this.select.search.readOnly = true;
        // }
        (0,tslib_es6/* __classPrivateFieldSet */.YH)(this, _foundCount, 0);
        (0,tslib_es6/* __classPrivateFieldSet */.YH)(this, _keyword, '');
        this.toggleAttribute('searching', false);
        this.remove();
        this.select.popup = null;
    }
    render() {
        super.render();
        this.lightTemplate.render(this);
    }
    removeRender() {
        this.lightTemplate.remove();
    }
};
_foundCount = new WeakMap(), _keyword = new WeakMap(), _matchKeyword = new WeakMap();
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], SelectPopupElement.prototype, "multiple", void 0);
SelectPopupElement = (0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Element */.W_)({
        tag: 'm-' + NAME,
        css: select_popup/* default */.Z
    })
], SelectPopupElement);


// CONCATENATED MODULE: ../src/app/ui/form/select/index.ts




let uid = 0;
const select_NAME = 'select';
let SelectElement = class SelectElement extends app_element/* ControlElement */.w5 {
    constructor() {
        super(...arguments);
        this.controlTemplate = window['Master'](() => [
            'input',
            {
                part: 'output',
                $created: (element) => {
                    this.body = element;
                    this.validity = element.validity;
                }
            }
        ]);
        this.template = window['Master'](() => [
            'slot',
            {
                $created: (slot) => slot.on('slotchange', () => {
                    this.options = new Set(this.children
                        .filter((eachChild) => eachChild.tagName === 'M-OPTION'));
                    this.selectOptionByValue(this.value);
                    if (this.popup) {
                        this.popup.render();
                    }
                }, { passive: true })
            },
            'div',
            {
                part: 'root',
                $created: (element) => this.root = element
            }, [
                'div', {
                    part: 'body'
                },
                [
                    'span',
                    {
                        $if: this.multiple && this.searchable && !this.readOnly || !this.multiple,
                        part: 'search',
                        contenteditable: !this.readOnly && this.searchable && !this.disabled,
                        spellcheck: 'false',
                        disabled: this.disabled,
                        placeholder: this.placeholder,
                        $text: this.keyword,
                        $created: (element) => {
                            this.search = element
                                .on('input', () => {
                                if (this.searchable)
                                    this.popup.search(this.search.textContent);
                            }, { passive: true, id: [select_NAME] });
                        },
                        $removed: () => this.search = null
                    }
                ], () => this.selectedOptions
                    .map((eachOption) => [
                    'm-chip', {
                        $if: this.multiple,
                        class: 'sm',
                        $html: eachOption.innerHTML
                            .replace('slot', 'part')
                    }, [
                        'm-button', {
                            $if: !this.readOnly && !this.disabled,
                            part: 'close',
                            $on: {
                                click: (event) => {
                                    event.stopPropagation();
                                    eachOption.selected = false;
                                    this.popup.render();
                                }
                            }
                        }, [
                            'm-icon', { name: 'cross' }
                        ]
                    ]
                ]),
                'fieldset', [
                    'legend', [
                        'span', { part: 'label', $text: this.label }
                    ]
                ],
                'label', { $text: this.label },
                'div', { part: 'foot' }, [
                    'm-icon', {
                        $if: this.busy,
                        name: 'spinner',
                        part: 'spinner'
                    },
                    'm-icon', {
                        $if: !this.readOnly,
                        name: this.multiple ? 'caret' : 'unfold',
                        part: 'icon'
                    },
                ],
            ]
        ]);
        this.tabIndex = 0;
        this.focused = false;
        this.mutationObserver = new MutationObserver((mutations) => {
            let textChanged = false;
            mutations.forEach((eachMutationRecord) => {
                if (eachMutationRecord.type === 'characterData') {
                    textChanged = true;
                }
            });
            if (textChanged) {
                this.render();
                this.output();
                if (this.popup) {
                    this.popup.render();
                }
            }
        });
        this.options = new Set();
        this.role = 'listbox';
        this.readOnly = false;
        this.disabled = false;
        this.multiple = false;
    }
    get selectedOptions() {
        const selectedOptions = [];
        this.options.forEach((eachOption) => {
            if (eachOption.selected) {
                selectedOptions.push(eachOption);
            }
            ;
        });
        return selectedOptions;
    }
    selectOptionByValue(value) {
        this.options.forEach((eachOption) => {
            if (this.multiple) {
                if (!Array.isArray(value))
                    return;
                // value = [x,x];
                if (this.binding
                    ? value.find((eachEntity) => eachEntity[this.binding] === eachOption.value[this.binding])
                    : value.indexOf(eachOption.value) !== -1) {
                    eachOption.selected = true;
                }
            }
            else {
                // value = x
                if (this.binding
                    ? value[this.binding] === eachOption.value[this.binding]
                    : value === eachOption.value) {
                    console.log(eachOption, value, eachOption.value);
                    eachOption.selected = true;
                }
            }
        });
        this.output();
    }
    composeValue() {
        var _a;
        const selectedOptions = this.selectedOptions;
        if (this.multiple) {
            this.value = selectedOptions
                .map((eachOption) => eachOption.value);
        }
        else {
            this.value = (_a = selectedOptions[0]) === null || _a === void 0 ? void 0 : _a.value;
        }
        if (this.popup) {
            if (!this.popup.hidden) {
                this.popup.render();
            }
        }
    }
    toggleListener() {
        if (this.readOnly || this.disabled) {
            this.off({ passive: true, id: [select_NAME] });
        }
        else {
            this.on('click focusin', () => {
                if (this.disabled || this.popup)
                    return;
                this.popup = $('m-select-popup', {
                    multiple: this.multiple,
                    hidden: true,
                    'min-width': 'trigger'
                });
                this.popup.select = this;
                document.body.append(this.popup);
                this.popup.trigger = this;
                this.popup.open();
            }, { passive: true, id: [select_NAME] });
        }
    }
    output() {
        if (!this.multiple) {
            const option = this.selectedOptions[0];
            const optionText = option === null || option === void 0 ? void 0 : option.childNodes.filter((eachElement) => !eachElement.slot).map((eachElement) => eachElement.textContent).join(' ').trim();
            this.search.textContent = optionText || '';
        }
    }
    onConnected() {
        this.validate();
        this.uid = uid++;
        this
            .on('focusin', () => {
            this.focused = true;
        }, { passive: true, id: [select_NAME] })
            .on('focusout', () => {
            var _a;
            if (!this.touched) {
                this.touched = true;
            }
            if (((_a = this.popup) === null || _a === void 0 ? void 0 : _a.hidden) === false)
                return;
            this.focused = false;
        }, { passive: true, id: [select_NAME] });
        this.mutationObserver.observe(this, {
            characterData: true,
            childList: true,
            subtree: true
        });
    }
    onDisconnected() {
        this.off({ id: [select_NAME] });
        this.mutationObserver.disconnect();
    }
};
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Event */.ju)({ force: true }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Function)
], SelectElement.prototype, "addEmitter", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Event */.ju)({ force: true }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Function)
], SelectElement.prototype, "changeEmitter", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({ key: 'tabindex' }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Object)
], SelectElement.prototype, "tabIndex", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({ observe: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], SelectElement.prototype, "focused", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], SelectElement.prototype, "addable", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({ observe: false, render: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], SelectElement.prototype, "empty", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({ observe: false, render: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], SelectElement.prototype, "role", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], SelectElement.prototype, "binding", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({
        key: 'readonly',
        update: (select) => select.toggleListener()
    }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], SelectElement.prototype, "readOnly", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({
        update: (select) => select.toggleListener()
    }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], SelectElement.prototype, "disabled", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], SelectElement.prototype, "placeholder", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], SelectElement.prototype, "label", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({
        update(select, value) {
            if (select.popup) {
                select.popup.multiple = value;
            }
        }
    }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], SelectElement.prototype, "multiple", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({ render: false }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], SelectElement.prototype, "expanded", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", Boolean)
], SelectElement.prototype, "searchable", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)({
        update(select, value, oldValue) {
            const isArray = Array.isArray(value);
            const oldIsArray = Array.isArray(oldValue);
            let equal = true;
            if (isArray && oldIsArray && value.length === oldValue.length) {
                for (let i = 0; i < value.length; ++i) {
                    const each = value[i];
                    const eachOld = oldValue[i];
                    if (each !== eachOld ||
                        select.binding
                        ? each[select.binding] !== eachOld[select.binding]
                        : each !== eachOld) {
                        equal = false;
                        break;
                    }
                }
                if (equal)
                    return;
            }
            select.empty = value === null || value === undefined || value === '' || isArray && !value.length;
            select.body.value = value;
            select.validate();
            select.selectOptionByValue(value);
        },
        reflect: false
    }),
    (0,tslib_es6/* __metadata */.w6)("design:type", Object)
], SelectElement.prototype, "value", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Attr */.Ps)(),
    (0,tslib_es6/* __metadata */.w6)("design:type", String)
], SelectElement.prototype, "autocomplete", void 0);
SelectElement = (0,tslib_es6/* __decorate */.gn)([
    (0,app_element/* Element */.W_)({
        tag: 'm-' + select_NAME,
        css: select_select/* default */.Z
    })
], SelectElement);



/***/ }),

/***/ 9579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export TextareaElement */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9312);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5109);
/* harmony import */ var _textarea_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8112);



const NAME = 'textarea';
let TextareaElement = class TextareaElement extends _element__WEBPACK_IMPORTED_MODULE_0__/* .ControlElement */ .w5 {
    constructor() {
        super(...arguments);
        this.controlTemplate = window['Master'](() => [
            'textarea',
            {
                part: 'body',
                name: this.name,
                placeholder: this.placeholder,
                disabled: this.disabled,
                required: this.required,
                readonly: this.readOnly,
                rows: this.rows,
                $created: (element) => {
                    this.body = element;
                    this.validity = element.validity;
                }
            }
        ]);
        this.template = window['Master'](() => [
            'slot',
            'fieldset', [
                'legend', [
                    'span', { part: 'label', $text: this.label }
                ]
            ],
            'label', { $text: this.label },
            'm-icon', {
                $if: this.busy,
                name: 'spinner',
                part: 'spinner'
            }
        ]);
        this.role = 'textbox';
        this.rows = 1;
    }
    onConnected() {
        this.validate();
        this
            .on('click', (event) => {
            if (event.target === this.body)
                return;
            this.body.focus();
        }, {
            id: [NAME],
            passive: true
        });
        this.body.on('input', (event) => {
            this.value = event.target.value;
            if (!this.dirty) {
                this.dirty = true;
            }
        }, { id: [NAME], passive: true })
            .on('focusout', () => {
            this.touched = true;
        }, { id: [NAME], passive: true, once: true });
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({ observe: false, render: false }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Boolean)
], TextareaElement.prototype, "empty", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({ observe: false, render: false }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", String)
], TextareaElement.prototype, "role", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({ key: 'readonly' }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Boolean)
], TextareaElement.prototype, "readOnly", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", String)
], TextareaElement.prototype, "placeholder", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", String)
], TextareaElement.prototype, "label", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", String)
], TextareaElement.prototype, "type", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({ render: false }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Boolean)
], TextareaElement.prototype, "expanded", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)({
        reflect: false,
        render: false,
        update(textarea, value) {
            textarea.empty = value === null || value === undefined || value === '';
            textarea.body.value = value !== null && value !== void 0 ? value : null;
            textarea.validate();
        },
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Object)
], TextareaElement.prototype, "value", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Number)
], TextareaElement.prototype, "maxLength", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Number)
], TextareaElement.prototype, "minLength", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Attr */ .Ps)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .w6)("design:type", Number)
], TextareaElement.prototype, "rows", void 0);
TextareaElement = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
    (0,_element__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_)({
        tag: 'm-' + NAME,
        css: _textarea_scss__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z
    })
], TextareaElement);



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
/******/ 	return __webpack_require__(4115);
/******/ })()
;
});