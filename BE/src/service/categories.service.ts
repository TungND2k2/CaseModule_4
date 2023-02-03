import {AppDataSource} from "../data-source";
import {Categories} from "../model/categories";

class CategoryService {
    private categoryRepository

    constructor() {
        this.categoryRepository = AppDataSource.getRepository(Categories)
    }

    getAll = async () => {
        let sql = `select * from category`
        return await this.categoryRepository.query(sql)
    }
}

export default new CategoryService()