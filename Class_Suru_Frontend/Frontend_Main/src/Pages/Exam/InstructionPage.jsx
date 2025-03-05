import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import Style from "../../css/Exam.module.css";
import Breadcrumb from "./Breadcrumb";
import instructionPageImg from "../../assets/instructionPageImg.png";

const InstructionPage = () => {
  const { examName, subjectName, testName } = useParams();
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current URL

  // Function to enter fullscreen mode
  function goFullScreen() {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      // Chrome, Safari, Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      // IE/Edge
      element.msRequestFullscreen();
    } else {
      console.warn("Fullscreen mode is not supported.");
    }
  }

  // Function to exit fullscreen mode
  const exitFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        console.error("Error exiting fullscreen:", err);
      });
    }
  };

  // Listen for Escape key to quit exam
  useEffect(() => {
    if (location.pathname.includes("instruction")) {
      goFullScreen(); // Enable fullscreen only when on the instruction page
    }
  }, [location.pathname, navigate]); // Runs only when pathname changes

  // Handle "Start Exam" click
  const handleStartExam = () => {
    if (isChecked) {
      navigate(`/exam/${examName}/${subjectName}/${testName}/start`);
    }
  };

  return (
    <div className={Style.InstructionPage}>
      <h2> Instructions</h2>
      <div className={Style.InstructionPageSec1}>
        <ul className={Style.InstructionPageInstructions}>
          <li>
            The clock in the top right corner will display the remaining time
            available for you to{" "}
            <span className={Style.spanbold}>complete the examination.</span>
          </li>
          <li>Navigating & Answering a Question</li>
          <li>
            The Test comprises of multiple choice questions (MCQ) with one or
            more <span className={Style.spanbold}>correct answers</span>.
          </li>
          <li>
            <span className={Style.spanbold}>
              The answer will be saved automatically
            </span>{" "}
            upon clicking on an option amongst the given choices of answer.
          </li>
          <li>
            Test will <span className={Style.spanbold}>auto </span>submit when
            the Time is up.
          </li>
          <li>
            To deselect your chosen answer, click on the clear response button.
            The marking scheme will be displayed for each question on the top
            right corner of the test window.
          </li>
          <li>Test will auto submit when the Time is up.</li>
        </ul>
        <div>
          <img
            src={instructionPageImg}
            alt=""
            className={Style.InstructionPageImg}
          />
        </div>
      </div>

      {/* Checkbox for confirmation */}
      <div className={Style.ReadyCheckbox}>
        <input
          type="checkbox"
          id="readyCheckbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label htmlFor="readyCheckbox">
          *I have read all the instructions carefully and have understood them.
          I agree not to chat or use unfair means in examinations. I understand
          that using unfair means of any sort for my own or someone else’s
          advantage will lead to my immediate disqualification.
        </label>
      </div>

      <div className={Style.InstructionPageSec2}>
        {/* Back Button */}
        <Link
          to={`/exam/${examName}/${subjectName}`}
          className={Style.InstructionPageSec2Back}
        >
          {" "}
          &lt; Back{" "}
        </Link>

        {/* Start Exam Button */}
        <Link to={`/exam/${examName}/${subjectName}/instruction/MainExamPage`}>
          <button
            className={Style.StartExamButton}
            onClick={handleStartExam}
            disabled={!isChecked}
          >
            I am ready for Exam
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InstructionPage;
