import { Router } from "express";

const userRouter = Router();

userRouter.get("/", async (req, res) => {
  res.status(200).send("Healthy");
});

export default userRouter;
