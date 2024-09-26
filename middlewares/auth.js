import JWT from "jsonwebtoken";
import Student from "../models/studentModel.js"; // Adjust the path based on your structure

export const isAuthenticated = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("Authorization Header:", authHeader); // Log the auth header for debugging

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Authentication failed. No token provided." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = JWT.verify(token, process.env.SECRET_KEY_JWT);
    const user = await Student.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Token verification error:", error.message); // Log any error that occurs during token verification
    return res
      .status(401)
      .json({ message: "Authentication failed. Invalid token." });
  }
};

export const isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authenticated." });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }

  next();
};
