import express from "express";
import { test, updateUser } from "../contrillers/userController.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();

router.get("/test", test);
router.get("/update/:id", verifyToken, updateUser);

export default router;
