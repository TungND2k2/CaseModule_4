"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_service_1 = require(".././service/user.service");
class AuthController {
    static async login(req, res) {
        try {
            const user = await user_service_1.User.findOne({ email: req.body.email });
            if (user) {
                const comparePass = await bcrypt_1.default.compare(req.body.password, user.password);
                if (!comparePass) {
                    req.flash("error", "Sai mật khẩu!!!");
                }
                let payload = {
                    user_id: user["id"],
                    name: user["name"],
                    username: user["email"],
                    role: user["role"]
                };
                const token = jsonwebtoken_1.default.sign(payload, '123456789', {
                    expiresIn: 30 * 60 * 1000,
                });
                let options = {
                    maxAge: 1000 * 60 * 30,
                    httpOnly: true,
                };
            }
            else {
                req.flash("error", "Sai tài khoản hoặc mật khẩu");
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map