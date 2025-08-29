import { Router } from "express";
import userRouter from "./user.js";
import hospitalRouter from "./hospital.js";
import doctorRouter from "./doctor.js";
import healthRouter from "./health.js";

const router = Router();

router.use("/users", userRouter);
router.use("/hospitals", hospitalRouter);
router.use("/doctors", doctorRouter);
router.use("/", healthRouter);

export default router;
