"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const categories_1 = require("../model/categories");
class CategoryService {
    constructor() {
        this.getAll = async () => {
            let category = await this.categoryRepository.find();
            return category;
        };
        this.findOne = async (id) => {
            let pay = await this.categoryRepository.findOneBy({ id: id.id });
            return pay;
        };
        this.categoryRepository = data_source_1.AppDataSource.getRepository(categories_1.Categories);
    }
}
exports.default = new CategoryService();
//# sourceMappingURL=categories.service.js.map