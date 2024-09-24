import express from "express";
import {
  getStudentOnIdController,
  studentLoginConttroller,
  studentregisterController,
} from "../controller/studentController.js";
import studentAuth from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/StudentRegister", studentregisterController);

router.post("/StudentLogin", studentAuth, studentLoginConttroller);

router.get("/getStudentId/:id", getStudentOnIdController);
export default router;
