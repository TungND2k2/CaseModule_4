"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const categories_1 = require("../model/categories");
class CategoryService {
    constructor() {
        this.getAll = async () => {
            let sql = `select * from category`;
            return await this.categoryRepository.query(sql);
        };
        this.categoryRepository = data_source_1.AppDataSource.getRepository(categories_1.Categories);
    }
}
exports.default = new CategoryService();
//# sourceMappingURL=categories.service.js.map