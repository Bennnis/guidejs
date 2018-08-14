import {
    MASK_DEFAULT_OFFSET, ROOT_TAG, TIPS_CLASS_BEM, TIPS_DEFAULT_OFFSET, TRANSLATE_X_ALL,
    TRANSLATE_X_ALL_REVERSE, TRANSLATE_Y_ALL_REVERSE
} from "../utils/config";
import {appendDom, createDom, setClasses, setCsses} from "../utils/domUtils";
import {transToPX} from "../utils/helpers";

/**
 * ------------------------tips------------------------------
 * */

let tipsInitialized = false
let tips: any

const initTips = () => {
    tips = createDom(ROOT_TAG)

    tipsInitialized = true
}

const createPointer = (el: any, config: any) => {
    !tipsInitialized && initTips()

    setClasses(tips, [TIPS_CLASS_BEM])
    setTipsPosition(tips, el, config.tipsPosition)
    appendDom(document.body, tips)

    return resetCreateTips(tips)
}

const setTipsPosition = (tips: any, el: any, pos: string) => {
    tipsSetters[pos](tips, el, el.getBoundingClientRect())
}

let tipsSetters: any = {
    left: (tips: any, el: any, pos: any) => {
        setCsses(tips, {
            left: transToPX(pos.left - TIPS_DEFAULT_OFFSET),
            top: transToPX(pos.top - TIPS_DEFAULT_OFFSET),
            transform: TRANSLATE_X_ALL_REVERSE
        })
    },
    top: (mask: any, el: any, pos: any) => {
        setCsses(mask, {
            left: transToPX(pos.left - TIPS_DEFAULT_OFFSET / 2),
            top: transToPX(pos.top - TIPS_DEFAULT_OFFSET),
            transform: TRANSLATE_Y_ALL_REVERSE
        })
    },
    right: (mask: any, el: any, pos: any) => {
        setCsses(tips, {
            left: transToPX(pos.right + TIPS_DEFAULT_OFFSET),
            top: transToPX(pos.top - TIPS_DEFAULT_OFFSET / 2)
        })
    },
    bottom: (mask: any, el: any, pos: any) => {
        setCsses(mask, {
            left: transToPX(pos.left - TIPS_DEFAULT_OFFSET / 2),
            top: transToPX(pos.bottom + TIPS_DEFAULT_OFFSET)
        })
    }
}
const resetCreateTips = (tips: any) => {
    return () => {
        tips.remove()
    }
}

// setTipsPosition

export default createPointer