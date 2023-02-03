import {AppDataSource} from "../data-source";
import {Wallet} from "../model/wallet";

class WalletService {
    private walletRepository
    constructor() {
        this.walletRepository=AppDataSource.getRepository(Wallet)
    }

    getAll = async () => {
        let wallet = await this.walletRepository.find()
        return wallet;
    }
}
export default new WalletService();