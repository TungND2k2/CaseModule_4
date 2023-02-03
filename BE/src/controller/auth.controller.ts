import {Request, Response} from "express";
import AuthService from "../service/auth.service"
class AuthController {
    private AuthService

    constructor() {
        this.AuthService = AuthService;
    }

    register = async (req, res) => {
        let user = await this.AuthService.register(req.body)
        res.status(201).json(user)
    }

    login = async (req: Request, res: Response) => {
        let user = {
            username : req.body.username,
            password : req.body.password
        }
       
        let response = await this.AuthService.checkUser(user)
        console.log(response)
        res.status(200).json(response)
    }
}
export default new AuthController()