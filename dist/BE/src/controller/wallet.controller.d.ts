import { Request, Response } from "express";
declare class WalletController {
    private walletService;
    constructor();
    showWallet: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    removeWallet: (req: Request, res: Response) => Promise<void>;
    editWallet: (req: Request, res: Response) => Promise<void>;
}
declare const _default: WalletController;
export default _default;
