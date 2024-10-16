import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => { res.json("Hi!! from Backend.") })

app.listen("3000", () => console.log("backend is up an running"))