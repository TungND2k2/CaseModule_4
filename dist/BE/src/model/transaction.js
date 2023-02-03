"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.nameTransaction = void 0;
const typeorm_1 = require("typeorm");
var nameTransaction;
(function (nameTransaction) {
    nameTransaction["SPENDING"] = "spending";
    nameTransaction["PROCEEDS"] = "proceeds";
})(nameTransaction = exports.nameTransaction || (exports.nameTransaction = {}));
let Transaction = class Transaction {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Transaction.prototype, "id_transaction", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: nameTransaction,
    }),
    __metadata("design:type", String)
], Transaction.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Number)
], Transaction.prototype, "idWallet", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Number)
], Transaction.prototype, "money", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", Number)
], Transaction.prototype, "idCategory", void 0);
__decorate([
    (0, typeorm_1.Column)('time', { name: 'elapsed_time' }),
    __metadata("design:type", Date)
], Transaction.prototype, "Time", void 0);
Transaction = __decorate([
    (0, typeorm_1.Entity)()
], Transaction);
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map