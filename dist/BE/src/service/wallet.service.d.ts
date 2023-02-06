declare class WalletService {
    private walletRepository;
    constructor();
    getAll: (id: any) => Promise<any>;
    save: (wallet: any) => Promise<any>;
    private update;
    private delete;
    findById: (id: any) => Promise<any>;
}
declare const _default: WalletService;
export default _default;
