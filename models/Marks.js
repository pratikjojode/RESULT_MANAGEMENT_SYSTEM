// File: models/Marks.js
import mongoose from "mongoose";

const marksSchema = new mongoose.Schema({
  studentId: { type: Number, required: true },
  name: { type: String, required: true },
  subject: { type: String, required: true },
  marks: { type: Number, required: true },
});

const Marks = mongoose.model("Marks", marksSchema);

export default Marks;
