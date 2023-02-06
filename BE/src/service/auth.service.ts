import {User} from "../model/user";
import {AppDataSource} from "../data-source";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import {SECRET} from "../middleware/auth";
import { LessThanOrEqual } from "typeorm";

class AuthService {
    private userRepository;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    register = async (user) => {
        user.password = await bcrypt.hash(user.password, 10)

        return this.userRepository.save(user)
    }

    checkUser = async (user) => {
        try {

            let userCheck = await this.userRepository.findOneBy({username: user.username})

            if (!userCheck) {
                return "Wrong User"
            } else {
                let passwordCompare = await bcrypt.compare(user.password, userCheck.password)

                if (!passwordCompare) {
                    return 'Wrong Password'
                }else {
                    let payload = {
                        id_user: userCheck.id_user,
                        userName: userCheck.userName,

                    }
                    const token = jwt.sign(payload, SECRET, {
                        expiresIn: 36000
                    })
                    const check = {
                        token: token,
                        id_user: userCheck.id_user,
                        userName: userCheck.username,

                    }
                    return check;
                }
            }
        }catch (e) {
            console.log(e.message)
        }

    }
}

export default new AuthService()