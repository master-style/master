window.off = document.off = Element.prototype.off = function (
    typeSet?: any,
    factorSelector?,
    handle?,
    option?: ListenerOption
) {
    const
        target = this,
        listeners = target.listeners;
    if (!listeners) return target;
    if (typeSet) {
        if (typeof typeSet === 'string') {
            if (typeof factorSelector === 'function') {
                option = handle;
                handle = factorSelector;
                factorSelector = null;
            } else if (factorSelector instanceof Object) {
                option = factorSelector;
                factorSelector = undefined;
            }
            const typeSets = typeSet.split(' ');
            for (const eachTypeSet of typeSets) {
                const splits = eachTypeSet.split('.');
                let namespaces: string[];
                let type: string;
                if (eachTypeSet[0] !== '.') {
                    type = splits[0];
                }
                namespaces = splits.slice(1);
                for (let listenerIndex = listeners.length - 1; listenerIndex >= 0; listenerIndex--) {
                    const listener = listeners[listenerIndex];
                    let remove = false;
                    if (type) {
                        remove = type === listener.type;
                        if (namespaces.length)
                            remove = remove && listener.typeSet.has(namespaces, '.');
                        if (
                            option &&
                            option.id &&
                            listener.option &&
                            listener.option.id
                        )
                            remove = remove && option.id === listener.option.id;
                    } else if (namespaces.length) {
                        remove = listener.typeSet.has(namespaces, '.')
                    } else {
                        continue;
                    }
                    if (handle) remove = remove && handle === listener.handle;
                    if (factorSelector) remove = remove && factorSelector === listener.factorSelector;
                    if (remove) {
                        target.removeEventListener(listener.type, listener.listen, listener.option || false);
                        listeners.splice(listenerIndex, 1);
                    }
                }
            }
        } else if (typeof typeSet === 'function') {
            handle = typeSet;
            for (let listenerIndex = listeners.length - 1; listenerIndex >= 0; listenerIndex--) {
                const listener = listeners[listenerIndex];
                if (listener.handle === handle) {
                    target.removeEventListener(listener.type, listener.listen, listener.option || false);
                    listeners.splice(listenerIndex, 1);
                }
            }
        } else {
            option = typeSet;
            for (let listenerIndex = listeners.length - 1; listenerIndex >= 0; listenerIndex--) {
                const listener = listeners[listenerIndex];
                if (listener.option && listener.option.id === option.id) {
                    target.removeEventListener(listener.type, listener.listen, listener.option || false);
                    listeners.splice(listenerIndex, 1);
                }
            }
        }
    } else {
        for (const listener of target.listeners) {
            target.removeEventListener(listener.type, listener.listen, listener.option);
        }
        target.listeners = null;
    }
    return target;
};

