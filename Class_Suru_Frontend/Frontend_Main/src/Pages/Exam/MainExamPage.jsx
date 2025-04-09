import React, { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import Style from "../../css/mainexampage.module.css";
import { MdOutlineBookmarkAdd } from "react-icons/md";
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
import { getQuestionForExamApi } from "../../apis";

const MainExamPage = () => {
  const navigate = useNavigate();
  const [questionData, setquestionData] = useState(null);
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const { examId } = useParams();

  const [answers, setanswers] = useState(null);
  console.log(answers);
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "Exam is running. Are you sure you want to leave?";
    };

    const handlePopState = () => {
      alert(
        "Cannot go back to the previous page because the exam is running. Press 'Submit Exam' to exit the exam window."
      );
      window.history.pushState(null, null, window.location.href);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    // Push initial state to prevent back navigation
    window.history.pushState(null, null, window.location.href);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
  // Add at the top of your component (after useState etc.)
  const { examName, subjectName } = useParams();
  const handleSubmitExam = () => {
    // Add submission logic here if needed, for now we log and navigate
    alert("Exam submitted");
    console.log("Exam submitted", answers);
  };
  const getQuestionData = async () => {
    try {
      const response = await axios.post(`${getQuestionForExamApi}/${examId}`);
      console.log(response);
      if (response.status == 200) {
        setquestionData(response.data.data);
        setanswers(
          response.data.data.map((_, index) => ({
            question_id: index,
            selected_option: null,
            status: 0,
          }))
        );
      }
    } catch (error) {}
  };
  useEffect(() => {
    getQuestionData();
  }, []);

  return (
    <>
      <div className={Style.examPageContainer}>
        <div className={Style.examPageLeft}>
          <div className={Style.examPageLeftHeader}>
            <div className={Style.examPageLeftHeaderTitle}>
              Question {currentQuestionIndex + 1}
            </div>

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
                    +1
                  </div>
                  <div
                    className={`${Style.examPageLeftMarksDristibutionValueCorrect} ${Style.wrong}`}
                  >
                    -0.25
                  </div>
                </div>
              </div>
              <div className={Style.examPageLeftOptionsTime}>
                <div className={Style.examPageLeftOptionsTimeTitle}>Time:</div>
                <div className={Style.examPageLeftOptionsTimeValue}>01:00</div>
              </div>
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
          <div className={Style.examPageContent}>
            <div className={Style.examPageContentQuestion}>
              {questionData &&
                parse(questionData[currentQuestionIndex].question_text)}
            </div>
            <div className={Style.examPageContentImg}>
              <img
                className={Style.examImg}
                src={
                  questionData &&
                  questionData[currentQuestionIndex].question_img_url
                }
                alt=""
              />
            </div>
            <div className={Style.optionsSection}>
              {/* options 1 */}
              <div
                className={`${Style.option} ${
                  answers &&
                  answers[currentQuestionIndex].selected_option === 1 &&
                  Style.selected
                }`}
                onClick={() => {
                  setanswers((prevData) => {
                    const newData = [...prevData];
                    const currentSelection =
                      newData[currentQuestionIndex].selected_option;
                    newData[currentQuestionIndex] = {
                      ...newData[currentQuestionIndex],
                      selected_option: currentSelection === 1 ? null : 1,
                    };
                    console.log(newData);
                    return newData;
                  });
                }}
              >
                <div className={Style.optionCheckBox}>
                  <div className={Style.optionCheckBoxInner}></div>
                </div>
                <div className={Style.optionText}>
                  {questionData &&
                    parse(questionData[currentQuestionIndex].option_1)}
                </div>
              </div>
              {/* options 2 */}
              <div
                className={`${Style.option} ${
                  answers &&
                  answers[currentQuestionIndex].selected_option === 2 &&
                  Style.selected
                }`}
                onClick={() => {
                  setanswers((prevData) => {
                    const newData = [...prevData];
                    const currentSelection =
                      newData[currentQuestionIndex].selected_option;
                    newData[currentQuestionIndex] = {
                      ...newData[currentQuestionIndex],
                      selected_option: currentSelection === 2 ? null : 2,
                    };
                    console.log(newData);
                    return newData;
                  });
                }}
              >
                <div className={Style.optionCheckBox}>
                  <div className={Style.optionCheckBoxInner}></div>
                </div>
                <div className={Style.optionText}>
                  {questionData &&
                    parse(questionData[currentQuestionIndex].option_2)}
                </div>
              </div>
              {/* options 3 */}
              <div
                className={`${Style.option} ${
                  answers &&
                  answers[currentQuestionIndex].selected_option === 3 &&
                  Style.selected
                }`}
                onClick={() => {
                  setanswers((prevData) => {
                    const newData = [...prevData];
                    const currentSelection =
                      newData[currentQuestionIndex].selected_option;
                    newData[currentQuestionIndex] = {
                      ...newData[currentQuestionIndex],
                      selected_option: currentSelection === 3 ? null : 3,
                    };
                    console.log(newData);
                    return newData;
                  });
                }}
              >
                <div className={Style.optionCheckBox}>
                  <div className={Style.optionCheckBoxInner}></div>
                </div>
                <div className={Style.optionText}>
                  {questionData &&
                    parse(questionData[currentQuestionIndex].option_3)}
                </div>
              </div>
              {/* options 4 */}
              <div
                className={`${Style.option} ${
                  answers &&
                  answers[currentQuestionIndex].selected_option === 4 &&
                  Style.selected
                }`}
                onClick={() => {
                  setanswers((prevData) => {
                    const newData = [...prevData];
                    const currentSelection =
                      newData[currentQuestionIndex].selected_option;
                    newData[currentQuestionIndex] = {
                      ...newData[currentQuestionIndex],
                      selected_option: currentSelection === 4 ? null : 4,
                    };
                    console.log(newData);
                    return newData;
                  });
                }}
              >
                <div className={Style.optionCheckBox}>
                  <div className={Style.optionCheckBoxInner}></div>
                </div>
                <div className={Style.optionText}>
                  {questionData &&
                    parse(questionData[currentQuestionIndex].option_4)}
                </div>
              </div>
            </div>
          </div>
          <div className={Style.examPageControllSection}>
            <div className={Style.controlButton}>
              <Button
                text="previous"
                className={
                  currentQuestionIndex === 0
                    ? Style.previousDisable
                    : Style.previous
                }
                onClick={() => {
                  currentQuestionIndex === 0
                    ? setcurrentQuestionIndex(currentQuestionIndex)
                    : setcurrentQuestionIndex(currentQuestionIndex - 1);
                }}
              >
                <HiChevronDoubleLeft />
              </Button>
            </div>
            <div className={Style.controlButton}>
              <Button
                text="Save & Next"
                className={Style.save}
                onClick={() => {
                  if (answers[currentQuestionIndex].selected_option === null) {
                    alert("Please select an options before save");
                    return;
                  }

                  setanswers((prevData) => {
                    const newData = [...prevData];
                    newData[currentQuestionIndex] = {
                      ...newData[currentQuestionIndex],
                      status: 2,
                    };

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
                className={Style.clear}
                onClick={() => {
                  setanswers((prevData) => {
                    const newData = [...prevData];
                    newData[currentQuestionIndex] = {
                      ...newData[currentQuestionIndex],
                      selected_option: null,
                      status: 1,
                    };

                    return newData;
                  });
                }}
              />
              <Button
                text="Mark For Review"
                className={Style.markForReview}
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

                    return newData;
                  });
                }}
              />
            </div>
            <div className={Style.controlButton}>
              <Button
                text="Next"
                className={
                  currentQuestionIndex === questionData?.length - 1
                    ? Style.nextDisable
                    : Style.next
                }
                onClick={() => {
                  if (currentQuestionIndex === questionData.length - 1) {
                    setcurrentQuestionIndex(currentQuestionIndex);
                  } else {
                    setcurrentQuestionIndex(currentQuestionIndex + 1);
                  }
                  if (answers[currentQuestionIndex + 1].status === 0) {
                    setanswers((prevData) => {
                      const newData = [...answers];
                      newData[currentQuestionIndex + 1] = {
                        ...newData[currentQuestionIndex + 1],
                        status: 1,
                      };
                      return newData;
                    });
                  }
                }}
              >
                <HiChevronDoubleRight />
              </Button>
            </div>
          </div>
        </div>
        <div className={Style.examPageRightSideBar}>
          <div className={Style.profileSection}>
            <div className={Style.profileSectionImage}>
              <img className={Style.profile} src={profile} alt="" />
            </div>
            <div className={Style.profileSectionName}>John Doe</div>
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
              <div className={Style.indicationText}>Not Visited</div>
            </div>
            <div className={Style.examIndication}>
              <div className={Style.indicationIcon}>
                <img
                  className={Style.indication}
                  src={instruction2}
                  alt="instruction1 icon"
                />
              </div>
              <div className={Style.indicationText}>Not Answered</div>
            </div>
            <div className={Style.examIndication}>
              <div className={Style.indicationIcon}>
                <img
                  className={Style.indication}
                  src={instruction3}
                  alt="instruction1 icon"
                />
              </div>
              <div className={Style.indicationText}>Answered</div>
            </div>
            <div className={Style.examIndication}>
              <div className={Style.indicationIcon}>
                <img
                  className={Style.indication}
                  src={instruction4}
                  alt="instruction1 icon"
                />
              </div>
              <div className={Style.indicationText}>Marked for Review</div>
            </div>
            <div className={Style.examIndication}>
              <div className={Style.indicationIcon}>
                <img
                  className={Style.indication}
                  src={instruction5}
                  alt="instruction1 icon"
                />
              </div>
              <div className={Style.indicationText}>
                Answered & Marked for Review (will be considered for evaluation)
              </div>
            </div>
          </div>
          <div className={Style.examQuestionListSection}>
            {questionData &&
              questionData.map((question, index) => {
                return (
                  <div
                    className={`${Style.examQuestion} ${
                      answers[index].status === 0 && Style.notVisited
                    } ${answers[index].status === 1 && Style.notAnswered}
                  ${answers[index].status === 2 && Style.answered}
                  ${answers[index].status === 3 && Style.markedForReview}
                  ${
                    answers[index].status === 4 &&
                    Style.answeredAndMarkedForReview
                  }
              `}
                    key={index}
                    onClick={() => {
                      setcurrentQuestionIndex(index);
                      if (answers[index].status === 0) {
                        setanswers((prevData) => {
                          const newData = [...answers];
                          newData[index] = {
                            ...newData[index],
                            status: 1,
                          };
                          return newData;
                        });
                      }
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
              text="Submit Exam"
              className={Style.submitButton}
              onClick={() => {
                const confirmLogout = window.confirm(
                  "Do you really want to Submit ?"
                );
                // pop.alert("Do you really want to Submit?");
                if (confirmLogout) {
                  navigate("/exam/result");
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainExamPage;
