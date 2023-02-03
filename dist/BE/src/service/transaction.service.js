"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const transaction_1 = require("../model/transaction");
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
        this.transactionRepository = data_source_1.AppDataSource.getRepository(transaction_1.Transaction);
    }
}
exports.default = new TransactionService();
//# sourceMappingURL=transaction.service.js.map