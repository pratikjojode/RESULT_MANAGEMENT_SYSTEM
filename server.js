// File: server.js
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import connectDb from "./config/db.js";
import studentRoutes from "./routes/studentsRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import { __dirname } from "./utils/getDirname.js"; // Import the helper
import cors from "cors";
const app = express();

dotenv.config();
connectDb();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/student", studentRoutes);
app.use("/api/v1/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the result management system</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Result management System server is running on port ${PORT}`.bgBlack.white
  );
});
