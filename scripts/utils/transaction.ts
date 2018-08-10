import Transaction from "../core/Transaction";

export const transact = (transactions: Array<Transaction>) => {
    transactions.forEach((transaction: Transaction) => {
        transaction.action()
    })
}

export const resetTransact = (transactions: Array<Transaction>) => {
    transactions.forEach((transaction: Transaction) => {
        transaction.reset()
    })
}