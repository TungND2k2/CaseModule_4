"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wallet_service_1 = __importDefault(require("../service/wallet.service"));
class WalletController {
    constructor() {
        this.showWallet = async (req, res) => {
            let wallet = await this.WalletService.getAll();
            if (wallet) {
                res.status(200).json({
                    message: " success",
                });
            }
        };
        this.WalletService = wallet_service_1.default;
    }
}
exports.default = new WalletController();
//# sourceMappingURL=wallet.controller.js.map