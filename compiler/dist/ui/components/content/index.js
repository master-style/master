/*! For license information please see index.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Master=e():t.Master=e()}(globalThis,(function(){return(()=>{var t={223:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var i=n(3645),o=n.n(i)()((function(t){return t[1]}));o.push([t.id,":host{--offset-top: var(--content-offset-top, 0px);--offset-bottom: var(--content-offset-bottom, 0px);--offset-left: var(--content-offset-left, 0px);--offset-right: var(--content-offset-right, 0px);--bar-p: var(--content-bar-p, 4px);position:relative;contain:style;width:100%;display:block;flex-direction:column;-webkit-user-drag:none;-webkit-touch-callout:none;-ms-overflow-style:none;-ms-user-select:none;user-select:none;box-sizing:border-box}:host([changing]){overflow:hidden !important;contain:style}:host([collapse-x]){min-width:0 !important;will-change:width,opacity}:host([collapse-y]){min-height:0 !important;will-change:height,opacity}:host([collapse-x][collapse-y]){min-height:0 !important;min-width:0 !important;will-change:height,width,opacity}:host([scroll-y]) [part=root],:host([scroll-x]) [part=root]{will-change:scroll-position,-webkit-mask-image;-webkit-overflow-scrolling:touch;-ms-overflow-style:none;scrollbar-width:none}:host([scroll-y]) [part=root]::-webkit-scrollbar,:host([scroll-x]) [part=root]::-webkit-scrollbar{display:none}:host([scroll-x]) [part=root]{overflow-y:hidden;overflow-x:auto;overscroll-behavior-x:contain;touch-action:pan-x}:host([scroll-y]) [part=root]{overflow-y:auto;overflow-x:hidden;overscroll-behavior-y:contain;touch-action:pan-y}:host([scroll-x][scroll-y]) [part=root]{overflow:auto;touch-action:manipulation}:host([overscroll]){-ms-scroll-chaining:auto auto;overscroll-behavior:auto auto}[part=root]{display:inherit;width:100%;height:100%;align-items:inherit;justify-content:inherit;flex-direction:inherit;max-height:inherit;box-sizing:border-box;contain:style;margin:auto;padding:var(--offset-top) var(--offset-right) var(--offset-bottom) var(--offset-left)}m-bar{position:absolute;display:block;z-index:1010;pointer-events:none !important;box-sizing:border-box;contain:content;opacity:1;padding:var(--bar-p)}m-bar[hidden]{opacity:0;transition:opacity .2s ease-out .5s;will-change:opacity}m-thumb{position:relative;display:block;border-radius:2px;box-sizing:border-box;background-color:var(--f-fadest);contain:strict;will-change:transform;opacity:.5}m-bar[part=x]{bottom:0;left:var(--offset-left);width:calc(100% - var(--offset-left) - var(--offset-right))}m-bar[part=x] m-thumb{height:4px}m-bar[part=y]{top:var(--offset-top);right:0;height:calc(100% - var(--offset-top) - var(--offset-bottom))}m-bar[part=y] m-thumb{width:4px}",""]);const r=o},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);i&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},453:(t,e,n)=>{"use strict";function i(t){return(e,n)=>{const i=n.split("Emitter")[0],o=new CustomEvent(i,t),r=function(e){if(this.emit||(null==t?void 0:t.force))return o.data=e,this.dispatchEvent(o),o};return{get:()=>r}}}n.d(e,{j:()=>i})},5109:(t,e,n)=>{"use strict";n.d(e,{Ps:()=>o,W_:()=>c,ju:()=>r.j,Qu:()=>p}),n(6472);const i={reflect:!0,observe:!0,render:!0};function o(t){return t=Object.assign(Object.assign({},i),t),(e,n)=>{t.type=Reflect.getMetadata("design:type",e,n).name,t.propKey=n;const i="_"+n,o=t.key=t.key||n.replace(/([A-Z])/g,(t=>"-"+t[0])).toLowerCase(),r=e.constructor,s=t.update,a=t.parse,c={enumerable:!1,get(){return this[i]},set(e,n){const r=this[i];a&&(e=a(this,e,r)),e!==r&&(this[i]=e,this.initial&&(s&&s(this,e,r),t.reflect&&!n&&("Boolean"===t.type?this.toggleAttribute(o,!!e):this.setAttribute(o,e)),t.render&&this.render&&this.render()))}};return t.set=c.set,t.observe&&(r.observedAttributes||(r.observedAttributes=[]),r.observedAttributes.push(o)),r.attrsOptions?r.attrsOptions=Object.assign({},r.attrsOptions):r.attrsOptions={},r.attrsOptions[o]=t,c}}var r=n(453);const s=new CustomEvent("ready"),a={shadow:!0};function c(t){return t=Object.assign(Object.assign({},a),t),function(e){e.elementName=t.tag.replace("m-","");const n=e.prototype,i=e.attrsOptions,o=e.propsOptions,r=n.onConnected,a=n.onDisconnected,c=n.onAttrChanged;n.attributeChangedCallback=function(t,e,n){if(n===e)return;const o=i[t],r=o.type;n=l(n,r),e=l(e,r),o.set.call(this,n,!0),c&&c.call(this,t,n,e)},n.connectedCallback=function(){if(this.ready=!1,this.initial=!1,o)for(const t in e.propsOptions){const e=o[t],n=this["_"+t],i=e.update;i&&i(this,n)}if(i){const t=this.attributes;for(const e in i){const n=i[e],o=this["_"+n.propKey],r=t[e];if(void 0===o)continue;let s,a;if(r&&(a=l(r.value,n.type)),a!==o){if(void 0!==a)s=a;else{if(void 0===o)continue;s=o}n.reflect&&("Boolean"===n.type?this.toggleAttribute(e,s):this.setAttribute(e,s))}}}if(t.shadow&&!this.shadowRoot){const e=this.attachShadow({mode:"open"});if(t.css&&e.adoptedStyleSheets){const n=new CSSStyleSheet;n.replaceSync(t.css),e.adoptedStyleSheets=[n]}else if(t.css){const n=document.createElement("style");n.innerHTML=t.css,e.appendChild(n)}}if(this.render&&this.render(),this.initial=!0,i)for(const t in e.attrsOptions){const e=i[t],n=this["_"+e.propKey],o=e.update;o&&o(this,n)}this.ready=!0,this.emit&&this.dispatchEvent(s),r&&r.call(this)},n.disconnectedCallback=function(){this.removeRender&&this.removeRender(),a&&a.call(this)},window.customElements.define(t.tag,e)}}const l=(t,e)=>{if("undefined"!==t)switch(e){case"Number":return""===t?null:isNaN(+t)?t:+t;case"Boolean":return!(""!==t&&!t);default:return t}};var h=n(9312);class u extends HTMLElement{constructor(){super(...arguments),this.template=window.Master((()=>{const t=!this.href&&"anchor"!==this.type||this.disabled?this.type||this.disabled?"button":null:"a",e=["m-icon",{$if:this.busy,name:"spinner",part:"spinner"}];switch(t){case"button":return[t,{class:"touch",part:"root",disabled:this.disabled,type:this.type},this.slotTemplate||["slot"],e];case"a":return[t,{class:"touch",part:"root",href:this.href,download:this.download,rel:this.rel,target:this.target},this.slotTemplate||["slot"],e];default:return["div",{part:"root"},this.slotTemplate||["slot"],e]}}))}render(){this.template.render(this.shadowRoot)}}(0,h.gn)([o({update(t,e,n){"submit"===e?t.on("click",(e=>{const n=t.closest("form");if(n.querySelectorAll("m-input,m-textarea,m-select,m-check").forEach((t=>{t.dirty=!0})),n){if(!n.checkValidity())return;n.requestSubmit?n.requestSubmit():n.submit()}}),{id:[t],passive:!0}):"submit"===e&&"submit"!==n||t.off({id:[t]})}}),(0,h.w6)("design:type",String)],u.prototype,"type",void 0),(0,h.gn)([o(),(0,h.w6)("design:type",Boolean)],u.prototype,"busy",void 0),(0,h.gn)([o(),(0,h.w6)("design:type",String)],u.prototype,"rel",void 0),(0,h.gn)([o(),(0,h.w6)("design:type",String)],u.prototype,"href",void 0),(0,h.gn)([o(),(0,h.w6)("design:type",Boolean)],u.prototype,"disabled",void 0),(0,h.gn)([o(),(0,h.w6)("design:type",Number)],u.prototype,"download",void 0),(0,h.gn)([o(),(0,h.w6)("design:type",String)],u.prototype,"target",void 0);class p extends HTMLElement{constructor(){super(...arguments),this.hidden=!1,this.duration=500,this.easing="cubic-bezier(.25,.8,.25,1)",this.triggerEvent="click",this.emit=!1,this.animations=[]}prepare(){return(0,h.mG)(this,void 0,void 0,(function*(){if(this.triggerEvent){const t="toggle-"+this.constructor.elementName;$("["+t+"]").forEach((e=>{if(this.matches(e.getAttribute(t))){const t=this.hidden;e.toggleAttribute("aria-expanded",!t),e.toggleAttribute("active",!t);const n=e.querySelector(".toggled");n&&n.toggleAttribute("active",!this.hidden)}}))}if(this.animation)for(const t of this.animations)t.reverse();else if(this.duration){this.toggleAttribute("changing",!0),yield this.toggling({easing:this.easing,duration:this.duration});const t=this.hidden;t&&this.toggleAttribute("hidden",!0),this.toggleAttribute("changing",!1),this.animation=null,this.animations=[];const e=t?this.onClosed:this.onOpened;e&&e.call(this)}}))}open(){return(0,h.mG)(this,void 0,void 0,(function*(){if(!this.hidden)return!1;this._hidden=!1,this.toggleAttribute("hidden",!1);const t=this.onOpen;return t&&(yield t.call(this)),this.openEmitter(),yield this.changing=this.prepare(),this.openedEmitter(),!0}))}close(){return(0,h.mG)(this,void 0,void 0,(function*(){if(this.hidden)return!1;this._hidden=!0;const t=this.onClose;return t&&(yield t.call(this)),this.closeEmitter(),yield this.changing=this.prepare(),this.closedEmitter(),!0}))}toggle(t){return(0,h.mG)(this,void 0,void 0,(function*(){t="boolean"==typeof t?t:this.hidden,yield t?this.open():this.close()}))}onDisconnected(){document.body.off({id:[this,this.constructor.elementName]})}}(0,h.gn)([o({update(t,e){if(t.ready){const n=t[e?"onClose":"onOpen"];n&&n(),t.prepare()}}}),(0,h.w6)("design:type",Boolean)],p.prototype,"hidden",void 0),(0,h.gn)([o({reflect:!1}),(0,h.w6)("design:type",Object)],p.prototype,"duration",void 0),(0,h.gn)([o({reflect:!1}),(0,h.w6)("design:type",Boolean)],p.prototype,"fade",void 0),(0,h.gn)([o({reflect:!1}),(0,h.w6)("design:type",Object)],p.prototype,"easing",void 0),(0,h.gn)([o({reflect:!1,update(t,e,n){const i=t.constructor.elementName;if(n&&document.body.off({id:[t,i]}),e){const n="toggle-"+i,o=e.split(","),r=t.handleTrigger;document.body.on(o.join(" "),"["+n+"]",(function(e){const i=this;if(this.disabled)return;const s=i.getAttribute(n);if(!t.matches(s))return;const a=e.type;let c;if(o.length>1){if(c=t.hidden,c&&-1===o[0].split(" ").indexOf(a)||!c&&-1===o[1].split(" ").indexOf(a))return;if(r&&!1===r.call(t,e,c))return}else c=!("checked"in i)||"input"!==a&&"change"!==a?t.hidden:!!i.checked;c&&!t.animation&&(t.trigger=i),t.toggle(c)}),{passive:!0,id:[t,i]})}}}),(0,h.w6)("design:type",String)],p.prototype,"triggerEvent",void 0),(0,h.gn)([o({reflect:!1,render:!1}),(0,h.w6)("design:type",Boolean)],p.prototype,"emit",void 0),(0,h.gn)([(0,r.j)(),(0,h.w6)("design:type",Function)],p.prototype,"openEmitter",void 0),(0,h.gn)([(0,r.j)(),(0,h.w6)("design:type",Function)],p.prototype,"closeEmitter",void 0),(0,h.gn)([(0,r.j)(),(0,h.w6)("design:type",Function)],p.prototype,"openedEmitter",void 0),(0,h.gn)([(0,r.j)(),(0,h.w6)("design:type",Function)],p.prototype,"closedEmitter",void 0);class d extends HTMLElement{constructor(){super(...arguments),this.dirty=!1,this.touched=!1}validate(){if(!this.ready)return;let t;this.valid=this.validity.valid,this.invalid=!this.validity.valid;for(const n in this.validity){const i=this.validity[n],o=this["when"+(e=n,e.charAt(0).toUpperCase()+e.slice(1))];if(void 0!==o){if(i){t=o;break}t=""}}var e;void 0!==t?this.prompt=t:this.toggleAttribute("prompt",!1)}render(){this.controlTemplate.render(this),this.template.render(this.shadowRoot)}}(0,h.gn)([o({render:!1}),(0,h.w6)("design:type",Boolean)],d.prototype,"emit",void 0),(0,h.gn)([o(),(0,h.w6)("design:type",Boolean)],d.prototype,"busy",void 0),(0,h.gn)([o(),(0,h.w6)("design:type",String)],d.prototype,"name",void 0),(0,h.gn)([o(),(0,h.w6)("design:type",Boolean)],d.prototype,"disabled",void 0),(0,h.gn)([o({update:t=>t.validate()}),(0,h.w6)("design:type",Boolean)],d.prototype,"required",void 0),(0,h.gn)([o({reflect:!1,update:t=>t.validate()}),(0,h.w6)("design:type",String)],d.prototype,"whenBadInput",void 0),(0,h.gn)([o({reflect:!1,update:t=>t.validate()}),(0,h.w6)("design:type",String)],d.prototype,"whenCustomError",void 0),(0,h.gn)([o({reflect:!1,update:t=>t.validate()}),(0,h.w6)("design:type",String)],d.prototype,"whenPatternMismatch",void 0),(0,h.gn)([o({reflect:!1,update:t=>t.validate()}),(0,h.w6)("design:type",String)],d.prototype,"whenRangeOverflow",void 0),(0,h.gn)([o({reflect:!1,update:t=>t.validate()}),(0,h.w6)("design:type",String)],d.prototype,"whenRangeUnderflow",void 0),(0,h.gn)([o({reflect:!1,update:t=>t.validate()}),(0,h.w6)("design:type",String)],d.prototype,"whenStepMismatch",void 0),(0,h.gn)([o({reflect:!1,update:t=>t.validate()}),(0,h.w6)("design:type",String)],d.prototype,"whenTooLong",void 0),(0,h.gn)([o({reflect:!1,update:t=>t.validate()}),(0,h.w6)("design:type",String)],d.prototype,"whenTypeMismatch",void 0),(0,h.gn)([o({reflect:!1,update:t=>t.validate()}),(0,h.w6)("design:type",String)],d.prototype,"whenValueMissing",void 0),(0,h.gn)([o({reflect:!1,update:t=>t.validate()}),(0,h.w6)("design:type",String)],d.prototype,"whenValid",void 0),(0,h.gn)([o({observe:!1,render:!1}),(0,h.w6)("design:type",String)],d.prototype,"prompt",void 0),(0,h.gn)([o({observe:!1,render:!1}),(0,h.w6)("design:type",Boolean)],d.prototype,"valid",void 0),(0,h.gn)([o({observe:!1,render:!1}),(0,h.w6)("design:type",Boolean)],d.prototype,"warning",void 0),(0,h.gn)([o({observe:!1,render:!1}),(0,h.w6)("design:type",Boolean)],d.prototype,"invalid",void 0),(0,h.gn)([o({observe:!1,render:!1}),(0,h.w6)("design:type",Boolean)],d.prototype,"dirty",void 0),(0,h.gn)([o({observe:!1,render:!1}),(0,h.w6)("design:type",Boolean)],d.prototype,"touched",void 0)},1546:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ContentElement:()=>D});var i=n(9312),o=n(5109);const r=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},s="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;var a="object"==typeof self&&self&&self.Object===Object&&self;const c=s||a||Function("return this")(),l=function(){return c.Date.now()},h=c.Symbol;var u=Object.prototype,p=u.hasOwnProperty,d=u.toString,f=h?h.toStringTag:void 0;var y=Object.prototype.toString;var g=h?h.toStringTag:void 0;const v=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":g&&g in Object(t)?function(t){var e=p.call(t,f),n=t[f];try{t[f]=void 0;var i=!0}catch(t){}var o=d.call(t);return i&&(e?t[f]=n:delete t[f]),o}(t):function(t){return y.call(t)}(t)};var m=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,_=/^0o[0-7]+$/i,x=parseInt;const j=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==v(t)}(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(m,"");var n=b.test(t);return n||_.test(t)?x(t.slice(2),n?2:8):w.test(t)?NaN:+t};var k=Math.max,S=Math.min;const E=function(t,e,n){var i,o,s,a,c,h,u=0,p=!1,d=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=i,r=o;return i=o=void 0,u=e,a=t.apply(r,n)}function g(t){return u=t,c=setTimeout(m,e),p?y(t):a}function v(t){var n=t-h;return void 0===h||n>=e||n<0||d&&t-u>=s}function m(){var t=l();if(v(t))return w(t);c=setTimeout(m,function(t){var n=e-(t-h);return d?S(n,s-(t-u)):n}(t))}function w(t){return c=void 0,f&&i?y(t):(i=o=void 0,a)}function b(){var t=l(),n=v(t);if(i=arguments,o=this,h=t,n){if(void 0===c)return g(h);if(d)return clearTimeout(c),c=setTimeout(m,e),y(h)}return void 0===c&&(c=setTimeout(m,e)),a}return e=j(e)||0,r(n)&&(p=!!n.leading,s=(d="maxWait"in n)?k(j(n.maxWait)||0,e):s,f="trailing"in n?!!n.trailing:f),b.cancel=function(){void 0!==c&&clearTimeout(c),u=0,i=h=o=c=void 0},b.flush=function(){return void 0===c?a:w(l())},b};var O,T,Y,M,A,X,P,Q,B,R,C=n(223);function H(t){return"number"==typeof t&&!isNaN(t)}const W="content",F="px",N={X:"width",Y:"height"},$={X:"x",Y:"y"},L={X:"scrollWidth",Y:"scrollHeight"},z={X:"scrollLeft",Y:"scrollTop"},I={X:"offsetLeft",Y:"offsetTop"},K={X:"offsetWidth",Y:"offsetHeight"},U={X:"clientWidth",Y:"clientHeight"};let D=class extends o.Qu{constructor(){super(...arguments),O.set(this,{}),T.set(this,{}),Y.set(this,{}),M.set(this,{}),A.set(this,void 0),X.set(this,void 0),P.set(this,void 0),Q.set(this,{}),B.set(this,0),this.template=window.Master((()=>["slot",{part:"root",$created:t=>this.root=t},"slot",{name:"part"},"m-bar",{part:"x",hidden:!this.scrolling,$if:this.scrollX,$created:t=>(0,i.Q_)(this,Y).X=t},["m-thumb",{$created:t=>(0,i.Q_)(this,Q).X=t}],"m-bar",{part:"y",hidden:!this.scrolling,$if:this.scrollY,$created:t=>(0,i.Q_)(this,Y).Y=t},["m-thumb",{$created:t=>(0,i.Q_)(this,Q).Y=t}]])),this.scrolling=!1,this.x=0,this.y=0,this.duration=300,this.emit=!1,this.center=!0,this.guideSize=48,this.collapseX=!1,this.collapseY=!1,R.set(this,void 0)}render(){this.template.render(this.shadowRoot),this.renderScroll()}enable(){(0,i.Q_)(this,P)||((0,i.YH)(this,P,!0),this.scrolling=!1,this.root.on("scroll",(t=>{this.renderScroll()&&(this.scrolling||(this.scrolling=!0,this.template.render(this.shadowRoot),this.scrollStartEmitter()),this.scrollEmitter(),(0,i.Q_)(this,A)&&(0,i.YH)(this,A,clearTimeout((0,i.Q_)(this,A))),(0,i.YH)(this,A,setTimeout((()=>{(0,i.Q_)(this,X)&&(0,i.YH)(this,X,cancelAnimationFrame((0,i.Q_)(this,X))),this.scrolling=!1,(0,i.Q_)(this,O).X=(0,i.Q_)(this,O).Y=0,this.template.render(this.shadowRoot),this.scrollEndEmitter()}),100)))}),{id:[W],passive:!0}).on("slotchange",(t=>{this.renderScroll(),this.changeEmitter()}),{id:[W],passive:!0}),(0,i.YH)(this,R,new MutationObserver(E((()=>{this.renderScroll()}),70))),(0,i.Q_)(this,R).observe(this,{characterData:!0,childList:!0,subtree:!0}),window.on("resize",E((()=>{this.renderScroll()}),70),{id:[this,W]}))}disable(){(0,i.Q_)(this,P)&&((0,i.YH)(this,P,!1),this.root.off({id:["scroll"]}),window.off({id:[this,W]}),(0,i.Q_)(this,R).disconnect())}get scrollable(){return!!(this.scrollX&&this.maxX||this.scrollY&&this.maxY)}to(t,e,n){if(!this.scrollable)return;const o={X:t.x,Y:t.y};if(t instanceof HTMLElement){const e=t,n=t=>{if(o[t]=e[I[t]],this.center){const n=e[U[t]],i=(this.root[K[t]]-n)/2;o[t]<i?o[t]=0:o[t]>=this["max"+t]+i?o[t]=this["max"+t]:o[t]-=i}};this.scrollX&&n("X"),this.scrollY&&n("Y")}else{const t=t=>{o[t]>this["max"+t]?o[t]=this["max"+t]:o[t]<0&&(o[t]=0);const e=this[$[t]]=this.root[z[t]];if(o[t]===e)return o[t]=null};this.scrollX&&t("X"),this.scrollY&&t("Y")}if("function"==typeof e&&(n=e,e=this.duration),this.scrolling&&((0,i.Q_)(this,X)&&(0,i.YH)(this,X,cancelAnimationFrame((0,i.Q_)(this,X))),(0,i.Q_)(this,O).X=(0,i.Q_)(this,O).Y=0),0===e)this.scrollX&&H(o.X)&&(this.x=this.root.scrollLeft=o.X),this.scrollY&&H(o.Y)&&(this.y=this.root.scrollTop=o.Y);else{e=e||this.duration,this.scrolling=!0;const t=(o,r,s)=>{(0,i.Q_)(this,O)[o]+=20;const a=(c=(0,i.Q_)(this,O)[o],l=r,h=s-r,c=.5*(c/=e),Math.round(l+h*c));var c,l,h;r!==Math.round(s)?(this[$[o]]=this.root[z[o]]=a,(0,i.YH)(this,X,requestAnimationFrame((()=>t(o,a,s))))):(this.scrolling=!1,n&&n())};this.scrollX&&H(o.X)&&t("X",this.x=this.root[z.X],o.X),this.scrollY&&H(o.Y)&&t("Y",this.y=this.root[z.Y],o.Y)}}renderScroll(){const t=t=>{if(!this["scroll"+t])return!1;const e=(0,i.Q_)(this,M)[t]=this.root[L[t]],n=this[U[t]],o=this.root[U[t]],r=this[$[t]]=this.root[z[t]],s=this["max"+t]=e-o<0?0:e-o,a=r<=0?-1:r>=s?1:0;if(this.guide){const e=this.guideSize,i=r<e?r:e,o=r>s-e?n+r-s:n-e,a=this.scrollable?`linear-gradient(to ${"X"===t?"right":"bottom"},rgba(0,0,0,0) 0px,rgba(0,0,0,1) ${i}px,rgba(0,0,0,1) ${o}px,rgba(0,0,0,0) ${n}px)`:"";this.root.style.webkitMaskImage=this.root.style.maskImage=a}this.scrollable||(this.to({x:0,y:0}),(0,i.YH)(this,B,0));let c=2*s/3;(0,i.Q_)(this,B)>0&&(c=(0,i.Q_)(this,B)+(s-(0,i.Q_)(this,B))/2),(0===s||r>=c&&c>(0,i.Q_)(this,B))&&((0,i.YH)(this,B,c),this.moreEmitter()),this["reach"+t]!==a&&(this["reach"+t]=a);const l=(0,i.Q_)(this,Q)[t];if(l){const e=r<0?0:r>s?s:r,n=window.getComputedStyle((0,i.Q_)(this,Y)[t]),o=parseInt(n.padding),a=parseInt(n[N[t]])-2*o,c=a/(s+a)*a;l.style.transform="translate"+t+"("+e/(s+a)*a+"px)",(0,i.Q_)(this,T)[t]!==c&&((0,i.Q_)(this,T)[t]=c,l.style[N[t]]=c+"px")}return r!==s};return t("X")||t("Y")}stop(){(0,i.Q_)(this,X)&&(0,i.YH)(this,X,cancelAnimationFrame((0,i.Q_)(this,X))),this.scrolling=!1,(0,i.Q_)(this,O).X=(0,i.Q_)(this,O).Y=0,this.render()}onOpened(){this.renderScroll()}toggling(t){const e=[],n={},i={};return(this.collapseY||this.collapseX&&this.collapseY)&&(n.height=0+F,i.height=this.offsetHeight+F),(this.collapseX||this.collapseX&&this.collapseY)&&(n.width=0+F,i.width=this.offsetWidth+F),this.fade&&(n.opacity=0,i.opacity=1),this.hidden?e.push(i,n):e.push(n,i),this.animation=this.animate(e,t),this.animations.push(this.animation),new Promise((t=>{this.animation.onfinish=t}))}onDisconnected(){document.body.off({id:[this,W]}),this.disable()}};O=new WeakMap,T=new WeakMap,Y=new WeakMap,M=new WeakMap,A=new WeakMap,X=new WeakMap,P=new WeakMap,Q=new WeakMap,B=new WeakMap,R=new WeakMap,(0,i.gn)([(0,o.ju)(),(0,i.w6)("design:type",Function)],D.prototype,"moreEmitter",void 0),(0,i.gn)([(0,o.ju)(),(0,i.w6)("design:type",Function)],D.prototype,"changeEmitter",void 0),(0,i.gn)([(0,o.ju)(),(0,i.w6)("design:type",Function)],D.prototype,"scrollEmitter",void 0),(0,i.gn)([(0,o.ju)(),(0,i.w6)("design:type",Function)],D.prototype,"scrollStartEmitter",void 0),(0,i.gn)([(0,o.ju)(),(0,i.w6)("design:type",Function)],D.prototype,"scrollEndEmitter",void 0),(0,i.gn)([(0,o.Ps)({reflect:!1,render:!1}),(0,i.w6)("design:type",Number)],D.prototype,"duration",void 0),(0,i.gn)([(0,o.Ps)({reflect:!1,render:!1}),(0,i.w6)("design:type",Boolean)],D.prototype,"emit",void 0),(0,i.gn)([(0,o.Ps)(),(0,i.w6)("design:type",Boolean)],D.prototype,"center",void 0),(0,i.gn)([(0,o.Ps)({reflect:!1}),(0,i.w6)("design:type",Boolean)],D.prototype,"guide",void 0),(0,i.gn)([(0,o.Ps)({reflect:!1}),(0,i.w6)("design:type",Number)],D.prototype,"guideSize",void 0),(0,i.gn)([(0,o.Ps)({update(t){t.scrollX||t.scrollY?t.enable():t.disable()}}),(0,i.w6)("design:type",Boolean)],D.prototype,"scrollY",void 0),(0,i.gn)([(0,o.Ps)({update(t){t.scrollX||t.scrollY?t.enable():t.disable()}}),(0,i.w6)("design:type",Boolean)],D.prototype,"scrollX",void 0),(0,i.gn)([(0,o.Ps)(),(0,i.w6)("design:type",Boolean)],D.prototype,"overscroll",void 0),(0,i.gn)([(0,o.Ps)({observe:!1,render:!1}),(0,i.w6)("design:type",Number)],D.prototype,"reachX",void 0),(0,i.gn)([(0,o.Ps)({observe:!1,render:!1}),(0,i.w6)("design:type",Number)],D.prototype,"reachY",void 0),(0,i.gn)([(0,o.Ps)(),(0,i.w6)("design:type",String)],D.prototype,"name",void 0),(0,i.gn)([(0,o.Ps)(),(0,i.w6)("design:type",Boolean)],D.prototype,"collapseX",void 0),(0,i.gn)([(0,o.Ps)(),(0,i.w6)("design:type",Boolean)],D.prototype,"collapseY",void 0),D=(0,i.gn)([(0,o.W_)({tag:"m-"+W,css:C.Z})],D)},9312:(t,e,n)=>{"use strict";function i(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s}function o(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function r(t,e,n,i){return new(n||(n=Promise))((function(o,r){function s(t){try{c(i.next(t))}catch(t){r(t)}}function a(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((i=i.apply(t,e||[])).next())}))}function s(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function a(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n}n.d(e,{gn:()=>i,w6:()=>o,mG:()=>r,Q_:()=>s,YH:()=>a}),Object.create,Object.create},6472:(t,e,n)=>{var i;!function(t){!function(e){var i="object"==typeof n.g?n.g:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),o=r(t);function r(t,e){return function(n,i){"function"!=typeof t[n]&&Object.defineProperty(t,n,{configurable:!0,writable:!0,value:i}),e&&e(n,i)}}void 0===i.Reflect?i.Reflect=t:o=r(i.Reflect,o),function(t){var e=Object.prototype.hasOwnProperty,n="function"==typeof Symbol,i=n&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",o=n&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",r="function"==typeof Object.create,s={__proto__:[]}instanceof Array,a=!r&&!s,c={create:r?function(){return B(Object.create(null))}:s?function(){return B({__proto__:null})}:function(){return B({})},has:a?function(t,n){return e.call(t,n)}:function(t,e){return e in t},get:a?function(t,n){return e.call(t,n)?t[n]:void 0}:function(t,e){return t[e]}},l=Object.getPrototypeOf(Function),h="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,u=h||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],n=function(){function t(t,e,n){this._index=0,this._keys=t,this._values=e,this._selector=n}return t.prototype["@@iterator"]=function(){return this},t.prototype[o]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var n=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:n,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var n=this._find(t,!0);return this._values[n]=e,this},e.prototype.delete=function(e){var n=this._find(e,!1);if(n>=0){for(var i=this._keys.length,o=n+1;o<i;o++)this._keys[o-1]=this._keys[o],this._values[o-1]=this._values[o];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new n(this._keys,this._values,i)},e.prototype.values=function(){return new n(this._keys,this._values,r)},e.prototype.entries=function(){return new n(this._keys,this._values,s)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[o]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function i(t,e){return t}function r(t,e){return e}function s(t,e){return[t,e]}}():Map,p=h||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new u}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[o]=function(){return this.keys()},t}():Set,d=new(h||"function"!=typeof WeakMap?function(){var t=c.create(),n=i();return function(){function t(){this._key=i()}return t.prototype.has=function(t){var e=o(t,!1);return void 0!==e&&c.has(e,this._key)},t.prototype.get=function(t){var e=o(t,!1);return void 0!==e?c.get(e,this._key):void 0},t.prototype.set=function(t,e){return o(t,!0)[this._key]=e,this},t.prototype.delete=function(t){var e=o(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=i()},t}();function i(){var e;do{e="@@WeakMap@@"+s()}while(c.has(t,e));return t[e]=!0,e}function o(t,i){if(!e.call(t,n)){if(!i)return;Object.defineProperty(t,n,{value:c.create()})}return t[n]}function r(t,e){for(var n=0;n<e;++n)t[n]=255*Math.random()|0;return t}function s(){var t,e=(t=16,"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):r(new Uint8Array(t),t):r(new Array(t),t));e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var n="",i=0;i<16;++i){var o=e[i];4!==i&&6!==i&&8!==i||(n+="-"),o<16&&(n+="0"),n+=o.toString(16).toLowerCase()}return n}}():WeakMap);function f(t,e,n){var i=d.get(t);if(j(i)){if(!n)return;i=new u,d.set(t,i)}var o=i.get(e);if(j(o)){if(!n)return;o=new u,i.set(e,o)}return o}function y(t,e,n){if(g(t,e,n))return!0;var i=Q(e);return!k(i)&&y(t,i,n)}function g(t,e,n){var i=f(e,n,!1);return!j(i)&&!!i.has(t)}function v(t,e,n){if(g(t,e,n))return m(t,e,n);var i=Q(e);return k(i)?void 0:v(t,i,n)}function m(t,e,n){var i=f(e,n,!1);if(!j(i))return i.get(t)}function w(t,e,n,i){f(n,i,!0).set(t,e)}function b(t,e){var n=_(t,e),i=Q(t);if(null===i)return n;var o=b(i,e);if(o.length<=0)return n;if(n.length<=0)return o;for(var r=new p,s=[],a=0,c=n;a<c.length;a++){var l=c[a];r.has(l)||(r.add(l),s.push(l))}for(var h=0,u=o;h<u.length;h++)l=u[h],r.has(l)||(r.add(l),s.push(l));return s}function _(t,e){var n=[],i=f(t,e,!1);if(j(i))return n;for(var r=function(t){var e=A(t,o);if(!Y(e))throw new TypeError;var n=e.call(t);if(!S(n))throw new TypeError;return n}(i.keys()),s=0;;){var a=X(r);if(!a)return n.length=s,n;var c=a.value;try{n[s]=c}catch(t){try{P(r)}finally{throw t}}s++}}function x(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function j(t){return void 0===t}function k(t){return null===t}function S(t){return"object"==typeof t?null!==t:"function"==typeof t}function E(t,e){switch(x(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var n=3===e?"string":5===e?"number":"default",o=A(t,i);if(void 0!==o){var r=o.call(t,n);if(S(r))throw new TypeError;return r}return function(t,e){if("string"===e){var n=t.toString;if(Y(n)&&!S(o=n.call(t)))return o;if(Y(i=t.valueOf)&&!S(o=i.call(t)))return o}else{var i;if(Y(i=t.valueOf)&&!S(o=i.call(t)))return o;var o,r=t.toString;if(Y(r)&&!S(o=r.call(t)))return o}throw new TypeError}(t,"default"===n?"number":n)}function O(t){var e=E(t,3);return"symbol"==typeof e?e:function(t){return""+t}(e)}function T(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function Y(t){return"function"==typeof t}function M(t){return"function"==typeof t}function A(t,e){var n=t[e];if(null!=n){if(!Y(n))throw new TypeError;return n}}function X(t){var e=t.next();return!e.done&&e}function P(t){var e=t.return;e&&e.call(t)}function Q(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===l)return e;if(e!==l)return e;var n=t.prototype,i=n&&Object.getPrototypeOf(n);if(null==i||i===Object.prototype)return e;var o=i.constructor;return"function"!=typeof o||o===t?e:o}function B(t){return t.__=void 0,delete t.__,t}t("decorate",(function(t,e,n,i){if(j(n)){if(!T(t))throw new TypeError;if(!M(e))throw new TypeError;return function(t,e){for(var n=t.length-1;n>=0;--n){var i=(0,t[n])(e);if(!j(i)&&!k(i)){if(!M(i))throw new TypeError;e=i}}return e}(t,e)}if(!T(t))throw new TypeError;if(!S(e))throw new TypeError;if(!S(i)&&!j(i)&&!k(i))throw new TypeError;return k(i)&&(i=void 0),function(t,e,n,i){for(var o=t.length-1;o>=0;--o){var r=(0,t[o])(e,n,i);if(!j(r)&&!k(r)){if(!S(r))throw new TypeError;i=r}}return i}(t,e,n=O(n),i)})),t("metadata",(function(t,e){return function(n,i){if(!S(n))throw new TypeError;if(!j(i)&&!function(t){switch(x(t)){case 3:case 4:return!0;default:return!1}}(i))throw new TypeError;w(t,e,n,i)}})),t("defineMetadata",(function(t,e,n,i){if(!S(n))throw new TypeError;return j(i)||(i=O(i)),w(t,e,n,i)})),t("hasMetadata",(function(t,e,n){if(!S(e))throw new TypeError;return j(n)||(n=O(n)),y(t,e,n)})),t("hasOwnMetadata",(function(t,e,n){if(!S(e))throw new TypeError;return j(n)||(n=O(n)),g(t,e,n)})),t("getMetadata",(function(t,e,n){if(!S(e))throw new TypeError;return j(n)||(n=O(n)),v(t,e,n)})),t("getOwnMetadata",(function(t,e,n){if(!S(e))throw new TypeError;return j(n)||(n=O(n)),m(t,e,n)})),t("getMetadataKeys",(function(t,e){if(!S(t))throw new TypeError;return j(e)||(e=O(e)),b(t,e)})),t("getOwnMetadataKeys",(function(t,e){if(!S(t))throw new TypeError;return j(e)||(e=O(e)),_(t,e)})),t("deleteMetadata",(function(t,e,n){if(!S(e))throw new TypeError;j(n)||(n=O(n));var i=f(e,n,!1);if(j(i))return!1;if(!i.delete(t))return!1;if(i.size>0)return!0;var o=d.get(e);return o.delete(n),o.size>0||d.delete(e),!0}))}(o)}()}(i||(i={}))}},e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={id:i,exports:{}};return t[i](o,o.exports,n),o.exports}return n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(1546)})()}));