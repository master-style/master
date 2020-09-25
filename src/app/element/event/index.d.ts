interface EventEmitter {
    (data?: any): CustomEvent<any>;
}

interface EventOptions {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
}