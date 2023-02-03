"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const wallet_router_1 = require("./wallet.router");
exports.router = (0, express_1.Router)();
exports.router.use('/wallets', wallet_router_1.WalletRouter);
//# sourceMappingURL=router.js.map