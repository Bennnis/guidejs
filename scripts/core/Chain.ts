export default abstract class Chain {
    public successor: Chain

    constructor() {}

    public setNextSuccessor(successor: Chain) {
        this.successor = successor
    }

    public abstract action(): void
}