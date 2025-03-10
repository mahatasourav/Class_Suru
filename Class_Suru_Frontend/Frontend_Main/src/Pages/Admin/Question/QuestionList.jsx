import React, { useState } from "react";
import Style from "../../../css/createQuestionSet.module.css";

import JoditEditor from "jodit-react";
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from "../../../Components";

const QuestionList = () => {
    const { examName, subjectName,examId } = useParams();
  const [questionNo, setQuestionNo] = useState([]);
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <div className={Style.adminCreateQuestionSetContainerPage}>
        <div className={Style.backSection}>
          <Button
            text="Back"
            // isLink={true}
            // link={`/admin/list/${examName}/${subjectName}`}
            onClick={() => navigate(-1)}
            className={Style.backButton}
            onDualMode={true}
            isHollow={true}
          >
            <FaArrowLeft />
          </Button>
        </div>

        <div className={Style.addQuestionSection}>
          <div className={Style.addQuestionLabel}>Add Questions</div>
          <div className={Style.questionList}>
            <div
              className={Style.questionCardAdd}
            //   onClick={() => {
            //     setQuestionNo([...questionNo, currentQuestionNo + 1]);
            //     setCurrentQuestionNo(currentQuestionNo + 1);
            //   }}
            onClick={()=>{
                navigate(`/admin/list/${examName}/${subjectName}/createQuestionSet/questionlist/${examId}/createQuestion`);
            }}
            >
              <FaPlus />
            </div>
            {questionNo.length > 0
              ? questionNo.map((question, index) => {
                  return (
                    <div className={Style.questionCardContainer} key={index}>
                      <IoCloseCircle
                        className={Style.close}
                        onClick={() => {
                          const updatedQuestions = questionNo.filter(
                            (_, i) => i !== index
                          );
                          setQuestionNo(updatedQuestions);
                        }}
                      />
                      <Link
                        className={Style.questionCard}
                        // to={`/admin/list/${examName}/${subjectName}/createQuestionSet/${question}`}
                      >
                        {question}
                      </Link>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionList;
