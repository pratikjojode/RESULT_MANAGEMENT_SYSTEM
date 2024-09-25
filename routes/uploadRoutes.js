import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import { uploadMarksController } from "../controller/marksController.js";
import { __dirname } from "../utils/getDirname.js"; // Import __dirname utility

// Set up storage options
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the uploads directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Use original file extension
  },
});

// Create Multer instance with configuration
const upload = multer({ storage: storage });

const router = express.Router();

// Define the upload route
router.post("/upload-marks", upload.single("file"), uploadMarksController); // Ensure 'file' matches the form input name

export default router;
