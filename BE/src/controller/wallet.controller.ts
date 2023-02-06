import {Request, Response} from "express";
import walletService from "../service/wallet.service";
import CategoriesService from "../service/categories.service";

class WalletController {
    private walletService;
    private categoryService;

    constructor() {
        this.walletService = walletService
        this.categoryService = CategoriesService
    }
     showWallet = async (req:Request, res:Response) => {
        try {
            let id=req.params.id;
            let wallet = await walletService.getAll(id)
                res.status(200).json(wallet)
        } catch (err) {
            console.log(err)
            res.status(500).json(err.message)
        }
     }

     create = async (req:Request, res:Response) => {
        try {
            let newWallet = await walletService.save(req.body)
            res.status(200).json(newWallet)
        } catch (err) {
            console.log(err)
            res.status(500).json(err.message)
        }
     }

     removeWallet = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let removeWallet = await this.walletService.delete(id);
            console.log(removeWallet)
            res.status(200).json({ok: removeWallet, message: "success removed wallet"})
        } catch (err) {
            console.log(err.message)
            res.status(500).json(err.message)
        }
     }

     editWallet = async (req:Request, res:Response) => {
        try {
            let id = req.params.id;
            let editWallet = await this.walletService.update(id, req.body);
            res.status(200).json(editWallet)
        } catch (err) {
            console.log(err)
            res.status(500).json(err.message)
        }
     }
     findOneWallet = async (req:Request,res:Response) => {
        let id=req.params.id;
        let categories=await this.categoryService.getAll()
        let wallet = await this.walletService.findById(id);
        if (wallet){
            res.status(200).json({wallet,categories})

        }
    }
}

export default new WalletController();