import studentModel from "../models/studentModel.js";

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
      message: "Soemthingwent wtong while  fetching students",
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
