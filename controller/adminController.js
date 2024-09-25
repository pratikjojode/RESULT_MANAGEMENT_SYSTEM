import Admin from "../models/adminModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register Admin
export const registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if admin already exists
    let admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new admin
    admin = new Admin({
      name,
      email,
      password: hashedPassword,
    });

    await admin.save();

    // Create JWT token
    const payload = {
      admin: {
        id: admin._id,
      },
    };

    const token = jwt.sign(payload, "secretKey", { expiresIn: "5d" });

    res.status(201).json({
      message: "Admin registered successfully",
      name,
      email,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Admin Login
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create JWT token
    const payload = {
      admin: {
        id: admin._id,
      },
    };

    const token = jwt.sign(payload, "secretKey", { expiresIn: "1h" });

    res.json({
      message: "Logged in successfully",
      email,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
