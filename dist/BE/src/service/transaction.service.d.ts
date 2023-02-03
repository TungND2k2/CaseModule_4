declare class TransactionService {
    private transactionRepository;
    constructor();
    savePay: (pay: any) => Promise<any>;
    getAll: () => Promise<any>;
    findOne: (id: any) => Promise<any>;
}
declare const _default: TransactionService;
export default _default;
