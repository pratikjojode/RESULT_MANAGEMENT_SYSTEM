// middleware/auth.js
import jwt from "jsonwebtoken";
import studentModel from "../models/studentModel.js";
// Verify if the user is an admin
export const verifyAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY_JWT);
    const student = await studentModel.findById(decoded.userId);

    if (student.role !== "admin") {
      return res
        .status(403)
        .json({ success: false, message: "Access forbidden. Admins only." });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ success: false, message: "Authentication failed." });
  }
};
