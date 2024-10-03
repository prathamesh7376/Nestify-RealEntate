import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
dotenv.config();
const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MONDG_DB");
  })
  .catch((error) => {
    console.log(error);
  });
const app = express();

app.use("/api/user", userRouter);

app.listen(PORT, (req, res) => {
  console.log(`Server is runningg on port ${PORT}`);
});
