import { Router } from "express";
import UserController from "../controllers/user.js";

const userRouter = Router();

userRouter.post("/signIn", async (req, res) => {
  return UserController.signIn(req, res);
});

export default userRouter;
