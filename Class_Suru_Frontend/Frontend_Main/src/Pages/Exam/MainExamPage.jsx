import React, { useState } from "react";
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
import QuestionData from "../../assets/ExamData/Question";

const MainExamPage = () => {
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [answers, setanswers] = useState(
    QuestionData.map((_, index) => ({
      question_id: index,
      selected_option: null,
    }))
  );
  console.log(answers);
  const [questionStatus, setquestionStatus] = useState(
    Array(QuestionData.length).fill(0)
  );

  // questionStatus = 0 means the question is not visited
  // questionStatus = 1 means the question is not answered
  // questionStatus = 2 means the question is answered
  // questionStatus = 3 means the question is marked for review
  // questionStatus = 4 means the question is answered and marked for review
  const getQuestionStatus = (index) => {
    if (questionStatus[index] === 0) {
      return Style.notVisited;
    } else if (questionStatus[index] === 1) {
      return Style.notAnswered;
    } else if (questionStatus[index] === 2) {
      return Style.answered;
    } else if (questionStatus[index] === 3) {
      return Style.markForReview;
    } else if (questionStatus[index] === 4) {
      return Style.answeredAndMarkedForReview;
    }
  };
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
              {QuestionData[currentQuestionIndex].question_body}
            </div>
            <div className={Style.examPageContentImg}>
              <img
                className={Style.examImg}
                src={QuestionData[currentQuestionIndex].question_img}
                alt=""
              />
            </div>
            <div className={Style.optionsSection}>
              <div className={`${Style.option} ${Style.selected}`}>
                <div className={Style.optionCheckBox}>
                  <div className={Style.optionCheckBoxInner}></div>
                </div>
                <div className={Style.optionText}>
                  {QuestionData[currentQuestionIndex].option_1}
                </div>
              </div>
              <div className={`${Style.option}`}>
                <div className={Style.optionCheckBox}></div>
                <div className={Style.optionText}>
                  {QuestionData[currentQuestionIndex].option_2}
                </div>
              </div>
              <div className={Style.option}>
                <div className={Style.optionCheckBox}></div>
                <div className={Style.optionText}>
                  {QuestionData[currentQuestionIndex].option_3}
                </div>
              </div>
              <div className={Style.option}>
                <div className={Style.optionCheckBox}></div>
                <div className={Style.optionText}>
                  {QuestionData[currentQuestionIndex].option_4}
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
              <Button text="Save & Next" className={Style.save} />
              <Button text="Clear" className={Style.clear} />
              <Button text="Mark For Review" className={Style.markForReview} />
            </div>
            <div className={Style.controlButton}>
              <Button
                text="Next"
                className={
                  currentQuestionIndex === QuestionData.length - 1
                    ? Style.nextDisable
                    : Style.next
                }
                onClick={() => {
                  currentQuestionIndex === QuestionData.length - 1
                    ? setcurrentQuestionIndex(currentQuestionIndex)
                    : setcurrentQuestionIndex(currentQuestionIndex + 1);
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
            {QuestionData.map((question, index) => {
              return (
                <div
                  className={`${Style.examQuestion} ${
                    // questionStatus[index] === 0
                    // ? Style.notAnswered
                    // : Style.notVisited
                    getQuestionStatus(index)
                  }`}
                  key={index}
                  onClick={() => {
                    setcurrentQuestionIndex(index);
                    setquestionStatus((prevStatus) => {
                      const updatedStatus = [...prevStatus];
                      updatedStatus[index] = handelOptionClick();
                      return updatedStatus;
                    });
                  }}
                >
                  <div className={`${Style.examQuestionText} `}>
                    {index + 1}
                  </div>
                </div>
              );
            })}
            {/* <div className={`${Style.examQuestion} ${Style`}>
              <div className={Style.examQuestionText}>2</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.answered}`}>
              <div className={Style.examQuestionText}>3</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.markedForReview}`}>
              <div className={Style.examQuestionText}>4</div>
            </div>

            <div
              className={`${Style.examQuestion} ${Style.answeredAndMarkedForReview}`}
            >
              <div className={Style.examQuestionText}>5</div>.notAnswered}
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notAnswered}`}>
              <div className={Style.examQuestionText}>2</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.answered}`}>
              <div className={Style.examQuestionText}>3</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.markedForReview}`}>
              <div className={Style.examQuestionText}>4</div>
            </div>

            <div
              className={`${Style.examQuestion} ${Style.answeredAndMarkedForReview}`}
            >
              <div className={Style.examQuestionText}>5</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notAnswered}`}>
              <div className={Style.examQuestionText}>2</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.answered}`}>
              <div className={Style.examQuestionText}>3</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.markedForReview}`}>
              <div className={Style.examQuestionText}>4</div>
            </div>

            <div
              className={`${Style.examQuestion} ${Style.answeredAndMarkedForReview}`}
            >
              <div className={Style.examQuestionText}>5</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notAnswered}`}>
              <div className={Style.examQuestionText}>2</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.answered}`}>
              <div className={Style.examQuestionText}>3</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.markedForReview}`}>
              <div className={Style.examQuestionText}>4</div>
            </div>

            <div
              className={`${Style.examQuestion} ${Style.answeredAndMarkedForReview}`}
            >
              <div className={Style.examQuestionText}>5</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notAnswered}`}>
              <div className={Style.examQuestionText}>2</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.answered}`}>
              <div className={Style.examQuestionText}>3</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.markedForReview}`}>
              <div className={Style.examQuestionText}>4</div>
            </div>

            <div
              className={`${Style.examQuestion} ${Style.answeredAndMarkedForReview}`}
            >
              <div className={Style.examQuestionText}>5</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div>
            <div className={`${Style.examQuestion} ${Style.notVisited}`}>
              <div className={Style.examQuestionText}>1</div>
            </div> */}
          </div>
          <div className={Style.submitButtonContainer}>
            <Button text="Submit Exam" className={Style.submitButton} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainExamPage;
