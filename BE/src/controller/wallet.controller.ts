import {Request, Response} from "express";
import WalletService from "../service/wallet.service";

class WalletController   {
    private WalletService;

    constructor() {
        this.WalletService=WalletService
    }
     showWallet = async (req:Request, res:Response) => {
        let wallet = await this.WalletService.getAll()
         console.log(wallet)
         if (wallet) {
             res.status(200).json(wallet)

         }
     }

}

export default new WalletController();