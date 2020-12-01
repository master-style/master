/*! For license information please see index.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Master=e():t.Master=e()}(self,(function(){return(()=>{var t={1159:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(3645),i=n.n(r)()((function(t){return t[1]}));i.push([t.id,":host{width:100%;min-height:3rem;top:0;text-align:center;text-align-last:center;border-bottom-right-radius:0;border-bottom-left-radius:0}@supports(backdrop-filter: none) or (-webkit-backdrop-filter: none){:host{background-color:rgba(var(--bg-raise-rgb), 0.8);backdrop-filter:blur(35px);-webkit-backdrop-filter:blur(35px)}}:host,slot{display:flex;align-items:center;justify-content:center}:host(.safe) [part=root]{padding-top:env(safe-area-inset-top)}[part=root]{display:flex;justify-content:space-between;align-items:center;width:100%}slot{display:block;min-width:3rem}::slotted(h2){font-size:var(--f-sm) !important;margin:0 !important}",""]);const o=i},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},453:(t,e,n)=>{"use strict";function r(t){return(e,n)=>{const r=n.split("Emitter")[0],i=new CustomEvent(r,t),o=function(t){if(this.emit)return i.data=t,this.dispatchEvent(i),i};return{get:()=>o}}}n.d(e,{j:()=>r})},5109:(t,e,n)=>{"use strict";n.d(e,{W_:()=>a}),n(6472);const r={reflect:!0,observe:!0,render:!0};function i(t){return t=Object.assign(Object.assign({},r),t),(e,n)=>{t.type=Reflect.getMetadata("design:type",e,n).name,t.propKey=n;const r="_"+n,i=t.key=t.key||n.replace(/([A-Z])/g,(t=>"-"+t[0])).toLowerCase(),o=e.constructor,s=t.update,a=t.parse,c={get(){return this[r]},set(e,n){const o=this[r];a&&(e=a(this,e,o)),e!==o&&(this[r]=e,this.initial&&(s&&s(this,e,o),t.reflect&&!n&&("Boolean"===t.type?this.toggleAttribute(i,!!e):this.setAttribute(i,e)),t.render&&this.render&&this.render()))}};return t.set=c.set,t.observe&&(o.observedAttributes||(o.observedAttributes=[]),o.observedAttributes.push(i)),o.attrsOptions?o.attrsOptions=Object.assign({},o.attrsOptions):o.attrsOptions={},o.attrsOptions[i]=t,c}}const o=new CustomEvent("ready"),s={shadow:!0};function a(t){return t=Object.assign(Object.assign({},s),t),function(e){e.elementName=t.tag.replace("m-",""),console.log(e.elementName);const n=e.prototype,r=e.attrsOptions,i=e.propsOptions,s=n.onConnected,a=n.onDisconnected,u=n.onAttrChanged;n.attributeChangedCallback=function(t,e,n){if(n===e)return;const i=r[t],o=i.type;n=c(n,o),e=c(e,o),i.set.call(this,n,!0),u&&u.call(this,t,n,e)},n.connectedCallback=function(){if(this.ready=!1,this.initial=!1,i)for(const t in e.propsOptions){const e=i[t],n=this["_"+t],r=e.update;r&&r(this,n)}if(r){const t=this.attributes;for(const e in r){const n=r[e],i=this["_"+n.propKey],o=t[e];if(void 0===i)continue;let s,a;if(o&&(a=c(o.value,n.type)),a!==i){if(void 0!==a)s=a;else{if(void 0===i)continue;s=i}n.reflect&&("Boolean"===n.type?this.toggleAttribute(e,s):this.setAttribute(e,s))}}}if(t.shadow&&!this.shadowRoot){const e=this.attachShadow({mode:"open"});if(t.css&&e.adoptedStyleSheets){const n=new CSSStyleSheet;n.replaceSync(t.css),e.adoptedStyleSheets=[n]}else if(t.css){const n=document.createElement("style");n.innerHTML=t.css,e.appendChild(n)}}if(this.render&&this.render(),this.initial=!0,r)for(const t in e.attrsOptions){const e=r[t],n=this["_"+e.propKey],i=e.update;i&&i(this,n)}this.ready=!0,this.emit&&this.dispatchEvent(o),s&&s.call(this)},n.disconnectedCallback=function(){this.removeRender&&this.removeRender(),a&&a.call(this)},window.customElements.define(t.tag,e)}}const c=(t,e)=>{if("undefined"!==t)switch(e){case"Number":return""===t?null:isNaN(+t)?t:+t;case"Boolean":return!(""!==t&&!t);default:return t}};var u=n(9312);class p extends HTMLElement{constructor(){super(...arguments),this.template=window.Master((()=>{const t=!this.href&&"anchor"!==this.type||this.disabled?this.type||this.disabled?"button":null:"a",e=["m-icon",{$if:this.busy,name:"spinner",part:"spinner"}];switch(t){case"button":return[t,{class:"touch",part:"root",disabled:this.disabled,type:this.type},this.slotTemplate||["slot"],e];case"a":return[t,{class:"touch",part:"root",href:this.href,download:this.download,rel:this.rel,target:this.target},this.slotTemplate||["slot"],e];default:return["div",{part:"root"},this.slotTemplate||["slot"],e]}}))}render(){this.template.render(this.shadowRoot)}}(0,u.gn)([i({update(t,e,n){"submit"===e?t.on("click",(e=>{const n=t.closest("form");if(n.querySelectorAll("m-input,m-textarea,m-select,m-check").forEach((t=>{t.dirty=!0})),n){if(!n.checkValidity())return;n.requestSubmit?n.requestSubmit():n.submit()}}),{id:[t],passive:!0}):"submit"===e&&"submit"!==n||t.off({id:[t]})}}),(0,u.w6)("design:type",String)],p.prototype,"type",void 0),(0,u.gn)([i(),(0,u.w6)("design:type",Boolean)],p.prototype,"busy",void 0),(0,u.gn)([i(),(0,u.w6)("design:type",String)],p.prototype,"rel",void 0),(0,u.gn)([i(),(0,u.w6)("design:type",String)],p.prototype,"href",void 0),(0,u.gn)([i(),(0,u.w6)("design:type",Boolean)],p.prototype,"disabled",void 0),(0,u.gn)([i(),(0,u.w6)("design:type",Number)],p.prototype,"download",void 0),(0,u.gn)([i(),(0,u.w6)("design:type",String)],p.prototype,"target",void 0);var d=n(453);class h extends HTMLElement{constructor(){super(...arguments),this.hidden=!1,this.duration=500,this.easing="cubic-bezier(.25,.8,.25,1)",this.triggerEvent="click",this.emit=!1,this.animations=[]}prepare(){return(0,u.mG)(this,void 0,void 0,(function*(){if(this.triggerEvent){const t="toggle-"+this.constructor.elementName;$("["+t+"]").forEach((e=>{if(this.matches(e.getAttribute(t))){e.toggleAttribute("aria-expanded",!this.hidden);const t=e.querySelector(".toggled");t&&t.toggleAttribute("active",!this.hidden)}}))}if(this.animation)for(const t of this.animations)t.reverse();else if(this.duration){this.toggleAttribute("changing",!0),yield this.toggling({easing:this.easing,duration:this.duration});const t=this.hidden;t&&this.toggleAttribute("hidden",!0);const e=t?this.onClosed:this.onOpened;e&&e.call(this),this.toggleAttribute("changing",!1),this.animation=null,this.animations=[]}}))}open(){return(0,u.mG)(this,void 0,void 0,(function*(){if(!this.hidden)return;this._hidden=!1,this.toggleAttribute("hidden",!1);const t=this.onOpen;t&&(yield t.call(this)),this.openEmitter(),yield this.changing=this.prepare(),this.openedEmitter()}))}close(){return(0,u.mG)(this,void 0,void 0,(function*(){if(this.hidden)return;this._hidden=!0;const t=this.onClose;t&&(yield t.call(this)),this.closeEmitter(),yield this.changing=this.prepare(),this.closedEmitter()}))}toggle(t){return(0,u.mG)(this,void 0,void 0,(function*(){t="boolean"==typeof t?t:this.hidden,yield t?this.open():this.close()}))}onDisconnected(){document.body.off({id:[this,this.constructor.elementName]})}}(0,u.gn)([i({update(t,e){if(t.ready){const n=t[e?"onClose":"onOpen"];n&&n(),t.prepare()}}}),(0,u.w6)("design:type",Boolean)],h.prototype,"hidden",void 0),(0,u.gn)([i({reflect:!1}),(0,u.w6)("design:type",Object)],h.prototype,"duration",void 0),(0,u.gn)([i({reflect:!1}),(0,u.w6)("design:type",Boolean)],h.prototype,"fade",void 0),(0,u.gn)([i({reflect:!1}),(0,u.w6)("design:type",Object)],h.prototype,"easing",void 0),(0,u.gn)([i({reflect:!1,update(t,e,n){const r=t.constructor.elementName;if(n&&document.body.off({id:[t,r]}),e){const n="toggle-"+r,i=e.split(","),o=t.handleTrigger;document.body.on(i.join(" "),"["+n+"]",(function(e){const r=this;if(this.disabled)return;const s=r.getAttribute(n);if(!t.matches(s))return;const a=e.type;let c;if(i.length>1){if(c=t.hidden,c&&-1===i[0].split(" ").indexOf(a)||!c&&-1===i[1].split(" ").indexOf(a))return;if(o&&!1===o.call(t,e,c))return}else c=!("checked"in r)||"input"!==a&&"change"!==a?t.hidden:!!r.checked;c&&!t.animation&&(t.trigger=r),t.toggle(c)}),{passive:!0,id:[t,r]})}}}),(0,u.w6)("design:type",String)],h.prototype,"triggerEvent",void 0),(0,u.gn)([i({reflect:!1,render:!1}),(0,u.w6)("design:type",Boolean)],h.prototype,"emit",void 0),(0,u.gn)([(0,d.j)(),(0,u.w6)("design:type",Function)],h.prototype,"openEmitter",void 0),(0,u.gn)([(0,d.j)(),(0,u.w6)("design:type",Function)],h.prototype,"closeEmitter",void 0),(0,u.gn)([(0,d.j)(),(0,u.w6)("design:type",Function)],h.prototype,"openedEmitter",void 0),(0,u.gn)([(0,d.j)(),(0,u.w6)("design:type",Function)],h.prototype,"closedEmitter",void 0);class l extends HTMLElement{constructor(){super(...arguments),this.dirty=!1,this.touched=!1}validate(){if(this.ready){this.valid=this.validity.valid,this.invalid=!this.validity.valid;for(const e in this.validity){const n=this.validity[e],r=this["when"+(t=e,t.charAt(0).toUpperCase()+t.slice(1))];if(n&&r)return console.log(this,this.prompt,e,n),void(this.prompt=r)}var t;this.prompt=""}}render(){this.controlTemplate.render(this),this.template.render(this.shadowRoot)}}(0,u.gn)([i({render:!1}),(0,u.w6)("design:type",Boolean)],l.prototype,"emit",void 0),(0,u.gn)([i(),(0,u.w6)("design:type",Boolean)],l.prototype,"busy",void 0),(0,u.gn)([i(),(0,u.w6)("design:type",String)],l.prototype,"name",void 0),(0,u.gn)([i(),(0,u.w6)("design:type",Boolean)],l.prototype,"disabled",void 0),(0,u.gn)([i(),(0,u.w6)("design:type",Boolean)],l.prototype,"required",void 0),(0,u.gn)([i({reflect:!1,update:t=>t.validate()}),(0,u.w6)("design:type",String)],l.prototype,"whenBadInput",void 0),(0,u.gn)([i({reflect:!1,update:t=>t.validate()}),(0,u.w6)("design:type",String)],l.prototype,"whenCustomError",void 0),(0,u.gn)([i({reflect:!1,update:t=>t.validate()}),(0,u.w6)("design:type",String)],l.prototype,"whenPatternMismatch",void 0),(0,u.gn)([i({reflect:!1,update:t=>t.validate()}),(0,u.w6)("design:type",String)],l.prototype,"whenRangeOverflow",void 0),(0,u.gn)([i({reflect:!1,update:t=>t.validate()}),(0,u.w6)("design:type",String)],l.prototype,"whenRangeUnderflow",void 0),(0,u.gn)([i({reflect:!1,update:t=>t.validate()}),(0,u.w6)("design:type",String)],l.prototype,"whenStepMismatch",void 0),(0,u.gn)([i({reflect:!1,update:t=>t.validate()}),(0,u.w6)("design:type",String)],l.prototype,"whenTooLong",void 0),(0,u.gn)([i({reflect:!1,update:t=>t.validate()}),(0,u.w6)("design:type",String)],l.prototype,"whenTypeMismatch",void 0),(0,u.gn)([i({reflect:!1,update:t=>t.validate()}),(0,u.w6)("design:type",String)],l.prototype,"whenValueMissing",void 0),(0,u.gn)([i({reflect:!1,update:t=>t.validate()}),(0,u.w6)("design:type",String)],l.prototype,"whenValid",void 0),(0,u.gn)([i({observe:!1,render:!1}),(0,u.w6)("design:type",String)],l.prototype,"prompt",void 0),(0,u.gn)([i({observe:!1,render:!1}),(0,u.w6)("design:type",Boolean)],l.prototype,"valid",void 0),(0,u.gn)([i({observe:!1,render:!1}),(0,u.w6)("design:type",Boolean)],l.prototype,"warning",void 0),(0,u.gn)([i({observe:!1,render:!1}),(0,u.w6)("design:type",Boolean)],l.prototype,"invalid",void 0),(0,u.gn)([i({observe:!1,render:!1}),(0,u.w6)("design:type",Boolean)],l.prototype,"dirty",void 0),(0,u.gn)([i({observe:!1,render:!1}),(0,u.w6)("design:type",Boolean)],l.prototype,"touched",void 0)},7007:(t,e,n)=>{"use strict";n.r(e),n.d(e,{HeaderElement:()=>s});var r=n(9312),i=n(5109),o=n(1159);let s=class extends HTMLElement{constructor(){super(...arguments),this.template=window.Master((()=>["div",{part:"root"},["slot",{name:"start"},"slot","slot",{name:"end"}]]))}render(){this.template.render(this.shadowRoot)}};s=(0,r.gn)([(0,i.W_)({tag:"m-header",css:o.Z})],s)},9312:(t,e,n)=>{"use strict";function r(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}function i(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function o(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))}n.d(e,{gn:()=>r,w6:()=>i,mG:()=>o}),Object.create,Object.create},6472:(t,e,n)=>{var r;!function(t){!function(e){var r="object"==typeof n.g?n.g:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),i=o(t);function o(t,e){return function(n,r){"function"!=typeof t[n]&&Object.defineProperty(t,n,{configurable:!0,writable:!0,value:r}),e&&e(n,r)}}void 0===r.Reflect?r.Reflect=t:i=o(r.Reflect,i),function(t){var e=Object.prototype.hasOwnProperty,n="function"==typeof Symbol,r=n&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",i=n&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",o="function"==typeof Object.create,s={__proto__:[]}instanceof Array,a=!o&&!s,c={create:o?function(){return L(Object.create(null))}:s?function(){return L({__proto__:null})}:function(){return L({})},has:a?function(t,n){return e.call(t,n)}:function(t,e){return e in t},get:a?function(t,n){return e.call(t,n)?t[n]:void 0}:function(t,e){return t[e]}},u=Object.getPrototypeOf(Function),p="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,d=p||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],n=function(){function t(t,e,n){this._index=0,this._keys=t,this._values=e,this._selector=n}return t.prototype["@@iterator"]=function(){return this},t.prototype[i]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var n=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:n,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var n=this._find(t,!0);return this._values[n]=e,this},e.prototype.delete=function(e){var n=this._find(e,!1);if(n>=0){for(var r=this._keys.length,i=n+1;i<r;i++)this._keys[i-1]=this._keys[i],this._values[i-1]=this._values[i];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new n(this._keys,this._values,r)},e.prototype.values=function(){return new n(this._keys,this._values,o)},e.prototype.entries=function(){return new n(this._keys,this._values,s)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[i]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function r(t,e){return t}function o(t,e){return e}function s(t,e){return[t,e]}}():Map,h=p||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new d}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[i]=function(){return this.keys()},t}():Set,l=new(p||"function"!=typeof WeakMap?function(){var t=c.create(),n=r();return function(){function t(){this._key=r()}return t.prototype.has=function(t){var e=i(t,!1);return void 0!==e&&c.has(e,this._key)},t.prototype.get=function(t){var e=i(t,!1);return void 0!==e?c.get(e,this._key):void 0},t.prototype.set=function(t,e){return i(t,!0)[this._key]=e,this},t.prototype.delete=function(t){var e=i(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=r()},t}();function r(){var e;do{e="@@WeakMap@@"+s()}while(c.has(t,e));return t[e]=!0,e}function i(t,r){if(!e.call(t,n)){if(!r)return;Object.defineProperty(t,n,{value:c.create()})}return t[n]}function o(t,e){for(var n=0;n<e;++n)t[n]=255*Math.random()|0;return t}function s(){var t,e=(t=16,"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):o(new Uint8Array(t),t):o(new Array(t),t));e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var n="",r=0;r<16;++r){var i=e[r];4!==r&&6!==r&&8!==r||(n+="-"),i<16&&(n+="0"),n+=i.toString(16).toLowerCase()}return n}}():WeakMap);function f(t,e,n){var r=l.get(t);if(k(r)){if(!n)return;r=new d,l.set(t,r)}var i=r.get(e);if(k(i)){if(!n)return;i=new d,r.set(e,i)}return i}function y(t,e,n){if(g(t,e,n))return!0;var r=B(e);return!E(r)&&y(t,r,n)}function g(t,e,n){var r=f(e,n,!1);return!k(r)&&!!r.has(t)}function v(t,e,n){if(g(t,e,n))return w(t,e,n);var r=B(e);return E(r)?void 0:v(t,r,n)}function w(t,e,n){var r=f(e,n,!1);if(!k(r))return r.get(t)}function m(t,e,n,r){f(n,r,!0).set(t,e)}function b(t,e){var n=_(t,e),r=B(t);if(null===r)return n;var i=b(r,e);if(i.length<=0)return n;if(n.length<=0)return i;for(var o=new h,s=[],a=0,c=n;a<c.length;a++){var u=c[a];o.has(u)||(o.add(u),s.push(u))}for(var p=0,d=i;p<d.length;p++)u=d[p],o.has(u)||(o.add(u),s.push(u));return s}function _(t,e){var n=[],r=f(t,e,!1);if(k(r))return n;for(var o=function(t){var e=P(t,i);if(!A(e))throw new TypeError;var n=e.call(t);if(!j(n))throw new TypeError;return n}(r.keys()),s=0;;){var a=R(o);if(!a)return n.length=s,n;var c=a.value;try{n[s]=c}catch(t){try{C(o)}finally{throw t}}s++}}function O(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function k(t){return void 0===t}function E(t){return null===t}function j(t){return"object"==typeof t?null!==t:"function"==typeof t}function S(t,e){switch(O(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var n=3===e?"string":5===e?"number":"default",i=P(t,r);if(void 0!==i){var o=i.call(t,n);if(j(o))throw new TypeError;return o}return function(t,e){if("string"===e){var n=t.toString;if(A(n)&&!j(i=n.call(t)))return i;if(A(r=t.valueOf)&&!j(i=r.call(t)))return i}else{var r;if(A(r=t.valueOf)&&!j(i=r.call(t)))return i;var i,o=t.toString;if(A(o)&&!j(i=o.call(t)))return i}throw new TypeError}(t,"default"===n?"number":n)}function x(t){var e=S(t,3);return"symbol"==typeof e?e:function(t){return""+t}(e)}function T(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function A(t){return"function"==typeof t}function M(t){return"function"==typeof t}function P(t,e){var n=t[e];if(null!=n){if(!A(n))throw new TypeError;return n}}function R(t){var e=t.next();return!e.done&&e}function C(t){var e=t.return;e&&e.call(t)}function B(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===u)return e;if(e!==u)return e;var n=t.prototype,r=n&&Object.getPrototypeOf(n);if(null==r||r===Object.prototype)return e;var i=r.constructor;return"function"!=typeof i||i===t?e:i}function L(t){return t.__=void 0,delete t.__,t}t("decorate",(function(t,e,n,r){if(k(n)){if(!T(t))throw new TypeError;if(!M(e))throw new TypeError;return function(t,e){for(var n=t.length-1;n>=0;--n){var r=(0,t[n])(e);if(!k(r)&&!E(r)){if(!M(r))throw new TypeError;e=r}}return e}(t,e)}if(!T(t))throw new TypeError;if(!j(e))throw new TypeError;if(!j(r)&&!k(r)&&!E(r))throw new TypeError;return E(r)&&(r=void 0),function(t,e,n,r){for(var i=t.length-1;i>=0;--i){var o=(0,t[i])(e,n,r);if(!k(o)&&!E(o)){if(!j(o))throw new TypeError;r=o}}return r}(t,e,n=x(n),r)})),t("metadata",(function(t,e){return function(n,r){if(!j(n))throw new TypeError;if(!k(r)&&!function(t){switch(O(t)){case 3:case 4:return!0;default:return!1}}(r))throw new TypeError;m(t,e,n,r)}})),t("defineMetadata",(function(t,e,n,r){if(!j(n))throw new TypeError;return k(r)||(r=x(r)),m(t,e,n,r)})),t("hasMetadata",(function(t,e,n){if(!j(e))throw new TypeError;return k(n)||(n=x(n)),y(t,e,n)})),t("hasOwnMetadata",(function(t,e,n){if(!j(e))throw new TypeError;return k(n)||(n=x(n)),g(t,e,n)})),t("getMetadata",(function(t,e,n){if(!j(e))throw new TypeError;return k(n)||(n=x(n)),v(t,e,n)})),t("getOwnMetadata",(function(t,e,n){if(!j(e))throw new TypeError;return k(n)||(n=x(n)),w(t,e,n)})),t("getMetadataKeys",(function(t,e){if(!j(t))throw new TypeError;return k(e)||(e=x(e)),b(t,e)})),t("getOwnMetadataKeys",(function(t,e){if(!j(t))throw new TypeError;return k(e)||(e=x(e)),_(t,e)})),t("deleteMetadata",(function(t,e,n){if(!j(e))throw new TypeError;k(n)||(n=x(n));var r=f(e,n,!1);if(k(r))return!1;if(!r.delete(t))return!1;if(r.size>0)return!0;var i=l.get(e);return i.delete(n),i.size>0||l.delete(e),!0}))}(i)}()}(r||(r={}))}},e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}return n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(7007)})()}));