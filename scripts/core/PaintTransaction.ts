import Transaction from "./Transaction";

export default class PaintTransaction extends Transaction {
    public handler: Function
    public args: Array<any>

    constructor(handler: Function, args: Array<any>) {
        super()

        this.handler = handler
        this.args = args
    }

    public action() {
        this.setReseter(this.handler(...this.args))
    }

    public reset() {
        this.reseter()
    }
}
