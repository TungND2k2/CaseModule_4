import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {Category} from ".././service/categories.service"
import { User } from ".././service/user.service";

export class AuthController {

    static async login(req, res) {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (user) {
                const comparePass = await bcrypt.compare(req.body.password, user.password);
                if (!comparePass) {
                    req.flash("error", "Sai mật khẩu!!!");
                }
                let payload = {
                    user_id: user["id"],
                    name: user["name"],
                    username: user["email"],
                    role: user["role"]
                }
                const token = jwt.sign(payload, '123456789', {
                    expiresIn: 30 * 60 * 1000,

                });

                let options = {
                    maxAge: 1000 * 60 * 30, // would expire after 30 minutes
                    httpOnly: true, // The cookie only accessible by the web server
                }
            } else {
                req.flash("error", "Sai tài khoản hoặc mật khẩu");
            }
        } catch (err) {
            console.log(err);
        }
    }
}

    