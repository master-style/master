/*! For license information please see index.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Master=e():t.Master=e()}(globalThis,(function(){return(()=>{var t={3131:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});var n=o(3645),i=o.n(n)()((function(t){return t[1]}));i.push([t.id,'::slotted(input),::slotted(textarea),input,textarea{cursor:text;border:0;font-weight:inherit;color:inherit;-webkit-appearance:none;white-space:nowrap;font-family:inherit;font-size:inherit;text-align:inherit;line-height:inherit;letter-spacing:inherit;-webkit-text-fill-color:unset;outline:none;background-color:transparent;-webkit-user-drag:none;-ms-user-select:text;user-select:text;-webkit-user-select:text;touch-action:manipulation;-webkit-touch-action:manipulation;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}::slotted(:-webkit-autofill),:-webkit-autofill{-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s;border-style:dashed !important;caret-color:var(--f-theme);-webkit-text-fill-color:var(--f-blue)}::-webkit-inner-spin-button,::-webkit-outer-spin-button{display:none}::-webkit-search-cancel-button,::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:-ms-input-placeholder{opacity:1;color:var(--f-fadest);-webkit-text-fill-color:var(--f-fadest)}::placeholder{opacity:1;color:var(--f-fadest);-webkit-text-fill-color:var(--f-fadest)}:-moz-read-only{cursor:default;caret-color:transparent}:host{position:relative;display:inline-flex;align-items:flex-start;font-size:var(--f-size);line-height:1.2}:host(.xs){--f-size: var(--f-xs);--py: .5rem;--px: .8rem;--size: 2rem;--label-px: .25rem;--label-f-size: .65625rem}:host(.sm){--py: 0.65625rem;--label-px: .25rem;--size: 2.5rem}:host(.lg){--f-size: var(--f-md);--py: 1rem;--px: 1.2rem;--size: 3.5rem;--label-px: .3125rem;--label-f-size: .9375rem}:host(.outlined),:host(.underlined){--b-color: var(--b-fader);--b-color-active: var(--b-fade);backdrop-filter:none}@media(any-hover: hover){:host(:not([disabled]):not([readonly]):hover) fieldset{border-color:var(--b-color-active)}}:host([readonly]:not(.output)) fieldset{border-style:dashed}:host(:active:not([readonly]):not([disabled])) fieldset,:host(:focus-within:not([readonly]):not([disabled])) fieldset,:host([focused]:not([readonly]):not([disabled])) fieldset{--b-width: 2px;border-color:var(--b-color-active)}:host(:active:not([readonly]):not([disabled])) ::slotted([part=body]),:host(:active:not([readonly]):not([disabled])) [part=body],:host(:focus-within:not([readonly]):not([disabled])) ::slotted([part=body]),:host(:focus-within:not([readonly]):not([disabled])) [part=body],:host([focused]:not([readonly]):not([disabled])) ::slotted([part=body]),:host([focused]:not([readonly]):not([disabled])) [part=body]{color:var(--f-fade)}:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) ::slotted([part=head]),:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) ::slotted([part=foot]),:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) ::slotted([part=body]),:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) [part=body]{opacity:0;transition-delay:0s}:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) legend{max-width:0}:host([label][empty]:not([busy]):not([expanded]):not([focused]):not(:focus-within):not(:active):not([readonly]):not([disabled]):not([type=file])) label{transition-delay:.1s;transform:translate(0, var(--py))}:host(.outlined){border-radius:.3125rem}:host(.outlined) fieldset{border-width:var(--b-width)}:host(.outlined) legend{transition:max-width .2s cubic-bezier(0.33, 1, 0.68, 1) .1s;margin-left:0;will-change:max-width}:host(.outlined[label]:not([label=""])) [part=label]{padding:0 var(--label-px);letter-spacing:inherit;contain:strict}:host(.outlined[busy]) legend,:host(.outlined[expanded]) legend,:host(.outlined[label]:not([empty]):not(:focus-within)) legend{transition:none;margin-left:0}:host(.outlined[label]:active:not([readonly]):not([disabled])) legend,:host(.outlined[label]:focus-within:not([readonly]):not([disabled])) legend,:host(.outlined[label][focused]:not([readonly]):not([disabled])) legend{transition:max-width .2s ease-in;margin-left:-1px;height:2px}:host(.underlined){--px: 0}:host(.underlined) fieldset{border-bottom-width:var(--b-width)}:host(.underlined) ::slotted([part=head]),:host(.underlined) ::slotted([part=foot]),:host(.underlined) ::slotted([part=body]),:host(.underlined) [part=icon],:host(.underlined) [part=body]{padding-top:calc(var(--py) + .125rem);padding-bottom:calc(var(--py) - .125rem)}label{position:absolute;top:0;left:var(--px);display:block;-ms-user-select:none;user-select:none;pointer-events:none;transition-property:transform,opacity;will-change:transform,opacity;transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-duration:.2s;transform-origin:left;line-height:inherit;color:var(--label-f-color);transform:scale(0.75) translate(0, -65%);white-space:nowrap;letter-spacing:inherit;font-weight:inherit}fieldset{position:absolute;box-sizing:border-box;top:0;left:0;width:100%;height:100%;margin:0;display:flex;color:var(--theme, var(--f-theme-fader));border-color:var(--b-color);border-width:0;border-style:solid;padding:0 calc(var(--px) - .3125rem);border-radius:inherit;pointer-events:none}legend{max-width:100%;height:1px;font-size:var(--label-f-size);line-height:0;padding:0;margin:0;contain:layout paint style;-ms-user-select:none;user-select:none;visibility:hidden}::slotted(:invalid){box-shadow:none}::slotted([part=head]),::slotted([part=foot]),::slotted([part=body]),[part=icon],[part=body]{box-sizing:border-box;padding-top:var(--py);padding-bottom:var(--py);transition:opacity .2s .1s cubic-bezier(0, 0, 0.2, 1);will-change:opacity;min-height:var(--size)}::slotted([part=body]),[part=body]{z-index:1;display:flex;text-overflow:ellipsis;-ms-text-overflow:ellipsis;align-items:center;contain:style;width:100%;padding-left:var(--px);padding-right:var(--px)}::slotted([part=head]),::slotted([part=foot]),[part=icon]{display:flex;-ms-user-select:none;user-select:none;white-space:nowrap;align-items:center}::slotted([part=head]){margin-right:.3125rem;padding-left:var(--px);order:-1}:host(.outlined) ::slotted([part=head]){margin-right:-0.6875rem}::slotted([part=foot]){order:1;margin-left:.3125rem;padding-right:var(--px);font-size:var(--f-xxs);color:var(--f-fade)}:host([busy]){pointer-events:none !important}:host([busy]) ::slotted([part=body]),:host([busy]) [part=body]{visibility:hidden}:host([busy]) [part=icon]{visibility:hidden}[part=spinner]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;height:fit-content;width:fit-content}:host([disabled]){-webkit-text-fill-color:var(--f-fadest);cursor:no-drop !important;color:var(--f-fadest) !important}:host([disabled]) fieldset{border-style:dashed;border-color:var(--b-color) !important}:host([disabled]):after{display:none}[part=clear]{--button-bg-color-hover: var(--theme-fade);--button-f-color: var(--f-fadest);--button-f-size: var(--f-xxs);--button-size: 1.25rem;--icon-stroke-width: 3px;border-radius:50%}[part=clear]+[part=icon]{margin-left:.25rem}[part=foot]{display:flex;align-items:center;height:var(--size);padding-right:calc(var(--px) / 1.5)}:host([prompt][valid][dirty]),:host([prompt][valid][touched]),:host([prompt][class*=-valid][class*=-dirty]),:host([prompt][class*=-valid][class*=-touched]){--prompt-bg-color: var(--green-fader);--prompt-f-color: var(--green);--label-f-color: var(--green)}:host([prompt][invalid][dirty]),:host([prompt][invalid][touched]),:host([prompt][class*=-invalid][class*=-dirty]),:host([prompt][class*=-invalid][class*=-touched]){--prompt-bg-color: var(--red-fader) !important;--prompt-f-color: var(--f-red) !important;--label-f-color: var(--f-red) !important;--b-color: var(--red) !important}:host([prompt]:not([prompt=""])[dirty]):after,:host([prompt]:not([prompt=""])[touched]):after,:host([prompt]:not([prompt=""])[class*=-dirty]):after,:host([prompt]:not([prompt=""])[class*=-touched]):after{content:attr(prompt);position:absolute;z-index:1000;bottom:-0.1875rem;right:0;transform:translateY(100%);font-size:var(--f-xxs);font-weight:500;border-radius:.125rem;color:var(--prompt-f-color);background-color:var(--prompt-bg-color);white-space:normal;text-align:right;line-height:1.2;padding:.1875rem .375rem .125rem .375rem}:host{--f-size: var(--input-f-size, var(--f-sm));--b-width: var(--input-b-width, 1px);--b-color: var(--input-b-color, transparent);--py: var(--input-py, .90625rem);--px: var(--input-px, 1rem);--size: var(--input-size, 3rem);--label-px: var(--input-label-px, .25rem);--label-f-size: var(--input-label-f-size, var(--f-xxs));--label-f-color: var(--input-label-f-color, var(--f-theme-fader));--image-size: var(--input-image-size, 10rem)}:host(.outlined) ::slotted([part=body]){padding-left:0;padding-right:0;text-indent:var(--px)}:host(:focus-within:not([readonly]):not([disabled])) ::slotted([part=body]){-webkit-mask-image:linear-gradient(to right, rgba(0, 0, 0, 0) 0px, black var(--px), black calc(100% - var(--px)), rgba(0, 0, 0, 0) 100%)}:host([type=file]){cursor:copy}:host([type=file]) ::slotted([part=body]){position:absolute;pointer-events:none;z-index:2;opacity:0;height:100%;width:100%;cursor:copy !important}:host([type=file]) ::slotted(img){width:var(--image-size);height:var(--image-size);object-fit:cover}:host([dragging]) ::slotted([part=body]){cursor:grab !important}:host([dragging]) fieldset{--b-width: 2px;border-color:var(--b-color-active)}[part=image]{width:var(--image-size);height:var(--image-size);object-fit:cover;background-color:rgba(var(--bg-skeleton-rgb), 0.05)}:host([interface=image]) [part=body]:before{display:flex;justify-content:center;min-height:var(--image-size);min-width:var(--image-size);align-items:center}:host([interface=image]) [part=output]{display:flex;flex-direction:column;margin:.25rem;border-radius:3px;overflow:hidden}:host([interface=image]) m-chip{border-radius:0;width:var(--image-size);margin:0}:host([interface=image]) m-chip m-button[part=close]{margin-left:auto}[part=filename]{overflow:hidden;flex:1 1 auto;text-overflow:ellipsis}',""]);const r=i},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=t(e);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(t,o,n){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(n)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(i[s]=!0)}for(var a=0;a<t.length;a++){var d=[].concat(t[a]);n&&i[d[0]]||(o&&(d[2]?d[2]="".concat(o," and ").concat(d[2]):d[2]=o),e.push(d))}},e}},453:(t,e,o)=>{"use strict";function n(t){return(e,o)=>{const n=o.split("Emitter")[0],i=new CustomEvent(n,t),r=function(e){if(this.emit||(null==t?void 0:t.force))return i.data=e,this.dispatchEvent(i),i};return{get:()=>r}}}o.d(e,{j:()=>n})},5109:(t,e,o)=>{"use strict";o.d(e,{Ps:()=>i,w5:()=>h,W_:()=>a}),o(6472);const n={reflect:!0,observe:!0,render:!0};function i(t){return t=Object.assign(Object.assign({},n),t),(e,o)=>{t.type=Reflect.getMetadata("design:type",e,o).name,t.propKey=o;const n="_"+o,i=t.key=t.key||o.replace(/([A-Z])/g,(t=>"-"+t[0])).toLowerCase(),r=e.constructor,s=t.update,a=t.parse,d={get(){return this[n]},set(e,o){const r=this[n];a&&(e=a(this,e,r)),e!==r&&(this[n]=e,this.initial&&(s&&s(this,e,r),t.reflect&&!o&&("Boolean"===t.type?this.toggleAttribute(i,!!e):this.setAttribute(i,e)),t.render&&this.render&&this.render()))}};return t.set=d.set,t.observe&&(r.observedAttributes||(r.observedAttributes=[]),r.observedAttributes.push(i)),r.attrsOptions?r.attrsOptions=Object.assign({},r.attrsOptions):r.attrsOptions={},r.attrsOptions[i]=t,d}}const r=new CustomEvent("ready"),s={shadow:!0};function a(t){return t=Object.assign(Object.assign({},s),t),function(e){e.elementName=t.tag.replace("m-","");const o=e.prototype,n=e.attrsOptions,i=e.propsOptions,s=o.onConnected,a=o.onDisconnected,l=o.onAttrChanged;o.attributeChangedCallback=function(t,e,o){if(o===e)return;const i=n[t],r=i.type;o=d(o,r),e=d(e,r),i.set.call(this,o,!0),l&&l.call(this,t,o,e)},o.connectedCallback=function(){if(this.ready=!1,this.initial=!1,i)for(const t in e.propsOptions){const e=i[t],o=this["_"+t],n=e.update;n&&n(this,o)}if(n){const t=this.attributes;for(const e in n){const o=n[e],i=this["_"+o.propKey],r=t[e];if(void 0===i)continue;let s,a;if(r&&(a=d(r.value,o.type)),a!==i){if(void 0!==a)s=a;else{if(void 0===i)continue;s=i}o.reflect&&("Boolean"===o.type?this.toggleAttribute(e,s):this.setAttribute(e,s))}}}if(t.shadow&&!this.shadowRoot){const e=this.attachShadow({mode:"open"});if(t.css&&e.adoptedStyleSheets){const o=new CSSStyleSheet;o.replaceSync(t.css),e.adoptedStyleSheets=[o]}else if(t.css){const o=document.createElement("style");o.innerHTML=t.css,e.appendChild(o)}}if(this.render&&this.render(),this.initial=!0,n)for(const t in e.attrsOptions){const e=n[t],o=this["_"+e.propKey],i=e.update;i&&i(this,o)}this.ready=!0,this.emit&&this.dispatchEvent(r),s&&s.call(this)},o.disconnectedCallback=function(){this.removeRender&&this.removeRender(),a&&a.call(this)},window.customElements.define(t.tag,e)}}const d=(t,e)=>{if("undefined"!==t)switch(e){case"Number":return""===t?null:isNaN(+t)?t:+t;case"Boolean":return!(""!==t&&!t);default:return t}};var l=o(9312);class p extends HTMLElement{constructor(){super(...arguments),this.template=window.Master((()=>{const t=!this.href&&"anchor"!==this.type||this.disabled?this.type||this.disabled?"button":null:"a",e=["m-icon",{$if:this.busy,name:"spinner",part:"spinner"}];switch(t){case"button":return[t,{class:"touch",part:"root",disabled:this.disabled,type:this.type},this.slotTemplate||["slot"],e];case"a":return[t,{class:"touch",part:"root",href:this.href,download:this.download,rel:this.rel,target:this.target},this.slotTemplate||["slot"],e];default:return["div",{part:"root"},this.slotTemplate||["slot"],e]}}))}render(){this.template.render(this.shadowRoot)}}(0,l.gn)([i({update(t,e,o){"submit"===e?t.on("click",(e=>{const o=t.closest("form");if(o.querySelectorAll("m-input,m-textarea,m-select,m-check").forEach((t=>{t.dirty=!0})),o){if(!o.checkValidity())return;o.requestSubmit?o.requestSubmit():o.submit()}}),{id:[t],passive:!0}):"submit"===e&&"submit"!==o||t.off({id:[t]})}}),(0,l.w6)("design:type",String)],p.prototype,"type",void 0),(0,l.gn)([i(),(0,l.w6)("design:type",Boolean)],p.prototype,"busy",void 0),(0,l.gn)([i(),(0,l.w6)("design:type",String)],p.prototype,"rel",void 0),(0,l.gn)([i(),(0,l.w6)("design:type",String)],p.prototype,"href",void 0),(0,l.gn)([i(),(0,l.w6)("design:type",Boolean)],p.prototype,"disabled",void 0),(0,l.gn)([i(),(0,l.w6)("design:type",Number)],p.prototype,"download",void 0),(0,l.gn)([i(),(0,l.w6)("design:type",String)],p.prototype,"target",void 0);var c=o(453);class u extends HTMLElement{constructor(){super(...arguments),this.hidden=!1,this.duration=500,this.easing="cubic-bezier(.25,.8,.25,1)",this.triggerEvent="click",this.emit=!1,this.animations=[]}prepare(){return(0,l.mG)(this,void 0,void 0,(function*(){if(this.triggerEvent){const t="toggle-"+this.constructor.elementName;$("["+t+"]").forEach((e=>{if(this.matches(e.getAttribute(t))){const t=this.hidden;e.toggleAttribute("aria-expanded",!t),e.toggleAttribute("active",!t);const o=e.querySelector(".toggled");o&&o.toggleAttribute("active",!this.hidden)}}))}if(this.animation)for(const t of this.animations)t.reverse();else if(this.duration){this.toggleAttribute("changing",!0),yield this.toggling({easing:this.easing,duration:this.duration});const t=this.hidden;t&&this.toggleAttribute("hidden",!0),this.toggleAttribute("changing",!1),this.animation=null,this.animations=[];const e=t?this.onClosed:this.onOpened;e&&e.call(this)}}))}open(){return(0,l.mG)(this,void 0,void 0,(function*(){if(!this.hidden)return!1;this._hidden=!1,this.toggleAttribute("hidden",!1);const t=this.onOpen;return t&&(yield t.call(this)),this.openEmitter(),yield this.changing=this.prepare(),this.openedEmitter(),!0}))}close(){return(0,l.mG)(this,void 0,void 0,(function*(){if(this.hidden)return!1;this._hidden=!0;const t=this.onClose;return t&&(yield t.call(this)),this.closeEmitter(),yield this.changing=this.prepare(),this.closedEmitter(),!0}))}toggle(t){return(0,l.mG)(this,void 0,void 0,(function*(){t="boolean"==typeof t?t:this.hidden,yield t?this.open():this.close()}))}onDisconnected(){document.body.off({id:[this,this.constructor.elementName]})}}(0,l.gn)([i({update(t,e){if(t.ready){const o=t[e?"onClose":"onOpen"];o&&o(),t.prepare()}}}),(0,l.w6)("design:type",Boolean)],u.prototype,"hidden",void 0),(0,l.gn)([i({reflect:!1}),(0,l.w6)("design:type",Object)],u.prototype,"duration",void 0),(0,l.gn)([i({reflect:!1}),(0,l.w6)("design:type",Boolean)],u.prototype,"fade",void 0),(0,l.gn)([i({reflect:!1}),(0,l.w6)("design:type",Object)],u.prototype,"easing",void 0),(0,l.gn)([i({reflect:!1,update(t,e,o){const n=t.constructor.elementName;if(o&&document.body.off({id:[t,n]}),e){const o="toggle-"+n,i=e.split(","),r=t.handleTrigger;document.body.on(i.join(" "),"["+o+"]",(function(e){const n=this;if(this.disabled)return;const s=n.getAttribute(o);if(!t.matches(s))return;const a=e.type;let d;if(i.length>1){if(d=t.hidden,d&&-1===i[0].split(" ").indexOf(a)||!d&&-1===i[1].split(" ").indexOf(a))return;if(r&&!1===r.call(t,e,d))return}else d=!("checked"in n)||"input"!==a&&"change"!==a?t.hidden:!!n.checked;d&&!t.animation&&(t.trigger=n),t.toggle(d)}),{passive:!0,id:[t,n]})}}}),(0,l.w6)("design:type",String)],u.prototype,"triggerEvent",void 0),(0,l.gn)([i({reflect:!1,render:!1}),(0,l.w6)("design:type",Boolean)],u.prototype,"emit",void 0),(0,l.gn)([(0,c.j)(),(0,l.w6)("design:type",Function)],u.prototype,"openEmitter",void 0),(0,l.gn)([(0,c.j)(),(0,l.w6)("design:type",Function)],u.prototype,"closeEmitter",void 0),(0,l.gn)([(0,c.j)(),(0,l.w6)("design:type",Function)],u.prototype,"openedEmitter",void 0),(0,l.gn)([(0,c.j)(),(0,l.w6)("design:type",Function)],u.prototype,"closedEmitter",void 0);class h extends HTMLElement{constructor(){super(...arguments),this.dirty=!1,this.touched=!1}validate(){if(!this.ready)return;let t;this.valid=this.validity.valid,this.invalid=!this.validity.valid;for(const o in this.validity){const n=this.validity[o],i=this["when"+(e=o,e.charAt(0).toUpperCase()+e.slice(1))];if(void 0!==i){if(n){t=i;break}t=""}}var e;void 0!==t?this.prompt=t:this.toggleAttribute("prompt",!1)}render(){this.controlTemplate.render(this),this.template.render(this.shadowRoot)}}(0,l.gn)([i({render:!1}),(0,l.w6)("design:type",Boolean)],h.prototype,"emit",void 0),(0,l.gn)([i(),(0,l.w6)("design:type",Boolean)],h.prototype,"busy",void 0),(0,l.gn)([i(),(0,l.w6)("design:type",String)],h.prototype,"name",void 0),(0,l.gn)([i(),(0,l.w6)("design:type",Boolean)],h.prototype,"disabled",void 0),(0,l.gn)([i(),(0,l.w6)("design:type",Boolean)],h.prototype,"required",void 0),(0,l.gn)([i({reflect:!1,update:t=>t.validate()}),(0,l.w6)("design:type",String)],h.prototype,"whenBadInput",void 0),(0,l.gn)([i({reflect:!1,update:t=>t.validate()}),(0,l.w6)("design:type",String)],h.prototype,"whenCustomError",void 0),(0,l.gn)([i({reflect:!1,update:t=>t.validate()}),(0,l.w6)("design:type",String)],h.prototype,"whenPatternMismatch",void 0),(0,l.gn)([i({reflect:!1,update:t=>t.validate()}),(0,l.w6)("design:type",String)],h.prototype,"whenRangeOverflow",void 0),(0,l.gn)([i({reflect:!1,update:t=>t.validate()}),(0,l.w6)("design:type",String)],h.prototype,"whenRangeUnderflow",void 0),(0,l.gn)([i({reflect:!1,update:t=>t.validate()}),(0,l.w6)("design:type",String)],h.prototype,"whenStepMismatch",void 0),(0,l.gn)([i({reflect:!1,update:t=>t.validate()}),(0,l.w6)("design:type",String)],h.prototype,"whenTooLong",void 0),(0,l.gn)([i({reflect:!1,update:t=>t.validate()}),(0,l.w6)("design:type",String)],h.prototype,"whenTypeMismatch",void 0),(0,l.gn)([i({reflect:!1,update:t=>t.validate()}),(0,l.w6)("design:type",String)],h.prototype,"whenValueMissing",void 0),(0,l.gn)([i({reflect:!1,update:t=>t.validate()}),(0,l.w6)("design:type",String)],h.prototype,"whenValid",void 0),(0,l.gn)([i({observe:!1,render:!1}),(0,l.w6)("design:type",String)],h.prototype,"prompt",void 0),(0,l.gn)([i({observe:!1,render:!1}),(0,l.w6)("design:type",Boolean)],h.prototype,"valid",void 0),(0,l.gn)([i({observe:!1,render:!1}),(0,l.w6)("design:type",Boolean)],h.prototype,"warning",void 0),(0,l.gn)([i({observe:!1,render:!1}),(0,l.w6)("design:type",Boolean)],h.prototype,"invalid",void 0),(0,l.gn)([i({observe:!1,render:!1}),(0,l.w6)("design:type",Boolean)],h.prototype,"dirty",void 0),(0,l.gn)([i({observe:!1,render:!1}),(0,l.w6)("design:type",Boolean)],h.prototype,"touched",void 0)},993:(t,e,o)=>{"use strict";o.r(e),o.d(e,{InputElement:()=>d});var n,i=o(9312),r=o(5109),s=o(3131);const a="input";new window.Event("change",{bubbles:!0,cancelable:!1});let d=class extends r.w5{constructor(){super(...arguments),this.controlTemplate=window.Master((()=>["input",{part:"body",type:this.type,name:this.name,placeholder:this.placeholder,disabled:this.disabled,required:this.required,multiple:this.multiple,accept:this.accept,readonly:this.readOnly,pattern:this.pattern,autocomplete:this.autocomplete,autofocus:this.autofocus,$created:t=>{this.body=t,this.validity=t.validity}}])),this.template=window.Master((()=>{var t,e;return["slot","div",{$if:"file"===this.type,part:"body",placeholder:this.placeholder,label:(null===(t=this.label)||void 0===t?void 0:t.length)>(null===(e=this.placeholder)||void 0===e?void 0:e.length)?this.label:this.placeholder},()=>this.files.map((t=>{const e=t.name.split("."),o=e.pop(),n=URL.createObjectURL(t);return["div",{part:"output"},["img",{$if:"image"===this.interface,part:"image",src:n,$removed:()=>URL.revokeObjectURL(n)},"m-chip",{class:"sm"},["div",{part:"head",$text:o},"span",{part:"filename",$text:e.join()},"div",{part:"foot",$text:(t.size/1024).toFixed(0)+"KB"},"m-button",{$if:!this.readOnly&&!this.disabled,part:"close",$on:{click:e=>{e.stopPropagation(),this.value.splice(this.value.indexOf(t),1),this.render()}}},["m-icon",{name:"cross"}]]]]})),"fieldset",["legend",["span",{part:"label",$text:this.label}]],"label",{$text:this.label},"div",{$if:this.busy||this.clearable&&!this.readOnly&&!this.disabled&&!this.empty,part:"foot"},["m-icon",{$if:this.busy,name:"spinner",part:"spinner"},"m-button",{$if:this.clearable&&!this.readOnly&&!this.disabled&&!this.empty,class:"round",name:"cross",part:"clear",$on:{click:()=>{this.value=null}}},["m-icon",{name:"cross"}]]]})),n.set(this,[]),this.files=[],this.role="textbox",this.dragging=!1,this.clearable=!1}addFiles(t){if(!t.length)return;const e=Array.from(t);this.value=this.files=this.multiple?this.files.concat(e):e}onConnected(){this.validate(),this.on("click",(t=>{t.target!==this.body&&this.body.focus()}),{id:[a],passive:!0}),this.body.on("input",(t=>{"file"===this.type?this.addFiles(this.body.files):this.value=t.target.value,this.dirty||(this.dirty=!0)}),{id:[a],passive:!0}).on("focusout",(()=>{this.touched=!0}),{id:[a],passive:!0,once:!0})}onDisconnected(){this.off({id:[a]})}};n=new WeakMap,(0,i.gn)([(0,r.Ps)({observe:!1}),(0,i.w6)("design:type",Boolean)],d.prototype,"empty",void 0),(0,i.gn)([(0,r.Ps)({observe:!1,render:!1}),(0,i.w6)("design:type",String)],d.prototype,"role",void 0),(0,i.gn)([(0,r.Ps)({key:"readonly"}),(0,i.w6)("design:type",Boolean)],d.prototype,"readOnly",void 0),(0,i.gn)([(0,r.Ps)(),(0,i.w6)("design:type",String)],d.prototype,"interface",void 0),(0,i.gn)([(0,r.Ps)(),(0,i.w6)("design:type",String)],d.prototype,"accept",void 0),(0,i.gn)([(0,r.Ps)(),(0,i.w6)("design:type",String)],d.prototype,"placeholder",void 0),(0,i.gn)([(0,r.Ps)(),(0,i.w6)("design:type",String)],d.prototype,"label",void 0),(0,i.gn)([(0,r.Ps)({observe:!1,render:!1}),(0,i.w6)("design:type",Boolean)],d.prototype,"dragging",void 0),(0,i.gn)([(0,r.Ps)({update(t,e,o){"file"===e&&t.on("click",(e=>{t.body.focus(),t.body.click()}),{id:[a]+".file",passive:!0}),"file"===o&&t.off({id:[a]+".file"})}}),(0,i.w6)("design:type",String)],d.prototype,"type",void 0),(0,i.gn)([(0,r.Ps)({render:!1}),(0,i.w6)("design:type",Boolean)],d.prototype,"expanded",void 0),(0,i.gn)([(0,r.Ps)({parse:(t,e)=>("number"===t.type&&(e=""===e?null:isNaN(+e)?0:+e),e),update(t,e){"file"===t.type?(t.empty=!(null==e?void 0:e.length)||!e,t.render()):(t.empty=null==e||""===e,t.body.value=null!=e?e:null,t.validate())},render:!1,reflect:!1}),(0,i.w6)("design:type",Object)],d.prototype,"value",void 0),(0,i.gn)([(0,r.Ps)(),(0,i.w6)("design:type",Boolean)],d.prototype,"multiple",void 0),(0,i.gn)([(0,r.Ps)(),(0,i.w6)("design:type",String)],d.prototype,"autocomplete",void 0),(0,i.gn)([(0,r.Ps)(),(0,i.w6)("design:type",Number)],d.prototype,"max",void 0),(0,i.gn)([(0,r.Ps)(),(0,i.w6)("design:type",Number)],d.prototype,"min",void 0),(0,i.gn)([(0,r.Ps)(),(0,i.w6)("design:type",Number)],d.prototype,"maxLength",void 0),(0,i.gn)([(0,r.Ps)(),(0,i.w6)("design:type",Number)],d.prototype,"minLength",void 0),(0,i.gn)([(0,r.Ps)(),(0,i.w6)("design:type",String)],d.prototype,"pattern",void 0),(0,i.gn)([(0,r.Ps)(),(0,i.w6)("design:type",Number)],d.prototype,"size",void 0),(0,i.gn)([(0,r.Ps)(),(0,i.w6)("design:type",Number)],d.prototype,"step",void 0),(0,i.gn)([(0,r.Ps)(),(0,i.w6)("design:type",Boolean)],d.prototype,"clearable",void 0),d=(0,i.gn)([(0,r.W_)({tag:"m-input",css:s.Z})],d)},9312:(t,e,o)=>{"use strict";function n(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s}function i(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function r(t,e,o,n){return new(o||(o=Promise))((function(i,r){function s(t){try{d(n.next(t))}catch(t){r(t)}}function a(t){try{d(n.throw(t))}catch(t){r(t)}}function d(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,a)}d((n=n.apply(t,e||[])).next())}))}o.d(e,{gn:()=>n,w6:()=>i,mG:()=>r}),Object.create,Object.create},6472:(t,e,o)=>{var n;!function(t){!function(e){var n="object"==typeof o.g?o.g:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),i=r(t);function r(t,e){return function(o,n){"function"!=typeof t[o]&&Object.defineProperty(t,o,{configurable:!0,writable:!0,value:n}),e&&e(o,n)}}void 0===n.Reflect?n.Reflect=t:i=r(n.Reflect,i),function(t){var e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol,n=o&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",i=o&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",r="function"==typeof Object.create,s={__proto__:[]}instanceof Array,a=!r&&!s,d={create:r?function(){return C(Object.create(null))}:s?function(){return C({__proto__:null})}:function(){return C({})},has:a?function(t,o){return e.call(t,o)}:function(t,e){return e in t},get:a?function(t,o){return e.call(t,o)?t[o]:void 0}:function(t,e){return t[e]}},l=Object.getPrototypeOf(Function),p="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,c=p||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],o=function(){function t(t,e,o){this._index=0,this._keys=t,this._values=e,this._selector=o}return t.prototype["@@iterator"]=function(){return this},t.prototype[i]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var o=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:o,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var o=this._find(t,!0);return this._values[o]=e,this},e.prototype.delete=function(e){var o=this._find(e,!1);if(o>=0){for(var n=this._keys.length,i=o+1;i<n;i++)this._keys[i-1]=this._keys[i],this._values[i-1]=this._values[i];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new o(this._keys,this._values,n)},e.prototype.values=function(){return new o(this._keys,this._values,r)},e.prototype.entries=function(){return new o(this._keys,this._values,s)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[i]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function n(t,e){return t}function r(t,e){return e}function s(t,e){return[t,e]}}():Map,u=p||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new c}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[i]=function(){return this.keys()},t}():Set,h=new(p||"function"!=typeof WeakMap?function(){var t=d.create(),o=n();return function(){function t(){this._key=n()}return t.prototype.has=function(t){var e=i(t,!1);return void 0!==e&&d.has(e,this._key)},t.prototype.get=function(t){var e=i(t,!1);return void 0!==e?d.get(e,this._key):void 0},t.prototype.set=function(t,e){return i(t,!0)[this._key]=e,this},t.prototype.delete=function(t){var e=i(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=n()},t}();function n(){var e;do{e="@@WeakMap@@"+s()}while(d.has(t,e));return t[e]=!0,e}function i(t,n){if(!e.call(t,o)){if(!n)return;Object.defineProperty(t,o,{value:d.create()})}return t[o]}function r(t,e){for(var o=0;o<e;++o)t[o]=255*Math.random()|0;return t}function s(){var t,e=(t=16,"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):r(new Uint8Array(t),t):r(new Array(t),t));e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var o="",n=0;n<16;++n){var i=e[n];4!==n&&6!==n&&8!==n||(o+="-"),i<16&&(o+="0"),o+=i.toString(16).toLowerCase()}return o}}():WeakMap);function f(t,e,o){var n=h.get(t);if(k(n)){if(!o)return;n=new c,h.set(t,n)}var i=n.get(e);if(k(i)){if(!o)return;i=new c,n.set(e,i)}return i}function y(t,e,o){if(g(t,e,o))return!0;var n=R(e);return!O(n)&&y(t,n,o)}function g(t,e,o){var n=f(e,o,!1);return!k(n)&&!!n.has(t)}function v(t,e,o){if(g(t,e,o))return b(t,e,o);var n=R(e);return O(n)?void 0:v(t,n,o)}function b(t,e,o){var n=f(e,o,!1);if(!k(n))return n.get(t)}function m(t,e,o,n){f(o,n,!0).set(t,e)}function w(t,e){var o=x(t,e),n=R(t);if(null===n)return o;var i=w(n,e);if(i.length<=0)return o;if(o.length<=0)return i;for(var r=new u,s=[],a=0,d=o;a<d.length;a++){var l=d[a];r.has(l)||(r.add(l),s.push(l))}for(var p=0,c=i;p<c.length;p++)l=c[p],r.has(l)||(r.add(l),s.push(l));return s}function x(t,e){var o=[],n=f(t,e,!1);if(k(n))return o;for(var r=function(t){var e=A(t,i);if(!P(e))throw new TypeError;var o=e.call(t);if(!S(o))throw new TypeError;return o}(n.keys()),s=0;;){var a=M(r);if(!a)return o.length=s,o;var d=a.value;try{o[s]=d}catch(t){try{B(r)}finally{throw t}}s++}}function _(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function k(t){return void 0===t}function O(t){return null===t}function S(t){return"object"==typeof t?null!==t:"function"==typeof t}function j(t,e){switch(_(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var o=3===e?"string":5===e?"number":"default",i=A(t,n);if(void 0!==i){var r=i.call(t,o);if(S(r))throw new TypeError;return r}return function(t,e){if("string"===e){var o=t.toString;if(P(o)&&!S(i=o.call(t)))return i;if(P(n=t.valueOf)&&!S(i=n.call(t)))return i}else{var n;if(P(n=t.valueOf)&&!S(i=n.call(t)))return i;var i,r=t.toString;if(P(r)&&!S(i=r.call(t)))return i}throw new TypeError}(t,"default"===o?"number":o)}function E(t){var e=j(t,3);return"symbol"==typeof e?e:function(t){return""+t}(e)}function z(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function P(t){return"function"==typeof t}function T(t){return"function"==typeof t}function A(t,e){var o=t[e];if(null!=o){if(!P(o))throw new TypeError;return o}}function M(t){var e=t.next();return!e.done&&e}function B(t){var e=t.return;e&&e.call(t)}function R(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===l)return e;if(e!==l)return e;var o=t.prototype,n=o&&Object.getPrototypeOf(o);if(null==n||n===Object.prototype)return e;var i=n.constructor;return"function"!=typeof i||i===t?e:i}function C(t){return t.__=void 0,delete t.__,t}t("decorate",(function(t,e,o,n){if(k(o)){if(!z(t))throw new TypeError;if(!T(e))throw new TypeError;return function(t,e){for(var o=t.length-1;o>=0;--o){var n=(0,t[o])(e);if(!k(n)&&!O(n)){if(!T(n))throw new TypeError;e=n}}return e}(t,e)}if(!z(t))throw new TypeError;if(!S(e))throw new TypeError;if(!S(n)&&!k(n)&&!O(n))throw new TypeError;return O(n)&&(n=void 0),function(t,e,o,n){for(var i=t.length-1;i>=0;--i){var r=(0,t[i])(e,o,n);if(!k(r)&&!O(r)){if(!S(r))throw new TypeError;n=r}}return n}(t,e,o=E(o),n)})),t("metadata",(function(t,e){return function(o,n){if(!S(o))throw new TypeError;if(!k(n)&&!function(t){switch(_(t)){case 3:case 4:return!0;default:return!1}}(n))throw new TypeError;m(t,e,o,n)}})),t("defineMetadata",(function(t,e,o,n){if(!S(o))throw new TypeError;return k(n)||(n=E(n)),m(t,e,o,n)})),t("hasMetadata",(function(t,e,o){if(!S(e))throw new TypeError;return k(o)||(o=E(o)),y(t,e,o)})),t("hasOwnMetadata",(function(t,e,o){if(!S(e))throw new TypeError;return k(o)||(o=E(o)),g(t,e,o)})),t("getMetadata",(function(t,e,o){if(!S(e))throw new TypeError;return k(o)||(o=E(o)),v(t,e,o)})),t("getOwnMetadata",(function(t,e,o){if(!S(e))throw new TypeError;return k(o)||(o=E(o)),b(t,e,o)})),t("getMetadataKeys",(function(t,e){if(!S(t))throw new TypeError;return k(e)||(e=E(e)),w(t,e)})),t("getOwnMetadataKeys",(function(t,e){if(!S(t))throw new TypeError;return k(e)||(e=E(e)),x(t,e)})),t("deleteMetadata",(function(t,e,o){if(!S(e))throw new TypeError;k(o)||(o=E(o));var n=f(e,o,!1);if(k(n))return!1;if(!n.delete(t))return!1;if(n.size>0)return!0;var i=h.get(e);return i.delete(o),i.size>0||h.delete(e),!0}))}(i)}()}(n||(n={}))}},e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,o),i.exports}return o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o(993)})()}));