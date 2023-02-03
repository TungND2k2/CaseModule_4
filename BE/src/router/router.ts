import { Router } from 'express';
import WalletController from "../controller/wallet.controller";


export const WalletRouter = Router();
WalletRouter.get('/',WalletController.showWallet)
