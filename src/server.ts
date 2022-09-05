import mongoose from "mongoose";
import dotenv from "dotenv";
import { app } from "./app";

dotenv.config();
const start = async () => {
  const server = require("http").createServer(app);

  try {
    await mongoose.connect("mongodb://localhost:27017/express-ts");

    console.log("CONNECTED TO DATABASE");
  } catch (error) {
    console.log(
      (error as any).message
        ? (error as any).message
        : "Failed to start the server"
    );
  }

  server.listen(process.env.PORT, () => {
    console.log(`LISTENING TO PORT ${process.env.PORT}`);
  });
};

start();
