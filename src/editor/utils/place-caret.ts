const selection = window.getSelection();

export default function placeCaret(node: Node, offset: number) {
    const range = document.createRange();
    range.setStart(node, offset);
    range.setEnd(node, offset);
    selection.removeAllRanges();
    selection.addRange(range);
}