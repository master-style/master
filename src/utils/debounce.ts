export default function debounce(func, wait?: number, immediate?: boolean) {
    let timeout, args, context, timestamp, result;
    if (null == wait) wait = 100;

    function later() {
        let last = Date.now() - timestamp;

        if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
                context = args = null;
            }
        }
    };

    return function () {
        context = this;
        args = arguments;
        timestamp = Date.now();
        let callNow = immediate && !timeout;
        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }

        return result;
    };
};
