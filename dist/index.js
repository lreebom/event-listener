"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventListener {
    constructor() {
        this.listeners = new Map();
    }
    addEventListener(type, eventListener) {
        if (!this.listeners.has(type)) {
            this.listeners.set(type, []);
        }
        const listeners = this.listeners.get(type);
        if (listeners) {
            listeners.push(eventListener);
        }
    }
    removeEventListener(type, eventListener) {
        if (!this.listeners.has(type))
            return;
        const listeners = this.listeners.get(type);
        if (listeners) {
            const index = listeners.indexOf(eventListener);
            if (index !== -1) {
                listeners.splice(index, 1);
            }
        }
    }
    dispatchEvent(type, event) {
        if (!this.listeners.has(type))
            return;
        const listeners = this.listeners.get(type);
        if (listeners) {
            listeners.forEach(listener => {
                listener(event);
            });
        }
    }
    clearEventListeners(type) {
        if (type) {
            this.listeners.delete(type);
        }
        else {
            this.listeners.clear();
        }
    }
}
exports.default = EventListener;
