// imports
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import connectDb from "./config/db.js";
// rest object

const app = express();

// use the env file in the prioject
dotenv.config();
connectDb();
// midelwares
app.use(morgan("dev"));

// get the file on browser
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the result managment system</h1>");
});
// port cofig
const PORT = process.env.PORT || 8080;
// listing the portal
app.listen(8080, () => {
  console.log(
    `Result management System server is running on port ${PORT}`.bgBlack.white
  );
});
