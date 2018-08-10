export default abstract class Transaction {
    public reseter: Function

    constructor() {}

    public setReseter(reseter: Function) {
        this.reseter = reseter
    }

    public abstract action(): void

    public abstract reset(): void
}