import Admin from "../models/adminModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import xlsx from "xlsx";
import studentModel from "../models/studentModel.js";
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

// Controller to upload and process marks from an Excel file
export const uploadMarksController = async (req, res) => {
  try {
    // Check if the file exists
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    // Read the file buffer using xlsx
    const workbook = xlsx.read(req.file.buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);

    // Iterate through the extracted data and update marks
    for (let row of data) {
      const {
        studentId,
        attendance,
        projectReview,
        assessment,
        projectSubmission,
        linkedInPost,
      } = row;

      const student = await studentModel.findOne({ studentId });

      if (student) {
        student.marks = {
          attendance: attendance || 0,
          projectReview: projectReview || 0,
          assessment: assessment || 0,
          projectSubmission: projectSubmission || 0,
          linkedInPost: linkedInPost || 0,
        };
        await student.save();
      } else {
        console.log(`Student with ID ${studentId} not found`);
      }
    }

    res.status(200).json({
      success: true,
      message: "Marks uploaded and saved successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in uploading marks",
      error,
    });
  }
};
