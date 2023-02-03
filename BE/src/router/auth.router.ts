import { AuthController } from ".././controller/auth.controller";
import { Router } from 'express';

const authRoutes = Router();
authRoutes.post("/login", AuthController.login);