import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_CONNECTION_URI as string)
.then(() => { console.log("DB CONNECTED!!") })
.catch((err) => { console.log("problem connecting DB!", err) });

const app = express();
app.use(express.json());
app.use(cors());



app.get("/", (req: Request, res: Response) => { res.json("Hi!! from Backend.") })

app.listen("3000", () => {
    console.log("Backend is up an running");
})