import { ethereum } from '@graphprotocol/graph-ts';
import { Transaction } from "../../../generated/schema";

export function getTransaction(event: ethereum.Event): Transaction {

    let transaction = Transaction.load(event.transaction.hash);

    if (!transaction) {
        transaction = new Transaction(event.transaction.hash);
        transaction.timestamp = event.block.timestamp;
        transaction.blockNumber = event.block.number;
        transaction.blockIndex = event.transaction.index;
        transaction.save();
    }
    return transaction as Transaction;
}