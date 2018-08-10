import {appendDom, createDom, replaceFromTo, setClasses, setCsses} from "./domUtils";
import {MASK_CLASS_BEM, ROOT_TAG} from "./config";
import {transToPX} from "./helpers";

/**
 * paint utils has two compare method "normal" and "resetNormal"
 * "normal" will return "resetNormal" to transaction instance as reseter
 * */

/**
 * ------------------------mask------------------------------
 * */
let maskInitialized = false

let mask: any = {
    left: null,
    right: null,
    top: null,
    bottom: null
}

const initMask = () => {
    for (let pos in mask) {
        mask[pos] = createDom(ROOT_TAG)
    }

    maskInitialized = true

    return mask
}

export const createMask = (el: any, config: any) => {
    !maskInitialized && initMask()

    for (let pos in mask) {
        setClasses(mask[pos], [MASK_CLASS_BEM])
        setMaskPosition(pos, mask[pos], el)
        appendDom(document.body, mask[pos])
    }

    return resetCreateMask(mask)
}

let maskSetters: any = {
    left: (mask: any, el: any, pos: any) => {
        setCsses(mask, {
            height: transToPX(el.offsetHeight),
            left: transToPX(pos.left),
            top: transToPX(pos.top),
            transform: 'translateX(-100%)'
        })
    },
    top: (mask: any, el: any, pos: any) => {
        setCsses(mask, {
            height: transToPX(pos.top),
            left: 0,
            top: 0
        })
    },
    right: (mask: any, el: any, pos: any) => {
        setCsses(mask, {
            height: transToPX(el.offsetHeight),
            left: transToPX(pos.right),
            top: transToPX(pos.top)
        })
    },
    bottom: (mask: any, el: any, pos: any) => {
        setCsses(mask, {
            top: transToPX(pos.bottom)
        })
    }
}

const setMaskPosition = (pos: string, mask: any, el: any) => {
    maskSetters[pos](mask, el, el.getBoundingClientRect())
}

export const resetCreateMask = (mask: any) => {
    return () => {
        for (let pos in mask) {
            mask[pos].remove()
        }
    }
}

/**
 * ------------------------tips------------------------------
 * */
export const createTips = (el: any) => {

}

/**
 * -----------------------pointer-----------------------------
 * */
export const createPointer = (el: any) => {
}