import { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import Style from "../../css/Exam.module.css";

import instructionPageImg from "../../assets/instructionPageImg.png";
import { Button } from "../../Components";
import { useSelector } from "react-redux";

const InstructionPage = () => {
  const { examName, subjectName, testName, examId } = useParams();
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current URL

  const userStatus = useSelector((state) => state.user.status);
  useEffect(() => {
    if (!userStatus) {
      localStorage.setItem("path", "/exam");
      navigate("/login");
    }
  }, [userStatus]);

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

          <li>
            To deselect your chosen answer,{" "}
            <span className={Style.spanbold}>
              click on the clear response button.
            </span>{" "}
          </li>
          <li>
            <span className={Style.spanbold}>
              The marking scheme will be displayed
            </span>{" "}
            for each question on the top right corner of the test window.
          </li>
          <li>
            <span className={Style.spanbold}> Do not refresh or close</span> the
            browser tab/window during the exam.
          </li>
          <li>
            <span className={Style.spanbold}>Avoid switching tabs</span> , which
            might lead to auto-submission or warnings.
          </li>
          <li>
            You can{" "}
            <span className={Style.spanbold}>manually submit the test</span>{" "}
            anytime using the Submit Test button.
          </li>
          <li>
            The test will{" "}
            <span className={Style.spanbold}>
              auto submit once the timer hits 00:00:00
            </span>{" "}
          </li>
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
        <Link to={`/exam/${examName}/${subjectName}/${examId}/MainExamPage`}>
          {/* <button
            className={Style.StartExamButton}
            onClick={handleStartExam}
            disabled={!isChecked}
          >
            I am ready for Exam
          </button> */}
          <Button
            text="I am ready for Exam"
            onClick={handleStartExam}
            disabled={!isChecked}
          />
        </Link>
      </div>
    </div>
  );
};

export default InstructionPage;
