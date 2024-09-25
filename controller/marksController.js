import fs from "fs";
import path from "path"; // Import path
import xlsx from "xlsx"; // Import the xlsx library
import Student from "../models/studentModel.js"; // Import your Student model
import { __dirname } from "../utils/getDirname.js"; // Import __dirname from your utility

export const uploadMarksController = async (req, res) => {
  try {
    // Check if a file was uploaded
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded.",
      });
    }

    // Get the uploaded file path
    const filePath = path.join(__dirname, "..", "uploads", req.file.filename);

    // Read the Excel file
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // Get the first sheet
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]); // Convert the sheet to JSON

    // Log the extracted data for debugging
    console.log("Extracted data from Excel:", data);

    // Loop through the data and save or update to MongoDB
    const studentPromises = data.map(async (entry) => {
      const {
        "Student ID": studentId,
        Attendance,
        "Project Review": projectReview,
        Assessment,
        "Project Submission": projectSubmission,
        "LinkedIn Post": linkedInPost,
      } = entry;

      // Convert studentId to string if necessary
      const studentIdStr = studentId.toString();

      // Find the student by studentId
      const student = await Student.findOne({ studentId: studentIdStr });

      if (student) {
        // Student exists, update their marks
        student.marks.attendance = Attendance || student.marks.attendance;
        student.marks.projectReview =
          projectReview || student.marks.projectReview;
        student.marks.assessment = Assessment || student.marks.assessment;
        student.marks.projectSubmission =
          projectSubmission || student.marks.projectSubmission;
        student.marks.linkedInPost = linkedInPost || student.marks.linkedInPost;

        // Attempt to save the updated student
        try {
          await student.save();
          console.log(`Updated marks for student ID ${studentIdStr}`);
        } catch (saveError) {
          console.error(
            `Failed to save updated marks for student ID ${studentIdStr}:`,
            saveError.message
          );
        }
      } else {
        console.warn(`Student with ID ${studentIdStr} not found.`);
      }
    });

    // Wait for all student data to be saved/updated
    await Promise.all(studentPromises);

    return res.status(200).json({
      success: true,
      message: "Marks uploaded successfully.",
      data: data, // Return the Excel data in the response
    });
  } catch (error) {
    console.error("Error processing file:", error);
    return res.status(500).json({
      success: false,
      message: "Error processing file",
      error: error.message,
    });
  }
};
