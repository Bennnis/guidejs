import Chain from "./Chain";
import {addEvent, removeEvent} from '../utils/eventUtils'
import {createMask, createPointer, createTips} from "../utils/paintUtils";
import {resetTransact, transact} from "../utils/transaction";
import Transaction from "./Transaction";
import {DEFAULT_PASS_EVENT} from "../utils/config";
import PaintTransaction from "./PaintTransaction";

export default class GuideChain extends Chain {
    public el: HTMLElement
    public config: object
    paintTransactions: Array<Transaction>

    //default config for per chain
    private _defaults: object = {
    }

    constructor(el: HTMLElement, config?: object) {
        super()

        this.el = el
        this.config = Object.assign({}, config, this._defaults)
    }

    public action() {
        return new Promise(resolve => {
            this.paintGuide(resolve)
        }).then(() => {
            this.successor && this.successor.action()
        })
    }

    public paintGuide(resolve: Function) {
        let args = [this.el, this.config]

        this.paintTransactions = [
            new PaintTransaction(createMask, args),
            new PaintTransaction(createTips, args),
            new PaintTransaction(createPointer, args)
        ]

        transact(this.paintTransactions)

        addEvent(this.el, DEFAULT_PASS_EVENT, () => {
            resetTransact(this.paintTransactions)
            resolve()
        })
    }
}