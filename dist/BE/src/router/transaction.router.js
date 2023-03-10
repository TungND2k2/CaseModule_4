"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transaction_controller_1 = __importDefault(require("../controller/transaction.controller"));
const payRouter = (0, express_1.Router)();
payRouter.get('/transaction', transaction_controller_1.default.showTransaction);
payRouter.get('/transaction/wallet/:id', transaction_controller_1.default.showListTransactionOfWallet);
payRouter.post('/transaction/wallet/:id', transaction_controller_1.default.showListTransactionOfDate);
payRouter.post('/transaction/create/:id', transaction_controller_1.default.create);
exports.default = payRouter;
//# sourceMappingURL=transaction.router.js.map