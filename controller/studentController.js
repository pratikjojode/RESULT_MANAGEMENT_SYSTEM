import studentModel from "../models/studentModel.js";

export const studentregisterController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "Error in registration! Please register again.",
      });
    }

    const existingStudent = await studentModel.findOne({ email });
    if (existingStudent) {
      return res.status(400).send({
        success: false,
        message: "Email is already in use or registered.",
      });
    }

    const student = await studentModel.create({
      name,
      email,
      password,
    });

    const token = student.createJWT();

    res.status(201).send({
      success: true,
      message: "Student registered successfully.",
      student,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registering the student.",
      error,
    });
  }
};

// login the student contoller

export const studentLoginConttroller = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await studentModel.findOne({ email });
    const isMatch = await student.comparePassword(password);
    if (!isMatch) {
      res.status(500).send({
        success: false,
        message: "Something went wrong",
      });
    }
    const token = student.createJWT();
    return res.status(200).send({
      success: true,
      message: "Student Login succefully",
      student,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Login falied!!!",
      error,
    });
  }
};

export const getStudentOnIdController = async (req, res) => {
  try {
    const { studentId } = req.body;
    if (!studentId) {
      return res.status(400).send({
        success: false,
        message: "Student ID not provided",
      });
    }

    const student = await studentModel.findOne({ studentId });
    if (!student) {
      return res.status(404).send({
        success: false,
        message: "No student found with the given ID",
      });
    }
    res.status(200).send({
      success: true,
      message: "Student fetched successfully",
      student,
    });
  } catch (error) {
    console.error("Error fetching student by ID:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while fetching the student",
      error: error.message,
    });
  }
};
