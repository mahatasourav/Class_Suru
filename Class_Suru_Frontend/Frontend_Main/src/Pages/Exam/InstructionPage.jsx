import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Style from "../../css/Exam.module.css";
import Breadcrumb from "./Breadcrumb";

const InstructionPage = () => {
  const { examName } = useParams(); // Get exam name from URL
  const [isChecked, setIsChecked] = useState(false); // Checkbox state
  const navigate = useNavigate(); // For navigation

  const handleStartExam = () => {
    if (isChecked) {
      navigate(`/exam/${examName}/start`); // Redirect to exam page
    }
  };

  return (
    <div className={Style.InstructionPage}>
      <h2>{examName}Exam Instructions</h2>
      <ul>
        <li>Read all questions carefully before answering.</li>
        <li>Each question has a fixed time limit.</li>
        <li>
          Once you move to the next question, you may not be able to go back.
        </li>
        <li>Make sure you have a stable internet connection.</li>
        <li>Do not refresh or close the browser during the exam.</li>
        <li>Click "Submit" before the timer ends to save your answers.</li>
      </ul>
      {/* Checkbox for confirmation */}
      <div className={Style.ReadyCheckbox}>
        <input
          type="checkbox"
          id="readyCheckbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label htmlFor="readyCheckbox">I am ready for the exam</label>
      </div>
      {/* Start Exam Button */}
      <button
        className={Style.StartExamButton}
        onClick={handleStartExam}
        disabled={!isChecked} // Button enabled only when checked
      >
        Start Exam
      </button>
      <Link to="/exam-selection">🔙 Back to Exam Selection</Link>
    </div>
  );
};

export default InstructionPage;
