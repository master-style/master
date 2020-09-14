declare namespace Master {
    interface ListenerOption {
        capture?: boolean;
        once?: boolean;
        passive?: boolean;
        id?: any;
    }
}

import './on';
import './off';
