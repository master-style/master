import { DialogElement } from ".";

export { }

declare global {
    interface Master {
        dialog?: (options: any) => DialogElement
    }
}
