import {AppDataSource} from "../data-source";
import {Transaction} from "../model/transaction";

class TransactionService {
    private transactionRepository
    constructor() {
        this.transactionRepository=AppDataSource.getRepository(Transaction)
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
}
export default new TransactionService();