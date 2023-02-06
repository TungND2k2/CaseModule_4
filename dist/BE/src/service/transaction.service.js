"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const transaction_1 = require("../model/transaction");
const wallet_1 = require("../model/wallet");
class TransactionService {
    constructor() {
        this.savePay = async (pay) => {
            return this.transactionRepository.save(pay);
        };
        this.getAll = async () => {
            let pay = await this.transactionRepository.find();
            return pay;
        };
        this.findOne = async (id) => {
            let pay = await this.transactionRepository.findOneBy({ id: id.id });
            return pay;
        };
        this.findById = async (id) => {
            let wallet = await this.transactionRepository.findBy({ idWallet: id });
            return wallet;
        };
        this.findDate = async (id, date) => {
            let sql = `select name,time,money from transaction where  idWallet = ${id} and time like '%${date}%'`;
            let time = await this.transactionRepository.query(sql);
            return time;
        };
        this.transactionRepository = data_source_1.AppDataSource.getRepository(transaction_1.Transaction);
        this.wallet = data_source_1.AppDataSource.getRepository(wallet_1.Wallet);
    }
}
exports.default = new TransactionService();
//# sourceMappingURL=transaction.service.js.map