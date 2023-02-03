import {Router} from "express";
import {WalletRouter} from "./wallet.router";




export const router = Router();
router.use('/wallets', WalletRouter);