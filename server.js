// imports
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import connectDb from "./config/db.js";
import studentRoutes from "./routes/studentsRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

// rest object
const app = express();

// use the env file in the project
dotenv.config();
connectDb();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/student", studentRoutes);
app.use("/api/v1/admin", adminRoutes);

// get the file on browser
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the result management system</h1>");
});

// port config
const PORT = process.env.PORT || 8080;

// listening on the port
app.listen(PORT, () => {
  console.log(
    `Result management System server is running on port ${PORT}`.bgBlack.white
  );
});
