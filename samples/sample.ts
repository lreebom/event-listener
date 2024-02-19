import EventListener from "./index";

// 继承 EventListener
class Sample extends EventListener {

    // 重写 addEventListener、removeEventListener、dispatchEvent、clearEventListeners 方法
    addEventListener<K extends keyof SampleEventMap>(type: K, eventListener: (event: SampleEventMap[K]) => void) {
        super.addEventListener(type, eventListener);
    }

    removeEventListener<K extends keyof SampleEventMap>(type: K, eventListener: (event: SampleEventMap[K]) => void) {
        super.removeEventListener(type, eventListener);
    }

    dispatchEvent<K extends keyof SampleEventMap>(type: K, event: SampleEventMap[K]) {
        super.dispatchEvent(type, event);
    }

    clearEventListeners<K extends keyof SampleEventMap>(type?: K) {
        super.clearEventListeners(type);
    }
}

// 事件类型
interface SampleEventMap {
    "open": string,
    "close": CloseEvent,
    "error": ErrorEvent,
}

// 自定义的CloseEvent事件参数
interface CloseEvent {
    code: number,
    reason: string,
}

const sample = new Sample();

// 事件监听
sample.addEventListener("open", event => {
    console.log("open", event);
});

sample.addEventListener("close", event => {
    console.log("close", event.code, event.reason);
});

sample.addEventListener("error", event => {
    console.log("error", event.message);
});

// 事件触发
sample.dispatchEvent("open", "open event");
sample.dispatchEvent("close", {code: 1000, reason: "normal close"});
sample.dispatchEvent("error", new ErrorEvent("error", {message: "error message"}));