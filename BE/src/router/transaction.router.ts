import { Router } from 'express';
import TransactionController from "../controller/transaction.controller";

const payRouter = Router();
payRouter.get('/transaction',TransactionController.showTransaction)
payRouter.post('/transaction/create',TransactionController.create)
export default payRouter;