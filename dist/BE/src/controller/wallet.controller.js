"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wallet_service_1 = __importDefault(require("../service/wallet.service"));
const categories_service_1 = __importDefault(require("../service/categories.service"));
class WalletController {
    constructor() {
        this.showWallet = async (req, res) => {
            try {
                let id = req.params.id;
                let wallet = await wallet_service_1.default.getAll(id);
                res.status(200).json(wallet);
            }
            catch (err) {
                console.log(err);
                res.status(500).json(err.message);
            }
        };
        this.create = async (req, res) => {
            try {
                let newWallet = await wallet_service_1.default.save(req.body);
                res.status(200).json(newWallet);
            }
            catch (err) {
                console.log(err);
                res.status(500).json(err.message);
            }
        };
        this.removeWallet = async (req, res) => {
            try {
                let id = req.params.id;
                let removeWallet = await this.walletService.delete(id);
                console.log(removeWallet);
                res.status(200).json({ ok: removeWallet, message: "success removed wallet" });
            }
            catch (err) {
                console.log(err.message);
                res.status(500).json(err.message);
            }
        };
        this.editWallet = async (req, res) => {
            try {
                let id = req.params.id;
                let editWallet = await this.walletService.update(id, req.body);
                res.status(200).json(editWallet);
            }
            catch (err) {
                console.log(err);
                res.status(500).json(err.message);
            }
        };
        this.findOneWallet = async (req, res) => {
            let id = req.params.id;
            let categories = await this.categoryService.getAll();
            let wallet = await this.walletService.findById(id);
            if (wallet) {
                res.status(200).json({ wallet, categories });
            }
        };
        this.walletService = wallet_service_1.default;
        this.categoryService = categories_service_1.default;
    }
}
exports.default = new WalletController();
//# sourceMappingURL=wallet.controller.js.map