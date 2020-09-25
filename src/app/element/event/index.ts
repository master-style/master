
export function Event(options?: EventOptions) {
    return (target, propKey: string): any => {
        const name = propKey.split('Emitter')[0];
        const event = new CustomEvent(name, options);
        const emitter = function (data: any) {
            console.log(this);
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
