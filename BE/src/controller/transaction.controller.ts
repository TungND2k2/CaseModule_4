import {Request, Response} from "express";
import TransactionService from "../service/transaction.service";
import walletService from "../service/wallet.service";

class TransactionController {
    private transactionService
    private walletService

    constructor() {
        this.transactionService = TransactionService
        this.walletService=walletService
    }

    showTransaction = async (req: Request, res: Response) => {
        let wallet = await this.transactionService.getAll()
        if (wallet) {
            res.status(200).json(wallet)

        }
    }
    create = async (req: Request, res: Response) => {
        let id=req.params.id
        let wallet = await this.walletService.findById(id)
        let payNew = req.body;
        let createPay = await this.transactionService.savePay(payNew)
        if (createPay) {
            res.status(200).json(wallet);

        }
    }
    showListTransactionOfWallet=async (req:Request, res:Response) => {
       let id=req.params.id
        let wallet = await this.walletService.findById(id)
        let transaction =await this.transactionService.findById(id)
        if (transaction) {
            res.status(200).json({wallet,transaction})
        }
        else {
            res.status(404).json({message:'Not Found'})
        }
    }
    showListTransactionOfDate=async (req:Request, res:Response) => {
        let id=req.params.id;
        let time=req.body.time;
        let wallet = await this.walletService.findById(id);
        let date=await this.transactionService.findDate(id,time);
        if (date) {
            res.status(200).json({wallet,date})
        }
        else {
            res.status(404).json({message:'Not Found'})
        }
    }

}

export default new TransactionController();