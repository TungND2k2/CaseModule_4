import {User} from "../model/user";
import {AppDataSource} from "../data-source";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
class UserService {
    private userRepository;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    editProfile = async (id, newProfile) => {
        let user = await this.userRepository.findOneBy({id_user: id});
        if (!user) {
            return null;
        }
        return this.userRepository.update({id_user: id}, newProfile);
    }
    findById = async (id) => {
        let user = await this.userRepository.findOneBy({id_user: id});
        return user;
    }
}

export default new UserService()