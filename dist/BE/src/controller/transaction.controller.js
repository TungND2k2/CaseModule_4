"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_service_1 = __importDefault(require("../service/transaction.service"));
const wallet_service_1 = __importDefault(require("../service/wallet.service"));
class TransactionController {
    constructor() {
        this.showTransaction = async (req, res) => {
            let wallet = await this.transactionService.getAll();
            if (wallet) {
                res.status(200).json(wallet);
            }
        };
        this.create = async (req, res) => {
            let id = req.params.id;
            let wallet = await this.walletService.findById(id);
            let payNew = req.body;
            let createPay = await this.transactionService.savePay(payNew);
            if (createPay) {
                res.status(200).json(wallet);
            }
        };
        this.showListTransactionOfWallet = async (req, res) => {
            let id = req.params.id;
            let wallet = await this.walletService.findById(id);
            let transaction = await this.transactionService.findById(id);
            if (transaction) {
                res.status(200).json({ wallet, transaction });
            }
            else {
                res.status(404).json({ message: 'Not Found' });
            }
        };
        this.showListTransactionOfDate = async (req, res) => {
            let id = req.params.id;
            let time = req.body.time;
            let wallet = await this.walletService.findById(id);
            let date = await this.transactionService.findDate(id, time);
            if (date) {
                res.status(200).json({ wallet, date });
            }
            else {
                res.status(404).json({ message: 'Not Found' });
            }
        };
        this.transactionService = transaction_service_1.default;
        this.walletService = wallet_service_1.default;
    }
}
exports.default = new TransactionController();
//# sourceMappingURL=transaction.controller.js.map