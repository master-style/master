// import { Attr } from '@element';

// const liveTriggers = {};

// export class MasterTogglable extends HTMLElement {


//     protected triggerHandler(value: any, oldValue: any) {
//         if (this.isConnected && value !== oldValue) {

//         }
//         return { value, oldValue };
//     }

//     private addTrigger(trigger: string) {
//         trigger += '.' + this.#namespace;
//         let liveTargets = liveTriggers[trigger];
//         if (liveTargets) {
//             liveTargets.push(this);
//         } else {
//             liveTriggers[trigger] = liveTargets = [this];
//             document.body.on(trigger, '[' + name + ']', function (event) {
//                 const toggle = this;
//                 if (this.disabled) return;
//                 const targets = $(toggle.attr(name));
//                 targets.forEach((eachTarget: MasterTogglable) => {
//                     if (liveTargets.indexOf(eachTarget) === -1) return;
//                     let whether: boolean;
//                     const tag = toggle.tagName;
//                     const type = toggle.type;
//                     if (type === 'checkbox' || type === 'radio') {
//                         whether = !!toggle.checked;
//                     } else if (
//                         tag === 'M-INPUT' ||
//                         tag === 'M-SELECT' ||
//                         tag === 'M-TEXTAREA'
//                     ) {
//                         whether = !!toggle.value;
//                     } else {
//                         whether = !eachTarget.opened;
//                     }
//                     if (whether && !eachTarget.changing) eachTarget.caller = toggle;
//                     whether = eachTarget.toggle(whether);
//                 });
//             }, { passive: true });
//         }
//     }

//     private removeTrigger(trigger: string) {
//         if (!trigger) return;
//         trigger += '.' + this.constructor.name.split('Master')[1].toLowerCase();
//         const liveTargets = liveTriggers[trigger];
//         if (liveTargets) {
//             if (liveTargets.length) {
//                 liveTargets.splice(liveTargets.indexOf(this), 1);
//             } else {
//                 document.body.off(trigger);
//                 delete liveTargets[trigger];
//             }
//         }
//     }
// }