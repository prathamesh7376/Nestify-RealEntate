import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(errorHandler(401, "Unothorized"));

  jwt.verify(token, process.env.SECRET_KEY_JWT, (err, user) => {
    if (res) return next(errorHandler(403, "Forbidden"));
    req.user = user;
    next();
  });
};
