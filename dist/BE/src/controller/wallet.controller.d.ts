import { Request, Response } from "express";
declare class WalletController {
    private WalletService;
    constructor();
    showWallet: (req: Request, res: Response) => Promise<void>;
    findWallet: (req: Request, res: Response) => Promise<void>;
}
declare const _default: WalletController;
export default _default;
