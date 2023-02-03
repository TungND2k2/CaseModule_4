import { Router } from 'express';
import WalletController from "../controller/wallet.controller";

const router = Router();
router.get('/wallet',WalletController.showWallet)
export default router;