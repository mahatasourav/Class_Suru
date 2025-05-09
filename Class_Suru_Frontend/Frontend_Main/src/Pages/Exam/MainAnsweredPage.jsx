import React, { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import Style from "../../css/mainAnsweredPage.module.css";

import questionImage from "../../assets/questionImage.png";
import profile from "../../assets/JEEMainIMG.png";
import instruction1 from "../../assets/instruction1.png";
import instruction2 from "../../assets/instruction2.png";
import instruction3 from "../../assets/instruction3.png";
import instruction4 from "../../assets/instruction4.png";
import instruction5 from "../../assets/instruction5.png";
import { HiChevronDoubleRight } from "react-icons/hi";
import { HiChevronDoubleLeft } from "react-icons/hi";
// import QuestionData from "../../assets/ExamData/Question";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
import {
  getQuestionForExamApi,
  getUsersResultsReviewApi,
  submitReslutApi,
} from "../../apis";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowAltCircleLeft, FaLessThan } from "react-icons/fa";

const MainAnsweredPage = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);
  // console.log(userData);

  const [questionData, setquestionData] = useState(null);
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  const { resultId, examId } = useParams();
  const [result, setresult] = useState([]);

  const token = localStorage.getItem("token");

  // const userStatus =useSelector((state) => state.user.status);
  useEffect(() => {
    if (!token) {
      localStorage.setItem("path", "/exam");
      navigate("/login");
    }
  });
  // console.log(answers);

  // Add at the top of your component (after useState etc.)
  const { examName, subjectName } = useParams();

  const handleSubmitExam = async (id, answers) => {
    // Add submission logic here if needed, for now we log and navigate
    // alert("Exam submitted");
    // console.log("Exam submitted", answers);
    const loadingToastId = toast.loading("Loading...");
    // console.log(userData);

    const data = {
      exam_id: examId,
      user_id: id,
      answers: answers?.map((answer) => ({
        id: answer.id,
        status: answer.status,
        selected_option:
          answer.selected_option === null ? -1 : answer.selected_option,
      })),
    };

    // console.log("data sent",data);

    // console.log(data);

    try {
      const response = await axios.post(submitReslutApi, data);
      // console.log(response);
      if (response.status === 201) {
        toast.dismiss(loadingToastId);
        toast.success("Exam submitted successfully");

        setTimeout(() => {
          localStorage.removeItem("answers");
          navigate(`/exam/result/${response.data.result.result_id}`);
        }, 1000);
        // navigate(`/exam/result/${response.data.result_id}`);
      }
    } catch (error) {
      console.log(error);
      toast.dismiss(loadingToastId);
      toast.error("Something went wrong", { id: loadingToastId });
      return;
    }

    // console.log(data);
  };

  const getQuestionData = async () => {
    try {
      const response = await axios.post(`${getQuestionForExamApi}/${examId}`);
      console.log("Question Data", response);
      if (response.status == 200) {
        setquestionData(response.data.data);
        const reviewResult = await axios.get(
          `${getUsersResultsReviewApi}/${resultId}`
        );
        if (reviewResult.status === 200) {
          // setresult(reviewResult.response.data.data);
          console.log("result", reviewResult);
          if (reviewResult.data.success) {
            setresult(reviewResult.data.data);
          }
        }
      }
    } catch (error) {
      console.log(error);
      // toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getQuestionData();
  }, []);

  // useEffect(() => {
  //   const ensureFullScreen = () => {
  //     if (!document.fullscreenElement) {
  //       document.documentElement.requestFullscreen().catch((err) => {
  //         console.error(
  //           `Error attempting to enable full-screen mode: ${err.message}`
  //         );
  //       });
  //     }
  //   };

  //   ensureFullScreen();

  //   const fullScreenCheckInterval = setInterval(() => {
  //     ensureFullScreen();
  //   }, 50);

  //   return () => clearInterval(fullScreenCheckInterval);
  // }, []);

  return (
    <>
      <div className={Style.examPageContainer}>
        <div className={Style.examPageLeft}>
          <div className={Style.examPageLeftHeader}>
            <div className={Style.examPageLeftHeaderTitle}>
              Question {currentQuestionIndex + 1}
            </div>
            <div>🔍 Exam Review – [Exam Name or Subject Name]</div>

            <div className={Style.examPageLeftOptions}>
              <div className={Style.examPageLeftMarksDristibution}>
                <div className={Style.examPageLeftMarksDristibutionTitle}>
                  Marks:
                </div>
                <div
                  className={Style.examPageLeftMarksDristibutionValueContainer}
                >
                  <div
                    className={`${Style.examPageLeftMarksDristibutionValueCorrect} ${Style.correct}`}
                  >
                    +
                    {questionData &&
                      questionData[currentQuestionIndex]?.correct_marks}
                  </div>
                  <div
                    className={`${Style.examPageLeftMarksDristibutionValueCorrect} ${Style.wrong}`}
                  >
                    -
                    {questionData &&
                      questionData[currentQuestionIndex]?.wrong_marks}
                  </div>
                </div>
              </div>
              {/* <div className={Style.examPageLeftOptionsTime}>
                <div className={Style.examPageLeftOptionsTimeTitle}>Time:</div>
                <div className={Style.examPageLeftOptionsTimeValue}>01:00</div>
              </div> */}
              {/* <Button
                text="Save"
                isHollow={true}
                onDualMode={true}
                className={Style.examPageLeftOptionsSaveButton}
              >
                <MdOutlineBookmarkAdd />
              </Button> */}
            </div>
          </div>
          {questionData && questionData.length > 0 ? (
            <div className={Style.examPageContent}>
              <div className={Style.examPageContentQuestion}>
                {questionData &&
                  questionData[currentQuestionIndex]?.question_text &&
                  parse(questionData[currentQuestionIndex].question_text)}
              </div>
              <div className={Style.examPageContentImg}>
                <img
                  className={Style.examImg}
                  src={
                    questionData &&
                    questionData[currentQuestionIndex]?.question_img_url
                  }
                  alt=""
                />
              </div>
              <div className={Style.optionsSection}>
                {/* options 1 */}
                <div
                  className={`${Style.option} ${
                    questionData[currentQuestionIndex].correct_option === "1"
                      ? Style.selected
                      : result &&
                        result.find(
                          (e) =>
                            e.question_id ===
                            questionData[currentQuestionIndex].question_id
                        )
                      ? result.find(
                          (e) =>
                            e.question_id ===
                            questionData[currentQuestionIndex].question_id
                        ).user_answer === 1
                        ? Style.wrong
                        : ""
                      : ""
                  }`}
                >
                  <div className={Style.optionCheckBox}>
                    <div className={Style.optionCheckBoxInner}></div>
                  </div>
                  <div className={Style.optionText}>
                    {questionData &&
                      parse(questionData[currentQuestionIndex]?.option_1)}
                  </div>
                </div>
                {/* options 2 */}
                <div
                  className={`${Style.option} ${
                    questionData[currentQuestionIndex].correct_option === "2"
                      ? Style.selected
                      : result &&
                        result.find(
                          (e) =>
                            e.question_id ===
                            questionData[currentQuestionIndex].question_id
                        )
                      ? result.find(
                          (e) =>
                            e.question_id ===
                            questionData[currentQuestionIndex].question_id
                        ).user_answer === 2
                        ? Style.wrong
                        : ""
                      : ""
                  }`}
                >
                  <div className={Style.optionCheckBox}>
                    <div className={Style.optionCheckBoxInner}></div>
                  </div>
                  <div className={Style.optionText}>
                    {questionData &&
                      parse(questionData[currentQuestionIndex]?.option_2)}
                  </div>
                </div>
                {/* options 3 */}
                <div
                  className={`${Style.option} ${
                    questionData[currentQuestionIndex].correct_option === "3"
                      ? Style.selected
                      : result &&
                        result.find(
                          (e) =>
                            e.question_id ===
                            questionData[currentQuestionIndex].question_id
                        )
                      ? result.find(
                          (e) =>
                            e.question_id ===
                            questionData[currentQuestionIndex].question_id
                        ).user_answer === 3
                        ? Style.wrong
                        : ""
                      : ""
                  }`}
                >
                  <div className={Style.optionCheckBox}>
                    <div className={Style.optionCheckBoxInner}></div>
                  </div>
                  <div className={Style.optionText}>
                    {questionData &&
                      parse(questionData[currentQuestionIndex]?.option_3)}
                  </div>
                </div>
                {/* options 4 */}
                <div
                  className={`${Style.option} ${
                    questionData[currentQuestionIndex].correct_option === "4"
                      ? Style.selected
                      : result &&
                        result.find(
                          (e) =>
                            e.question_id ===
                            questionData[currentQuestionIndex].question_id
                        )
                      ? result.find(
                          (e) =>
                            e.question_id ===
                            questionData[currentQuestionIndex].question_id
                        ).user_answer === 4
                        ? Style.wrong
                        : ""
                      : ""
                  }`}
                >
                  <div className={Style.optionCheckBox}>
                    <div className={Style.optionCheckBoxInner}></div>
                  </div>
                  <div className={Style.optionText}>
                    {questionData &&
                      parse(questionData[currentQuestionIndex]?.option_4)}
                  </div>
                </div>
              </div>
              <div className={Style.examPageAnswer}>
                <h3>Answer:</h3>
                <div className={Style.examPageContentQuestion}>
                  {questionData &&
                    questionData[currentQuestionIndex]?.question_ans &&
                    parse(questionData[currentQuestionIndex].question_ans)}
                </div>
                <div className={Style.examPageContentImg}>
                  <img
                    className={Style.examImg}
                    src={
                      questionData &&
                      questionData[currentQuestionIndex]?.question_ans_img
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
          ) : (
            <p>No Question in the Test</p>
          )}

          <div className={Style.examPageControllSection}>
            <div className={Style.controlButton}>
              <Button
                text="previous"
                className={`${
                  currentQuestionIndex === 0
                    ? Style.previousDisable
                    : Style.previous
                } ${Style.button_exam}
                `}
                onClick={() => {
                  currentQuestionIndex === 0
                    ? setcurrentQuestionIndex(currentQuestionIndex)
                    : setcurrentQuestionIndex(currentQuestionIndex - 1);
                }}
              >
                <HiChevronDoubleLeft />
              </Button>
            </div>
            {/* <div className={Style.controlButton}>
              <Button
                text="Save & Next"
                className={`${Style.save} ${Style.button_exam}`}
                onClick={() => {
                  if (answers[currentQuestionIndex]?.selected_option === null) {
                    alert("Please select an options before save");
                    document.documentElement.requestFullscreen();
                    return;
                  }

                  setanswers((prevData) => {
                    const newData = [...prevData];
                    newData[currentQuestionIndex] = {
                      ...newData[currentQuestionIndex],
                      status: 2,
                    };

                    localStorage.setItem("answers", JSON.stringify(newData));

                    if (
                      currentQuestionIndex < questionData?.length - 1 &&
                      answers[currentQuestionIndex + 1].status === 0
                    ) {
                      newData[currentQuestionIndex + 1] = {
                        ...newData[currentQuestionIndex + 1],
                        status: 1,
                      };
                    }
                    return newData;
                  });

                  currentQuestionIndex === questionData?.length - 1
                    ? setcurrentQuestionIndex(currentQuestionIndex)
                    : setcurrentQuestionIndex(currentQuestionIndex + 1);
                }}
              />
              <Button
                text="Clear"
                className={`${Style.clear} ${Style.button_exam}`}
                onClick={() => {
                  setanswers((prevData) => {
                    const newData = [...prevData];
                    newData[currentQuestionIndex] = {
                      ...newData[currentQuestionIndex],
                      selected_option: null,
                      status: 1,
                    };

                    localStorage.setItem("answers", JSON.stringify(newData));
                    return newData;
                  });
                }}
              />
              <Button
                text="Mark For Review"
                className={`${Style.markForReview} ${Style.button_exam}`}
                onClick={() => {
                  setanswers((prevData) => {
                    const newData = [...prevData];
                    newData[currentQuestionIndex] = {
                      ...newData[currentQuestionIndex],
                      status:
                        newData[currentQuestionIndex].selected_option === null
                          ? 3
                          : 4,
                    };
                    localStorage.setItem("answers", JSON.stringify(newData));

                    return newData;
                  });
                }}
              />
            </div> */}
            <div className={Style.controlButton}>
              <Button
                text="Next"
                className={`${
                  currentQuestionIndex === questionData?.length - 1
                    ? Style.nextDisable
                    : Style.next
                } ${Style.button_exam}`}
                onClick={() => {
                  if (currentQuestionIndex === questionData.length - 1) {
                    setcurrentQuestionIndex(currentQuestionIndex);
                  } else {
                    setcurrentQuestionIndex(currentQuestionIndex + 1);
                  }
                }}
              >
                <HiChevronDoubleRight />
              </Button>
            </div>
          </div>
        </div>
        <div
          className={`${Style.examPageRightSideBar} ${
            sidebar ? Style.active : ""
          }`}
        >
          <div className={Style.profileSection}>
            <div className={Style.profileSectionImage}>
              <img
                className={Style.profile}
                src={userData && userData.avatar}
                alt="profile"
              />
            </div>
            <div className={Style.profileSectionName}>{userData?.name}</div>
          </div>
          <div className={Style.examIndicationSection}>
            <div className={Style.examIndication}>
              <div className={Style.indicationIcon}>
                <img
                  className={Style.indication}
                  src={instruction1}
                  alt="instruction1 icon"
                />
              </div>
              <div className={Style.indicationText}>Not Answered</div>
            </div>
            <div className={Style.examIndication}>
              <div className={Style.indicationIcon}>
                <img
                  className={Style.indication}
                  src={instruction2}
                  alt="instruction1 icon"
                />
              </div>
              <div className={Style.indicationText}>Wrong Answered</div>
            </div>
            <div className={Style.examIndication}>
              <div className={Style.indicationIcon}>
                <img
                  className={Style.indication}
                  src={instruction3}
                  alt="instruction1 icon"
                />
              </div>
              <div className={Style.indicationText}>Right Answered</div>
            </div>
          </div>
          <div className={Style.examQuestionListSection}>
            {questionData &&
              questionData.map((question, index) => {
                return (
                  <div
                    className={`${Style.examQuestion} ${
                      result.find(
                        (e) => e.question_id === questionData[index].question_id
                      )
                        ? Number(question.correct_option) ===
                          result.find(
                            (e) =>
                              e.question_id === questionData[index].question_id
                          ).user_answer
                          ? Style.answered
                          : Style.notAnswered
                        : Style.notVisited
                    }
                    
              `}
                    key={index}
                    onClick={() => {
                      setcurrentQuestionIndex(index);
                    }}
                  >
                    <div className={`${Style.examQuestionText} `}>
                      {index + 1}
                    </div>
                  </div>
                );
              })}
          </div>
          <div className={Style.submitButtonContainer}>
            {/* <Link to={`/exam/${examName}/${subjectName}/result/{resultId}`}>
              <Button text="Submit Exam" className={Style.submitButton} />
            </Link> */}
            <Button
              text="Go Back"
              className={Style.goBackButton}
              isLink={true}
              link="/user/dashboard/recent-exams"
            >
              {" "}
              <FaArrowAltCircleLeft />
            </Button>
          </div>
          <div
            className={Style.sidebarButton}
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? "<" : ">"}
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default MainAnsweredPage;
