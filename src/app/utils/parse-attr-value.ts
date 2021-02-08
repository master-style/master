
export default function parseAttrValue(value) {
    if (value === undefined || value === '' || value === null) {
        return value;
    } else if (typeof value === 'boolean') {
        return value === true ? true : false;
    } else {
        return isNaN(+value) ? value : +value;
    }
}
