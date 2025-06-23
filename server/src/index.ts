import "dotenv/config";
import express, { Application } from "express";
import mongoose from "mongoose";

const PORT: number = Number(process.env.PORT) || 5000;
const DB_URL: string = process.env.DB_URL ?? "";

const app: Application = express();
app.use(express.json());

const start = async (): Promise<void> => {
  try {
    await mongoose.connect(DB_URL);
    console.log("\x1b[1m\x1b[32mDB connected\x1b[0m");

    app.listen(PORT, () =>
      console.log(`\x1b[1m\x1b[32mServer started on port ${PORT}\x1b[0m`),
    );
  } catch (error) {
    console.error(error);
  }
};

void start();
