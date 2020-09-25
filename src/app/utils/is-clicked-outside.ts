
export function isClickedOutside(
    event: any, target: Element
): boolean {
    const x = event.clientX;
    const y = event.clientY;
    const rect = target.getBoundingClientRect();
    return rect.top > y ||
        rect.top + rect.height < y ||
        rect.left > x ||
        rect.left + rect.width < x;
}
