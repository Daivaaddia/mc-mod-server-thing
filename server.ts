import express, { json, Request, Response } from "express";
import { addLog, getLogs } from "./log";

const app = express();
app.use(json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("Hello");
});

app.post("/api/log", (req: Request, res: Response) => {
  const { log } = req.body;

  try {
    const ret = addLog(log);
    res.status(200).json(ret);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.get("/api/log", (req: Request, res: Response) => {
  try {
    const ret = getLogs();
    res.status(200).json(ret);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

const port = parseInt(process.env.PORT || "5486");
const host = process.env.IP || "127.0.0.1";
app.listen(port, host, () => {
  console.log(`Server started`);
});
