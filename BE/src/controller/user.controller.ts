import {Request, Response} from "express";
import UserService from "../service/user.service";
import bcrypt from "bcrypt";
class UserController{
    private userService;
    constructor() {
        this.userService = UserService
    }
    findUser= async (req:Request,res:Response) => {
        let id = req.params.id
        let user =await this.userService.findById(id)

        if(user){
            res.status(200).json(user)
        }
    }
    editUser= async (req:Request,res:Response) => {
        let id=req.params.id;
        let userInfo={
            username:req.body.username,
            password: await bcrypt.hash(req.body.password,10)
        }
        let user=await this.userService.editProfile(id,userInfo)
        res.status(200).json(user)
    }
}
export default new UserController();