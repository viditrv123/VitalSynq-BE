import { Router } from "express";

const hospitalRouter = Router();

hospitalRouter.get("/", async (req, res) => {
  res.status(200).send("Healthy");
});

export default hospitalRouter;
