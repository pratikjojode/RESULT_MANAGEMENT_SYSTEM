import mongoose from "mongoose";

const MarksSchema = new mongoose.Schema({
  attendance: { type: Number, default: 0 },
  projectReview: { type: Number, default: 0 },
  assessment: { type: Number, default: 0 },
  projectSubmission: { type: Number, default: 0 },
  linkedInPost: { type: Number, default: 0 },
});

const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  marks: {
    type: MarksSchema,
    default: {},
  },
});

// Hook to generate a unique studentId
studentSchema.pre("save", function (next) {
  if (!this.studentId) {
    this.studentId = `STU${Date.now()}`; // Generate a unique studentId
  }
  console.log("Generated studentId:", this.studentId); // Debug log
  next();
});

export default mongoose.model("Student", studentSchema);
