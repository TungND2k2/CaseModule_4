import {AppDataSource} from "../data-source";
import {Wallet} from "../model/wallet";

class WalletService {
    private walletRepository
    constructor() {
        this.walletRepository = AppDataSource.getRepository(Wallet)
    }

    getAll = async () => {
        let sql = `select * from Wallet`
        let wallet = await this.walletRepository.query(sql)
        return wallet;
    }

    save = async (wallet) => {
        return this.walletRepository.save(wallet)
    }

    private update = async (id, newWallet) => {
        let wallet = await this.walletRepository.findOneBy({id_wallet: id})
        if (!wallet) {
            return null;
        }
        return this.walletRepository.update({id_wallet: id}, newWallet)
    }

    private delete = async (id) => {
        let wallet = await this.walletRepository.findOneBy({id_wallet: id})
        if (!wallet) {
            return null;
        }
        return this.walletRepository.delete({id_wallet: id})
    }
}
export default new WalletService();