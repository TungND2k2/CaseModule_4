import { Router } from 'express';
import TransactionController from "../controller/transaction.controller";

const payRouter = Router();
payRouter.get('/transaction',TransactionController.showTransaction)
payRouter.get('/transaction/wallet/:id',TransactionController.showListTransactionOfWallet)
payRouter.post('/transaction/wallet/:id',TransactionController.showListTransactionOfDate)
payRouter.post('/transaction/create/:id',TransactionController.create)
export default payRouter;