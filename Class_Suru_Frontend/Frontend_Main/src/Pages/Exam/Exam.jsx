import React from "react";
import Breadcrumb from "./Breadcrumb";
import Style from "../../css/Exam.module.css";
import ExamSelection from "./ExamSelection"; // Adjust path based on your project structure

const Exam = () => {
  return (
    <div>
      {/* Breadcrumb Navigation */}
      <ExamSelection />
    </div>
  );
};

export default Exam;
