import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  // Input validation (optional but recommended)
  if (!email || !password) {
    return next(errorHandler(400, "Email and password are required!"));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(401, "User not Found!")); // Changed to 401
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Invalid credentials!")); // Changed to 401

    const token = jwt.sign({ id: validUser._id }, process.env.SECRET_KEY_JWT);
    const { password: pass, ...rest } = validUser._doc; // Exclude password from response
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest); // Return user data without the password
  } catch (error) {
    next(error);
  }
};
