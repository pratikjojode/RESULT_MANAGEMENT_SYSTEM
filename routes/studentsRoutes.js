import express from "express";
import { studentregisterController } from "../controller/studentController.js";

const router = express.Router();

router.post("/register", studentregisterController);
export default router;
