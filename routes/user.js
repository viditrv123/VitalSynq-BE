import { Router } from "express";
import UserController from "../controllers/user.js";

const userRouter = Router();

userRouter.post("/outh2", async (req, res) => {
  return UserController.oauth2(req, res);
});

export default userRouter;
