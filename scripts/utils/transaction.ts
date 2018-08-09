const transact = (transactions: Array<Function>) => {
    transactions.forEach(function (transaction) {
        transaction()
    })
}

const act = (method: Function, args: Array<any> = []) => {
    return () => {
        method(...args)
    }
}