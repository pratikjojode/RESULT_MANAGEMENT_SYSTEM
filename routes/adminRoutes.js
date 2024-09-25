import express from "express";
import { registerAdmin, loginAdmin } from "../controller/adminController.js";

// router object
const router = express.Router();

//routes for admin register
router.post("/register",registerAdmin);

//routes for admin login
router.post("/login",loginAdmin);

export default router;
