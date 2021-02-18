import { Inject, Injectable, InjectionToken } from '@angular/core';
import merge from 'lodash-es/merge';

const DEFAULT_OPTIONS = {
    breakpoints: {
        sm: 600,
        md: 1024,
        lg: 1440,
        xl: 1920
    },
    debounceWait: 70
};

@Injectable()
export class DisplayService {

    constructor(
        @Inject(DISPLAY_OPTIONS) public options: DisplayOptions
    ) {
        this.options = merge(DEFAULT_OPTIONS, this.options);
    }
}

export interface DisplayOptions {
    breakpoints?: { key: number },
    debounceWait?: number;
}

export const DISPLAY_OPTIONS = new InjectionToken<DisplayOptions>('DisplayOptions');