import express from "express";
import {
  studentLoginConttroller,
  studentregisterController,
} from "../controller/studentController.js";

const router = express.Router();

router.post("/StudentRegister", studentregisterController);

router.post("/StudentLogin", studentLoginConttroller);
export default router;
