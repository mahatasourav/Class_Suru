import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Style from "../../css/Exam.module.css";

import { ExamNavbarRight, ExamMainNavRight } from "./ExamNavbarRightCorner";
const questionsData = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    id: 3,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
];

const MainExamPage = () => {
  const { examName, subjectName, testName } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(3 * 3600); // 10 minutes

  // Enter Full-Screen Mode
  const goFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error("Error entering fullscreen:", err);
      });
    }
  };

  // Exit Full-Screen Mode
  const exitFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        console.error("Error exiting fullscreen:", err);
      });
    }
  };

  // Handle Full-Screen Mode if URL contains "MainExamPage"
  useEffect(() => {
    if (location.pathname.includes("instruction/MainExamPage")) {
      goFullScreen(); // Enable fullscreen only when on the instruction page

      const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          exitFullScreen();
          navigate(-1); // Go back to the previous page
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        exitFullScreen(); // Exit fullscreen when leaving the page
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [location.pathname, navigate]); // Runs only when pathname changes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          submitExam();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOptionSelect = (questionId, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const goToPrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const submitExam = () => {
    alert("Exam submitted successfully!");
    exitFullScreen();
    navigate(`/exam/${examName}/${subjectName}/result`);
  };

  return (
    <div className={Style.ExamPage}>
      <div>
        <img
          className={Style.profileImg}
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="profile"
        />
      </div>
      <div className={Style.QuestionPanel}>
        {questionsData.map((q, index) => (
          <button
            key={q.id}
            className={
              selectedAnswers[q.id]
                ? Style.AttemptedQuestion
                : Style.QuestionButton
            }
            onClick={() => setCurrentQuestionIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className={Style.QuestionContainer}>
        <h3>{questionsData[currentQuestionIndex].question}</h3>
        <div className={Style.Options}>
          {questionsData[currentQuestionIndex].options.map((option, index) => (
            <label key={index} className={Style.OptionLabel}>
              <input
                type="radio"
                name={`question-${questionsData[currentQuestionIndex].id}`}
                value={option}
                checked={
                  selectedAnswers[questionsData[currentQuestionIndex].id] ===
                  option
                }
                onChange={() =>
                  handleOptionSelect(
                    questionsData[currentQuestionIndex].id,
                    option
                  )
                }
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className={Style.NavigationButtons}>
        <button
          onClick={goToPrevQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={goToNextQuestion}
          disabled={currentQuestionIndex === questionsData.length - 1}
        >
          Next
        </button>
      </div>

      <button className={Style.SubmitButton} onClick={submitExam}>
        Submit Exams
      </button>
    </div>
  );
};

export default MainExamPage;
