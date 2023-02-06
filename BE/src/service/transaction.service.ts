import {AppDataSource} from "../data-source";
import {Transaction} from "../model/transaction";
import {Wallet} from "../model/wallet";

class TransactionService {
    private transactionRepository
    private wallet
    constructor() {
        this.transactionRepository=AppDataSource.getRepository(Transaction)
        this.wallet=AppDataSource.getRepository(Wallet)
    }
    savePay = async (pay) => {
        return this.transactionRepository.save(pay);
    }
    getAll = async () => {
        let pay = await this.transactionRepository.find()
        return pay;

    }
    findOne=async (id)=>{
            let pay = await this.transactionRepository.findOneBy({id: id.id});
            return pay;
    }
    findById = async (id) => {
        let wallet = await this.transactionRepository.findBy({idWallet: id});
        return wallet;
    }
    findDate = async(id,date)=>{
        let sql=`select name,time,money from transaction where  idWallet = ${id} and time like '%${date}%'`
        let time=await this.transactionRepository.query(sql)
        return time
}

}
export default new TransactionService();