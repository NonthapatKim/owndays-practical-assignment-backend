import { Router, Request, Response } from "express";
import fs from "fs";
import path from "path";

const router = Router();

const DATA_FILE = path.join(process.cwd(), "data", "branches.json");

router.get("/", (_req: Request, res: Response) => {
  const branches = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  res.json(branches);
});

export default router;
