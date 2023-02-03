declare class WalletService {
    private walletRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (wallet: any) => Promise<any>;
    private update;
    private delete;
}
declare const _default: WalletService;
export default _default;
