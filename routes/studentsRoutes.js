import express from "express";
import {
  createResult,
  getAllStudentController,
  getStudentOnIdController,
  getStudentResult,
  studentLoginConttroller,
  studentregisterController,
} from "../controller/studentController.js";
import studentAuth from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/StudentRegister", studentregisterController);

router.post("/StudentLogin", studentAuth, studentLoginConttroller);

router.get("/getStudentId/:id", getStudentOnIdController);

router.get("/getAllStudents", getAllStudentController);

router.post("/createStudentresult/:studentId", createResult);

router.get("/getStudentresult/:studentId", getStudentResult);
export default router;
