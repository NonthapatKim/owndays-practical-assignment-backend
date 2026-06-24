import { Router, Request, Response } from "express";
import fs from "fs";
import path from "path";

const router = Router();

const DATA_FILE = path.join(process.cwd(), "data", "bookings.json");

function readBookings() {
  if (!fs.existsSync(DATA_FILE)) return [];
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
}

function writeBookings(data: unknown[]) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

router.post("/", (req: Request, res: Response) => {
  const { name, email, phonenumber, branch, date } = req.body;

  if (!name || !email || !phonenumber || !branch || !date) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const bookings = readBookings();
  const entry = { name, email, phonenumber, branch, date, createdAt: new Date().toISOString() };
  
  bookings.push(entry);
  writeBookings(bookings);
  
  res.status(201).json({ success: true, data: entry });
});

router.get("/", (_req: Request, res: Response) => {
  res.json(readBookings());
});

export default router;
