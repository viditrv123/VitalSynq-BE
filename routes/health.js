import { Router } from "express";

const healthRouter = Router();

healthRouter.get("/", async (req, res) => {
  res.status(200).send("Healthy");
});

export default healthRouter;
