import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hasedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hasedPassword });
  try {
    await newUser.save();
    res.status(201).json("User Created Successfully!");
  } catch (error) {
    next(errorHandler(550, "Error from function"));
  }
};
