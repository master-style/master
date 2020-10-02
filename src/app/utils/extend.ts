export function extend(...args) {
    let deep = false;
    if (typeof args[0] == 'boolean') {
        deep = args.shift();
    }
    const result = args[0];
    if (isUnextendable(result)) {
        throw new Error('extendee must be an object');
    }
    const extenders = args.slice(1);
    const len = extenders.length;
    for (let i = 0; i < len; i++) {
        const extender = extenders[i];
        for (const key in extender) {
            if (extender.hasOwnProperty(key)) {
                const value = extender[key];
                if (deep && isCloneable(value)) {
                    const base = Array.isArray(value) ? [] : {};
                    result[key] = extend(
                        true,
                        result.hasOwnProperty(key) && !isUnextendable(result[key])
                            ? result[key]
                            : base,
                        value
                    );
                } else {
                    result[key] = value;
                }
            }
        }
    }
    return result;
}

function isUnextendable(val) {
    return !val || (typeof val != 'object' && typeof val != 'function');
}

function isCloneable(obj) {
    return Array.isArray(obj) || {}.toString.call(obj) == '[object Object]';
}
