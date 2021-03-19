/**
 * Get all first-level (first child of [contenteditabel]) siblings from passed node
 * Then you can check it for emptiness
 *
 * @example
 * <div contenteditable>
 * <p></p>                            |
 * <p></p>                            | left first-level siblings
 * <p></p>                            |
 * <blockquote><a><b>adaddad</b><a><blockquote>       <-- passed node for example <b>
 * <p></p>                            |
 * <p></p>                            | right first-level siblings
 * <p></p>                            |
 * </div>
 *
 * @param {HTMLElement} from - element from which siblings should be searched
 * @param {'left' | 'right'} direction - direction of search
 *
 * @returns {HTMLElement[]}
 */
export default function getHigherLevelSiblings(from: HTMLElement, direction?: 'left' | 'right'): HTMLElement[] {
    let current = from;
    const siblings = [];

    /**
     * Find passed node's firs-level parent (in example - blockquote)
     */
    while (current.parentNode && (current.parentNode as HTMLElement).contentEditable !== 'true') {
        current = current.parentNode as HTMLElement;
    }

    const sibling = direction === 'left' ? 'previousSibling' : 'nextSibling';

    /**
     * Find all left/right siblings
     */
    while (current[sibling]) {
        current = current[sibling] as HTMLElement;
        siblings.push(current);
    }

    return siblings;
}