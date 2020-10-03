import './app/dom';
import './app/element';
import './app/ui';

declare global {
    interface Window {
        Master: Master;
        $: Master;
    }
}