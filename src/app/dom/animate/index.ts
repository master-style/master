// declare const anime: any;

// Element.prototype.animate = function (keyframe: any, option: any, complete: () => void) {
//     const $target = this;
//     let animation: any;
//     if (option.reverse) {
//         for (const key in keyframe)
//             keyframe[key].reverse();
//     }
//     if (window['Animation']) {
//         const x = keyframe.translateX;
//         const y = keyframe.translateY;
//         const scale = keyframe.scale;
//         const scaleX = keyframe.scaleX;
//         const scaleY = keyframe.scaleY;
//         if (
//             isDefined(x) ||
//             isDefined(y) ||
//             isDefined(scaleX) ||
//             isDefined(scaleY) ||
//             isDefined(scale)
//         ) {
//             let transform = '';
//             let toTransform = '';
//             if ($.isDefined(x)) {
//                 transform += 'translateX(' + x[0] + ')';
//                 toTransform += 'translateX(' + x[1] + ')';
//             }
//             if ($.isDefined(y)) {
//                 transform += ' translateY(' + y[0] + ')';
//                 toTransform += ' translateY(' + y[1] + ')';
//             }
//             if ($.isDefined(scaleX)) {
//                 transform += ' scaleX(' + scaleX[0] + ')';
//                 toTransform += ' scaleX(' + scaleX[1] + ')';
//             }
//             if ($.isDefined(scaleY)) {
//                 transform += ' scaleY(' + scaleY[0] + ')';
//                 toTransform += ' scaleY(' + scaleY[1] + ')';
//             }
//             if ($.isDefined(scale)) {
//                 transform += ' scale(' + scale[0] + ')';
//                 toTransform += ' scale(' + scale[1] + ')';
//             }
//             delete keyframe.translateX;
//             delete keyframe.translateY;
//             delete keyframe.scaleX;
//             delete keyframe.scaleY;
//             if (transform) {
//                 keyframe.transform = [transform, toTransform];
//             }
//         }

//         animation = $target.animate(keyframe, option);
//         animation.onfinish = () => {
//             animation.reversed = animation.playbackRate === -1;
//             cb.call($target, complete);
//         };
//     } else {
//         if (option.easing) {
//             option.easing = toCamel(option.easing);
//         } else {
//             option.easing = 'linear'
//         }
//         animation = anime({
//             targets: $target,
//             ...keyframe,
//             ...option
//         });
//         animation.finished.then(() => {
//             if (option.fill !== 'forwards') {
//                 // tslint:disable-next-line: forin
//                 for (const key in keyframe) {
//                     $target.style[key] = null;
//                 }
//                 if (
//                     isDefined(keyframe.translateX) ||
//                     isDefined(keyframe.translateY) ||
//                     isDefined(keyframe.scale)
//                 ) {
//                     $target.style.transform = null;
//                 }
//             }
//             cb.call($target, complete);
//         });
//     }
//     return animation;
// }