import multer from "multer";
import path from "path";

// Configure the storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    ); // File name format
  },
});

// Optional: File filter to allow specific file types
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "application/vnd.ms-excel" ||
    file.mimetype ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  ) {
    cb(null, true); // Accept file
  } else {
    cb(new Error("Invalid file type. Only Excel files are allowed!"), false);
  }
};

// Configure Multer with options
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter,
});

// Export the upload middleware
export const uploadSingleFile = upload.single("marksFile");
