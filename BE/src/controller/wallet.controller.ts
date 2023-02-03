import {Request, Response} from "express";
import WalletService from "../service/wallet.service";

class WalletController   {
    private WalletService;

    constructor() {
        this.WalletService=WalletService
    }
     showWallet = async (req:Request, res:Response) => {
        let wallet = await this.WalletService.getAll()
         if (wallet) {
             res.status(200).json({
                 message: " success",
             });

         }
     }

}

export default new WalletController();