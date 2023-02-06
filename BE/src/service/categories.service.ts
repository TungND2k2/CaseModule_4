import {AppDataSource} from "../data-source";
import {Categories} from "../model/categories";

class CategoryService  {
    private categoryRepository
    constructor() {
        this.categoryRepository=AppDataSource.getRepository(Categories)
    }

    getAll = async () => {
        let category = await this.categoryRepository.find()
        return category;
    }
    findOne=async (id)=>{
        let pay = await this.categoryRepository.findOneBy({id: id.id});
        return pay;
    }
}
export default new CategoryService();