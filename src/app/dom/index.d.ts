export { }

declare global {
    const Master: Master;
    interface Window {
        Master: Master;
    }
}