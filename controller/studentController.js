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
