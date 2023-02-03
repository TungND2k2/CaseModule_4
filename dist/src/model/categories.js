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
exports.Categories = exports.nameCategory = void 0;
const typeorm_1 = require("typeorm");
var nameCategory;
(function (nameCategory) {
    nameCategory["EATING"] = "eating";
    nameCategory["LIVING"] = "living";
    nameCategory["EXTERNAL_INCOME"] = "external income";
    nameCategory["SALARY"] = "salary";
    nameCategory["HOUSE"] = "house";
    nameCategory["INVESTMENT"] = "investment";
    nameCategory["OTHER"] = "other";
})(nameCategory = exports.nameCategory || (exports.nameCategory = {}));
let Categories = class Categories {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Categories.prototype, "id_category", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: nameCategory,
    }),
    __metadata("design:type", String)
], Categories.prototype, "name", void 0);
Categories = __decorate([
    (0, typeorm_1.Entity)()
], Categories);
exports.Categories = Categories;
//# sourceMappingURL=categories.js.map