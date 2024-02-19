declare class EventListener {
    protected listeners: Map<string, Function[]>;
    addEventListener(type: string, eventListener: Function): void;
    removeEventListener(type: string, eventListener: Function): void;
    dispatchEvent(type: string, event: any): void;
    clearEventListeners(type?: string): void;
}
export default EventListener;
