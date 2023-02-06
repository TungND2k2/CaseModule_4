import { Router } from 'express';
import WalletController from "../controller/wallet.controller";


export const WalletRouter = Router();
WalletRouter.get('/wallet/home/:id',WalletController.showWallet)
WalletRouter.post('/wallet/create',WalletController.create)
WalletRouter.delete('/wallet/delete/:id',WalletController.removeWallet)
WalletRouter.put('/wallet/edit/:id',WalletController.editWallet)
WalletRouter.get('/wallet/edit/:id',WalletController.findOneWallet)
WalletRouter.get('/wallet/:id',WalletController.findOneWallet)
