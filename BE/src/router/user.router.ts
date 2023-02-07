import { Router } from 'express';
import TransactionController from "../controller/transaction.controller";
import UserController from "../controller/user.controller";

const userRouter = Router();
userRouter.get('/user/:id',UserController.findUser)
userRouter.put('/user/:id',UserController.editUser)
export default userRouter