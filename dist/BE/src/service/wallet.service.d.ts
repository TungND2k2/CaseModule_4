declare class WalletService {
    private walletRepository;
    constructor();
    getAll: () => Promise<any>;
    findById: (id: any) => Promise<any>;
}
declare const _default: WalletService;
export default _default;
