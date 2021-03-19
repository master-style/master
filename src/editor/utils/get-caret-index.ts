export function getCaretIndex(element: EventTarget) {
    let position = 0;
    const selection = window.getSelection();
    if (selection.rangeCount !== 0) {
        const range = window.getSelection().getRangeAt(0);
        const preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(element as Node);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        position = preCaretRange.toString().length;
    }
    return position;
}