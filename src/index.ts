class EventListener {

    protected listeners: Map<string, Function[]> = new Map<string, Function[]>();

    public addEventListener(type: string, eventListener: Function): void {
        if (!this.listeners.has(type)) {
            this.listeners.set(type, []);
        }
        const listeners = this.listeners.get(type);
        if (listeners) {
            listeners.push(eventListener);
        }
    }

    public removeEventListener(type: string, eventListener: Function): void {
        if (!this.listeners.has(type)) return;
        const listeners = this.listeners.get(type);
        if (listeners) {
            const index = listeners.indexOf(eventListener);
            if (index !== -1) {
                listeners.splice(index, 1);
            }
        }
    }

    public dispatchEvent(type: string, event: any): void {
        if (!this.listeners.has(type)) return;

        const listeners = this.listeners.get(type);

        if (listeners) {
            listeners.forEach(listener => {
                listener(event);
            });
        }
    }

    public clearEventListeners(type?: string): void {
        if (type) {
            this.listeners.delete(type);
        } else {
            this.listeners.clear();
        }
    }
    
}

export default EventListener;