"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletRouter = void 0;
const express_1 = require("express");
const wallet_controller_1 = __importDefault(require("../controller/wallet.controller"));
exports.WalletRouter = (0, express_1.Router)();
exports.WalletRouter.get('/wallet/home/:id', wallet_controller_1.default.showWallet);
exports.WalletRouter.post('/wallet/create', wallet_controller_1.default.create);
exports.WalletRouter.delete('/wallet/delete/:id', wallet_controller_1.default.removeWallet);
exports.WalletRouter.put('/wallet/edit/:id', wallet_controller_1.default.editWallet);
exports.WalletRouter.get('/wallet/edit/:id', wallet_controller_1.default.findOneWallet);
exports.WalletRouter.get('/wallet/:id', wallet_controller_1.default.findOneWallet);
//# sourceMappingURL=wallet.router.js.map