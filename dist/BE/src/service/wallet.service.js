"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const wallet_1 = require("../model/wallet");
class WalletService {
    constructor() {
        this.getAll = async () => {
            let sql = `select * from Wallet`;
            let wallet = await this.walletRepository.query(sql);
            return wallet;
        };
        this.save = async (wallet) => {
            return this.walletRepository.save(wallet);
        };
        this.update = async (id, newWallet) => {
            let wallet = await this.walletRepository.findOneBy({ id_wallet: id });
            if (!wallet) {
                return null;
            }
            return this.walletRepository.update({ id_wallet: id }, newWallet);
        };
        this.delete = async (id) => {
            let wallet = await this.walletRepository.findOneBy({ id_wallet: id });
            if (!wallet) {
                return null;
            }
            return this.walletRepository.delete({ id_wallet: id });
        };
        this.walletRepository = data_source_1.AppDataSource.getRepository(wallet_1.Wallet);
    }
}
exports.default = new WalletService();
//# sourceMappingURL=wallet.service.js.map