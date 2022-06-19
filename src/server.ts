import express, { Request, Response } from "express";
import connectDb from "./db";
import { PORT } from "./utils/constants";

connectDb();

const app = express();

app.use(express.json({})); // eslint-disable-line

app.get("/", (req: Request, res: Response) =>
  res.json({ message: "Welcome to this app dang" })
);

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
