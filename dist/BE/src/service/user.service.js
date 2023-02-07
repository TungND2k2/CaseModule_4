"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../model/user");
const data_source_1 = require("../data-source");
class UserService {
    constructor() {
        this.editProfile = async (id, newProfile) => {
            let user = await this.userRepository.findOneBy({ id_user: id });
            if (!user) {
                return null;
            }
            return this.userRepository.update({ id_user: id }, newProfile);
        };
        this.findById = async (id) => {
            let user = await this.userRepository.findOneBy({ id_user: id });
            return user;
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=user.service.js.map