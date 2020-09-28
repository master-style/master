
export function isClickedOutside(
    target: Element,
    event: any,
    senseEdge: number = 0
): boolean {
    const x = event.clientX;
    const y = event.clientY;
    const rect = target.getBoundingClientRect();
    return rect.top > y + senseEdge ||
        rect.top + rect.height < y - senseEdge ||
        rect.left > x + senseEdge ||
        rect.left + rect.width < x - senseEdge;
}
