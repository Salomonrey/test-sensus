import Router from "express";
import trackerRouter from "./trackerRouter";

const router = new Router();

router.use("/", trackerRouter);

export default router;
