
export function isClickedOutside(
    event: any, target: HTMLElement
): boolean {
    const x = event.detail.clientX;
    const y = event.detail.clientY;
    const rect = target.getBoundingClientRect();
    return rect.top > y ||
        rect.top + rect.height < y ||
        rect.left > x ||
        rect.left + rect.width < x;
}
