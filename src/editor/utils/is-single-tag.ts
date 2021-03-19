/**
 * Check if passed tag has no closed tag
 *
 * @param {HTMLElement} tag - element to check
 * @returns {boolean}
 */
export default function isSingleTag(tag: HTMLElement): boolean {
    return tag.tagName && [
        'AREA',
        'BASE',
        'BR',
        'COL',
        'COMMAND',
        'EMBED',
        'HR',
        'IMG',
        'INPUT',
        'KEYGEN',
        'LINK',
        'META',
        'PARAM',
        'SOURCE',
        'TRACK',
        'WBR',
    ].includes(tag.tagName);
}