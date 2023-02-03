"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletRouter = void 0;
const express_1 = require("express");
const wallet_controller_1 = __importDefault(require("../controller/wallet.controller"));
exports.WalletRouter = (0, express_1.Router)();
exports.WalletRouter.get('/', wallet_controller_1.default.showWallet);
exports.WalletRouter.post('/', wallet_controller_1.default.create);
exports.WalletRouter.delete('/:id', wallet_controller_1.default.removeWallet);
exports.WalletRouter.put('/:id', wallet_controller_1.default.editWallet);
//# sourceMappingURL=wallet.router.js.map