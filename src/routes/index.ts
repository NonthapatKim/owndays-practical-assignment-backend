import { Router, Request, Response } from "express";
import bookingRouter from "./booking";
import branchRouter from "./branch";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello from example router!" });
});

router.use("/booking", bookingRouter);
router.use("/branch", branchRouter);

export default router;
