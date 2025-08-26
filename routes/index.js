import { Router } from "express";
import userRouter from "./user.js";
import hospitalRouter from "./hospital.js";
import doctorRouter from "./doctor.js";

const router = Router();

router.use("/users", userRouter);
router.use("/hospitals", hospitalRouter);
router.use("/doctors", doctorRouter);

export default router;
