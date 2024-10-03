import express from "express";
import { signup } from "../contrillers/authControllers.js";

const router = express.Router();
router.post("/signup", signup);

export default router;
