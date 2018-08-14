import {appendDom, createDom, setClasses} from "./domUtils";
import {MASK_CLASS_BEM, ROOT_CONTAINER, ROOT_TAG} from "./config";

const createMask = (el: any) => {
    let mask = createDom(ROOT_TAG)
    setClasses(mask, [MASK_CLASS_BEM])

    appendDom(ROOT_CONTAINER, mask)
}

const createTips = (el: any) => {}
const createPointer = (el: any) => {}