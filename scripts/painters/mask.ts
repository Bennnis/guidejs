import {appendDom, createDom, setClasses, setCsses} from "../utils/domUtils";
import {MASK_CLASS_BEM, MASK_DEFAULT_OFFSET, ROOT_TAG, TIPS_CLASS_BEM, TRANSLATE_X_ALL_REVERSE} from "../utils/config";
import {transToPX} from "../utils/helpers";

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

const createMask = (el: any, config: any) => {
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
            height: transToPX(el.offsetHeight + 2 * MASK_DEFAULT_OFFSET),
            left: transToPX(pos.left - MASK_DEFAULT_OFFSET),
            top: transToPX(pos.top - MASK_DEFAULT_OFFSET),
            transform: TRANSLATE_X_ALL_REVERSE
        })
    },
    top: (mask: any, el: any, pos: any) => {
        setCsses(mask, {
            height: transToPX(pos.top - MASK_DEFAULT_OFFSET),
            left: 0,
            top: 0
        })
    },
    right: (mask: any, el: any, pos: any) => {
        setCsses(mask, {
            height: transToPX(el.offsetHeight + 2 * MASK_DEFAULT_OFFSET),
            left: transToPX(pos.right + MASK_DEFAULT_OFFSET),
            top: transToPX(pos.top - MASK_DEFAULT_OFFSET)
        })
    },
    bottom: (mask: any, el: any, pos: any) => {
        setCsses(mask, {
            top: transToPX(pos.bottom + MASK_DEFAULT_OFFSET)
        })
    }
}

const setMaskPosition = (pos: string, mask: any, el: any) => {
    maskSetters[pos](mask, el, el.getBoundingClientRect())
}

const resetCreateMask = (mask: any) => {
    return () => {
        for (let pos in mask) {
            mask[pos].remove()
        }
    }
}

export default createMask