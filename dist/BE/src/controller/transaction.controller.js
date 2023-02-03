"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_service_1 = __importDefault(require("../service/transaction.service"));
class TransactionController {
    constructor() {
        this.showTransaction = async (req, res) => {
            let wallet = await this.transactionService.getAll();
            if (wallet) {
                res.status(200).json(wallet);
            }
        };
        this.create = async (req, res) => {
            let payNew = req.body;
            console.log(payNew);
            let createPay = await this.transactionService.savePay(payNew);
            if (createPay) {
                res.status(200).json({
                    message: "Create product success",
                });
            }
        };
        this.transactionService = transaction_service_1.default;
    }
}
exports.default = new TransactionController();
//# sourceMappingURL=transaction.controller.js.map