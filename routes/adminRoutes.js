import express from "express";
import { registerAdmin, loginAdmin } from "../controller/adminController.js";
import multer from "multer";
import { uploadSingleFile } from "../middlewares/uploadMiddleware.js";
import { uploadMarksController } from "../controller/marksController.js";

// router object
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

//routes for admin register
router.post("/register", registerAdmin);



//routes for admin login
router.post("/login", loginAdmin);
router.post("/upload-marks", uploadSingleFile, uploadMarksController);

export default router;
