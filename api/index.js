import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MONDG_DB");
  })
  .catch((error) => {
    console.log(error);
  });
const app = express();

app.listen(5000, (req, res) => {
  console.log("Server is runningg on port 500");
});
