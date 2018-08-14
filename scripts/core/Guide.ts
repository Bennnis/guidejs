/**
 * return a guide instance contains guide chains
 * */
import GuideChain from "./GuideChain";

export default class Guide {
    public passLinks: Array<GuideChain>

    constructor(passLinks: Array<GuideChain>) {
        this.passLinks = passLinks

        this._connectLinks()
    }

    public display() {
        this.passLinks[0].action()
    }

    private _connectLinks() {
        this.passLinks.map((chain: GuideChain, index: number) => {
            chain.setNextSuccessor(this.passLinks[index + 1] || null)
        })
    }
}
