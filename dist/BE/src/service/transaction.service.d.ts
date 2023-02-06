declare class TransactionService {
    private transactionRepository;
    private wallet;
    constructor();
    savePay: (pay: any) => Promise<any>;
    getAll: () => Promise<any>;
    findOne: (id: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    findDate: (id: any, date: any) => Promise<any>;
}
declare const _default: TransactionService;
export default _default;
