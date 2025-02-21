import React from "react";
import Style from "../../css/Exam.module.css";
import ExamInterface from "./ExamInterface"; // Adjust path based on your project structure

const Exam = () => {
  return (
    <>
      <div className={Style.Examstyle}>
        <ExamInterface />
      </div>
    </>
  );
};

export default Exam;
