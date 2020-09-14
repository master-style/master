import './app/dom';
import './app/element';
import './app/ui';

declare global {
    const Master: Master;
    const $: Master;
    interface Window {
        Master: Master;
    }
}