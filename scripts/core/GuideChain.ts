import Chain from "./Chains";
import {addEvent, removeEvent} from '../utils/eventUtils'

export default class GuideChain extends Chain {
    public el: HTMLElement
    public config: object

    //default config for per chain
    private _defaults: object = {
        tipPos: 'left',
        tipArrow: true,
        maskBg: '#eee'
    }

    constructor(el: HTMLElement, config?: object) {
        super()

        this.el = el
        this.config = Object.assign({}, config, this._defaults)
    }

    public action() {
        return new Promise(resolve => {
            this.paintGuide()
            addEvent(this.el, 'click', () => {
                resolve()
            })
        }).then(() => {
            this.successor && this.successor.action()
        })
    }

    public paintGuide() {
        let args = [this.el, this.config]

        transact([
            act(createMask, args),
            act(createTips, args),
            act(createPointer, args)
        ])
    }
}