import {ROOT_TAG, TIPS_CLASS_BEM} from "../utils/config";
import {createDom, setClasses} from "../utils/domUtils";

/**
 * ------------------------tips------------------------------
 * */

let tipsInitialized = false
let tips: any

const initTips = () => {
    tips = createDom(ROOT_TAG)

    tipsInitialized = true
}

const createTips = (el: any, config: any) => {
    !tipsInitialized && initTips()

    setClasses(tips, [TIPS_CLASS_BEM])
    // setTipsPosition(config.tipsPosition)

    // for (let pos in mask) {
    //     setClasses(mask[pos], [MASK_CLASS_BEM])
    //     setMaskPosition(pos, mask[pos], el)
    //     appendDom(document.body, mask[pos])
    // }
    //
    // return resetCreateMask(mask)
}

// setTipsPosition
export default createTips