export default function parseStr(value) {
    if (value === '' || value === null) {
        return value;
    } else if (value === 'true') {
        return true;
    } else if (value === 'false') {
        return false;
    } else {
        return isNaN(+value) ? value : +value;
    }
};
