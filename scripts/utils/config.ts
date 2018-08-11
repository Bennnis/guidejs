export const ROOT_TAG = 'div'

export const ROOT_CLASS = 'guide'

const ELEMENT_SPEARTOR = '__'
const MODIFIER_SPEARTOR = '--'

//base
const DEFAULT_OFFSET = 3

//translate utils
export const TRANSLATE_X_ALL = 'translateX(100%)'
export const TRANSLATE_X_ALL_REVERSE = 'translateX(-100%)'
export const TRANSLATE_Y_ALL = 'translateY(100%)'
export const TRANSLATE_Y_ALL_REVERSE = 'translateY(-100%)'

//mask
export const MASK_CLASS = 'mask'
export const MASK_DEFAULT_OFFSET = DEFAULT_OFFSET
export const MASK_CLASS_BEM = `${ROOT_CLASS}${ELEMENT_SPEARTOR}${MASK_CLASS}`

//tips
export const TIPS_CLASS = 'tips'
export const TIPS_DEFAULT_OFFSET = 2 * MASK_DEFAULT_OFFSET
export const TIPS_CLASS_BEM = `${ROOT_CLASS}${ELEMENT_SPEARTOR}${TIPS_CLASS}`

export const DISPLAY_EL_ZINDEX = 2001
export const DISPLAY_EL_POSITION = 'fixed'

export const DEFAULT_PASS_EVENT = 'click'
