"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const wallet_1 = require("../model/wallet");
class WalletService {
    constructor() {
        this.getAll = async () => {
            let wallet = await this.walletRepository.find();
            return wallet;
        };
        this.findById = async (id) => {
            let wallet = await this.walletRepository.findById({ id: id });
            return wallet;
        };
        this.walletRepository = data_source_1.AppDataSource.getRepository(wallet_1.Wallet);
    }
}
exports.default = new WalletService();
//# sourceMappingURL=wallet.service.js.map