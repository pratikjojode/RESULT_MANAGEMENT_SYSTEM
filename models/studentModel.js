import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
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
  role: {
    type: String,
    enum: ["admin", "student"],
    default: "student",
  },
  marks: {
    type: MarksSchema,
    default: {},
  },
});

studentSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

studentSchema.pre("save", function (next) {
  if (!this.studentId) {
    this.studentId = `STU${Date.now()}`;
  }
  console.log("Generated studentId:", this.studentId);
  next();
});

// compare the password
studentSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};
// josn webtoken
studentSchema.methods.createJWT = function () {
  return JWT.sign({ userId: this._id }, process.env.SECRET_KEY_JWT, {
    expiresIn: "4d",
  });
};

export default mongoose.model("Student", studentSchema);
