"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../model/user");
const data_source_1 = require("../data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middlewares/auth");
class AuthService {
    constructor() {
        this.register = async (user) => {
            user.password = await bcrypt_1.default.hash(user.password, 10);
            return this.userRepository.save(user);
        };
        this.checkUser = async (user) => {
            try {
                let userCheck = await this.userRepository.findOneBy({ username: user.username });
                if (!userCheck) {
                    return "Wrong User";
                }
                else {
                    let passwordCompare = await bcrypt_1.default.compare(user.password, userCheck.password);
                    if (!passwordCompare) {
                        return 'Wrong Password';
                    }
                    else {
                        let payload = {
                            id_user: userCheck.id_user,
                            userName: userCheck.userName,
                        };
                        const token = jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                            expiresIn: 36000
                        });
                        const check = {
                            token: token,
                            id_user: userCheck.id_user,
                            userName: userCheck.username,
                        };
                        return check;
                    }
                }
            }
            catch (e) {
                console.log(e.message);
            }
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new AuthService();
//# sourceMappingURL=auth.service.js.map