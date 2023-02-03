import {Request, Response} from "express";
import TransactionService from "../service/transaction.service";

class TransactionController {
    private transactionService

    constructor() {
        this.transactionService = TransactionService
    }

    showTransaction = async (req: Request, res: Response) => {
        let wallet = await this.transactionService.getAll()
        if (wallet) {
            res.status(200).json(wallet)

        }
    }
    create = async (req: Request, res: Response) => {
        let payNew = req.body;
        console.log(payNew)
        let createPay = await this.transactionService.savePay(payNew)
        if (createPay) {
            res.status(200).json({
                message: "Create product success",
            });

        }
    }
}

export default new TransactionController();