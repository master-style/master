
export default function isNum(value: any) {
    return typeof value === 'number' && !isNaN(value);
}
