import { Request, Response } from "express";
declare class TransactionController {
    private transactionService;
    private walletService;
    constructor();
    showTransaction: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    showListTransactionOfWallet: (req: Request, res: Response) => Promise<void>;
    showListTransactionOfDate: (req: Request, res: Response) => Promise<void>;
}
declare const _default: TransactionController;
export default _default;
