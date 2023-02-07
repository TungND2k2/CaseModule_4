"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
const cors_1 = __importDefault(require("cors"));
const data_source_1 = require("./BE/src/data-source");
const auth_router_1 = __importDefault(require("./BE/src/router/auth.router"));
const transaction_router_1 = __importDefault(require("./BE/src/router/transaction.router"));
const wallet_router_1 = require("./BE/src/router/wallet.router");
const user_router_1 = __importDefault(require("./BE/src/router/user.router"));
data_source_1.AppDataSource.initialize().then(() => {
    console.log('Data connection');
});
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('./public'));
app.use('', wallet_router_1.WalletRouter);
app.use('', auth_router_1.default);
app.use('', transaction_router_1.default);
app.use('', user_router_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map