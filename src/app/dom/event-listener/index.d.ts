
declare global {

    interface ListenerOptions {
        capture?: boolean;
        once?: boolean;
        passive?: boolean;
        id?: any;
    }

}

import './off';
import './on';
