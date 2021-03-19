/**
 * Check if element is BR or WBR
 *
 * @param {HTMLElement} element - element to check
 * @returns {boolean}
 */
export default function isLineBreakTag(element: HTMLElement): element is HTMLBRElement {
    return element && element.tagName && [
        'BR',
        'WBR',
    ].includes(element.tagName);
}