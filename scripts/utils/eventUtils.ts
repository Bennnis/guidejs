export const addEvent = (el: any, handler: string, cb: Function) => {
    if (el.addEventListener) {
        el.addEventListener(handler, cb);
    } else if (el.attachEvent) {
        // for less than ie8
        el.attachEvent(`on${handler}`, cb);
    }
}

export const removeEvent = (el: any, handler: string, cb: Function) => {
    if (el.removeEventListener) {
        el.removeEventListener(handler, cb);
    } else if (el.detach) {
        // for less than ie8
        el.detach(`on${handler}`, cb);
    }
}
