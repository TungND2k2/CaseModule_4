export declare enum nameTransaction {
    SPENDING = "spending",
    PROCEEDS = "proceeds"
}
export declare class Transaction {
    id_transaction: number;
    name: nameTransaction;
    idWallet: number;
    money: number;
    idCategory: number;
    Time: Date;
}
