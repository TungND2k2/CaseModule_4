"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../service/user.service"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserController {
    constructor() {
        this.findUser = async (req, res) => {
            let id = req.params.id;
            let user = await this.userService.findById(id);
            if (user) {
                res.status(200).json(user);
            }
        };
        this.editUser = async (req, res) => {
            let id = req.params.id;
            let userInfo = {
                username: req.body.username,
                password: await bcrypt_1.default.hash(req.body.password, 10)
            };
            let user = await this.userService.editProfile(id, userInfo);
            res.status(200).json(user);
        };
        this.userService = user_service_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=user.controller.js.map