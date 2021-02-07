
export function Event(options?: {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
    force?: boolean;
}) {
    return (target, propKey: string): any => {
        const name = propKey.split('Emitter')[0];
        const event = new CustomEvent(name, options);
        const emitter = function (data: any) {
            if (!this.emit && !options?.force) return;
            (event as any).data = data;
            this.dispatchEvent(event);
            return event;
        };
        return {
            get() {
                return emitter;
            }
        };
    }
}

export interface EventEmitter {
    (data?: any): CustomEvent<any>;
}

