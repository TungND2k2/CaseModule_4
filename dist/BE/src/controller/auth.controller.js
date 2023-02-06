"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_service_1 = __importDefault(require("../service/auth.service"));
class AuthController {
    constructor() {
        this.register = async (req, res) => {
            let user = await this.AuthService.register(req.body);
            res.status(200).json(user);
        };
        this.login = async (req, res) => {
            let user = {
                username: req.body.username,
                password: req.body.password
            };
            let response = await this.AuthService.checkUser(user);
            res.status(200).json(response);
        };
        this.AuthService = auth_service_1.default;
    }
}
exports.default = new AuthController();
//# sourceMappingURL=auth.controller.js.map