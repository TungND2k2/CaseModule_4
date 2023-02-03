import { Router } from 'express';
import WalletController from "../controller/wallet.controller";


export const WalletRouter = Router();
WalletRouter.get('/',WalletController.showWallet)
WalletRouter.post('/',WalletController.create)
WalletRouter.delete('/:id',WalletController.removeWallet)
WalletRouter.put('/:id',WalletController.editWallet)
