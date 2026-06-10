import { Router } from "express";
import { loginUser, registerUser } from "../controllers/userAuth.controller.ts";

const userAuthRouter = Router();

userAuthRouter.post("/register", registerUser);
userAuthRouter.post("/login", loginUser);

export default userAuthRouter;