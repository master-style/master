import './off';
import './on';

export interface ListenerOption {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
    id?: any;
}