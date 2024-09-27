import studentModel from "../models/studentModel.js";

// Student registration controller
export const studentregisterController = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
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
      role,
    });

    const token = student.createJWT(); // Ensure this creates a token successfully

    res.status(201).send({
      success: true,
      message: "Student registered successfully.",
      student,
      token,
    });
  } catch (error) {
    console.error("Registration error:", error); // Improved logging for errors
    res.status(500).send({
      success: false,
      message: "Error in registering the student.",
      error: error.message, // Provide more informative error messages
    });
  }
};

// Student login controller
export const studentLoginConttroller = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await studentModel.findOne({ email });

    if (!student) {
      return res.status(404).send({
        success: false,
        message: "Student not found",
      });
    }

    const isMatch = await student.comparePassword(password);

    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invalid password",
      });
    }

    const token = student.createJWT(); // Ensure this creates a token successfully

    return res.status(200).send({
      success: true,
      message: "Student logged in successfully",
      student,
      token,
    });
  } catch (error) {
    console.error("Login error:", error); // Improved logging for errors
    return res.status(500).send({
      success: false,
      message: "Login failed!!!",
      error: error.message, // Provide more informative error messages
    });
  }
};

export const getStudentOnIdController = async (req, res) => {
  try {
    const { id: studentId } = req.params; // Get student ID from URL parameter
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

export const getAllStudentController = async (req, res) => {
  try {
    const student = await studentModel.find();
    res.status(200).send({
      success: true,
      message: "Fethced all the students",
      student,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Soemthing went wrong while  fetching students",
    });
  }
};

// result controller

export const createResult = async (req, res) => {
  const { studentId } = req.params; // Extract studentId from the request parameters
  const { totalMarks, grade, passed, remarks, individualMarks } = req.body; // Extract data from the request body

  try {
    // Find the student by studentId
    const student = await studentModel.findOne({ studentId });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    student.marks = {
      ...student.marks,
      ...individualMarks,
    };

    student.totalMarks = totalMarks;
    student.grade = grade;
    student.passed = passed;
    student.remarks = remarks;

    // Save the updated student document
    await student.save();

    return res.status(200).json({
      success: true,
      message: "Result created successfully",
      student,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// get the student reluts
export const getStudentResult = async (req, res) => {
  const { studentId } = req.params;

  try {
    const student = await studentModel.findOne({ studentId });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    return res.status(200).json({
      success: true,
      student: {
        studentId: student.studentId,
        name: student.name,
        email: student.email,
        marks: student.marks,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
