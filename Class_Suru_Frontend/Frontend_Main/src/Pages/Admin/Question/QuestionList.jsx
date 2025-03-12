import React, { useEffect, useState } from "react";
import Style from "../../../css/createQuestionSet.module.css";

import JoditEditor from "jodit-react";
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from "../../../Components";
import { deleteQuestionApi, getQuestionListApi } from "../../../apis";
import apiCall from "../../../utils/apiCall";

import toast, { Toaster } from "react-hot-toast";

const QuestionList = () => {
  const { examName, subjectName, examId } = useParams();
  const [questionNo, setQuestionNo] = useState();
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getQuestionList = async () => {
    try {
      setLoading(true);
      const response = await apiCall.get(`${getQuestionListApi}/${examId}`);
      if (response.status === 200) {
        // console.log(response.data.questions);
        setQuestionNo(response.data.questions);
        // console.log(questionNo);
      }
    } catch (err) {
      console.log(err);
      toast.error("Error in fetching question list");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteQuestion = async (questionId, index) => {
    try {
      const confirmDeleteQuestion = window.confirm(
        "Do you really want to delete this question no " + index + "?"
      );
      if (confirmDeleteQuestion) {
        const response = await apiCall.delete(
          `${deleteQuestionApi}/${questionId}`
        );
        if (response.status === 200) {
          toast.success("Question deleted successfully");
          setTimeout(() => {
          getQuestionList();
          }, 1000);
        }
      }
      else
      {
        return ;
      }
    } catch (err) {
      console.log(err);
      toast.error("Error in deleting question");
    }
  };

  useEffect(() => {
    getQuestionList();
  }, []);
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
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div
                className={Style.questionCardAdd}
                onClick={() => {
                  navigate(
                    `/admin/list/${examName}/${subjectName}/createQuestionSet/questionlist/${examId}/createQuestion`
                  );
                }}
              >
                <FaPlus />
              </div>
            )}

            {!loading && questionNo && questionNo.length > 0
              ? questionNo.map((question, index) => {
                  return (
                    <div className={Style.questionCardContainer} key={index}>
                      <IoCloseCircle
                        className={Style.close}
                        onClick={() => {
                          // const updatedQuestions = questionNo.filter(
                          //   (_, i) => i !== index
                          // );
                          // setQuestionNo(updatedQuestions);
                          // console.log(question);

                          handleDeleteQuestion(question.question_id, index + 1);
                        }}
                      />
                      <Link
                        className={Style.questionCard}
                        // to={`/admin/list/${examName}/${subjectName}/createQuestionSet/${question}`}
                      >
                        {index + 1}
                      </Link>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default QuestionList;
