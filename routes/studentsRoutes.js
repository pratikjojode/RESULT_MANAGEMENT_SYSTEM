import express from "express";
import {
  studentLoginConttroller,
  studentregisterController,
} from "../controller/studentController.js";
import studentAuth from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/StudentRegister", studentregisterController);

router.post("/StudentLogin", studentAuth, studentLoginConttroller);
export default router;
