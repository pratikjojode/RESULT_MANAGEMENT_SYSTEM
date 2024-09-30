import React, { useState } from "react";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const UploadMarks = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (info) => {
    const isExcel =
      info.file.type ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

    if (!isExcel) {
      message.error("You can only upload Excel files!");
      return;
    }

    setFile(info.file); // Set the selected file
  };

  const handleUpload = async () => {
    if (!file) {
      message.error("Please select an Excel file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("marksFile", file.originFileObj);
    try {
      const response = await axios.post(
        "/api/v1/admin/upload-marks",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      message.success("Marks uploaded successfully!");
      console.log(response.data);
    } catch (error) {
      message.error("Failed to upload marks.");
      console.error(error);
    }
  };

  return (
    <div>
      <Upload beforeUpload={() => false} onChange={handleFileChange}>
        <Button icon={<UploadOutlined />}>Select Excel File</Button>
      </Upload>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={!file}
        style={{ marginTop: 16 }}
      >
        Upload Marks
      </Button>
    </div>
  );
};

export default UploadMarks;
