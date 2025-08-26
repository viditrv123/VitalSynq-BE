import { Router } from "express";

const doctorRouter = Router();

doctorRouter.get("/", async (req, res) => {
  res.status(200).send("Healthy");
});

export default doctorRouter;
