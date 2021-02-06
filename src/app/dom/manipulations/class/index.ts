
export function addClass(value?: string) {
    if (value) {
        this.classList.add(...value.split(' '));
    }
    return this;
};

export function rmClass(value: string) {
    if (value) {
        this.classList.remove(...value.split(' '));
    }
    return this;
};

export function toggleClass(value: string, state?: boolean) {
    state = typeof state === 'boolean' ? state : !this.classList.contains(value);
    return state ? this.addClass(value) : this.rmClass(value);
};
