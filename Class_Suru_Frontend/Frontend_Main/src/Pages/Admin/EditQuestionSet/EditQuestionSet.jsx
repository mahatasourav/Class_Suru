import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../../../Components";
import { FaArrowLeft } from "react-icons/fa";
import Style from "../../../css/createQuestionSet.module.css";
import { useNavigate, useParams } from "react-router-dom";
import JoditEditor from "jodit-react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";
import apiCall from "../../../utils/apiCall";
import {
  deleteQuestionApi,
  getExamByIdApi,
  getQuestionByIdApi,
  getQuestionListApi,
  updateExamApi,
} from "../../../apis";

import toast, { Toaster } from "react-hot-toast";

const EditQuestionSet = () => {
  const { examName, subjectName, examId } = useParams();
  const navigate = useNavigate();
  const [setName, setSetName] = useState();
  const [setDescription, setSetDescription] = useState();
  const [setDuration, setSetDuration] = useState();
  const [totalMarks, setTotalMarks] = useState();
  const [questionNo, setQuestionNo] = useState();
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);

  const [loading, setLoading] = useState(false);
  const [questionSetLoading, setQuestionSetLoading] = useState(false);
  const [questionLoading, setQuestionLoading] = useState(false);

  const getExamData = async () => {
    try {
      setLoading(true);
      const responseExam = await apiCall.get(`${getExamByIdApi}/${examId}`);

      if (responseExam.status === 200) {
        console.log("Exam Data", responseExam.data);
        setSetName(responseExam.data.exam.title);
        setSetDescription(
          responseExam.data.exam.exam_description &&
            responseExam.data.exam.exam_description
        );
        setSetDuration(responseExam.data.exam.exam_duration);
        setTotalMarks(parseInt(responseExam.data.exam.exam_total_marks, 10));
        console.log("name", setName);
        console.log("description", setDescription);
        console.log("duration", setDuration);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getQuestionData = async () => {
    try {
      setQuestionLoading(true);
      const responseQuestions = await apiCall.get(
        `${getQuestionListApi}/${examId}`
      );
      if (responseQuestions.status === 200) {
        console.log("Question Data", responseQuestions.data);
        setQuestionNo(responseQuestions.data.questions);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setQuestionLoading(false);
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
            getQuestionData();
          }, 1000);
        }
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
      toast.error("Error in deleting question");
    }
  };

  const handleUpdateQuestionSet = async (e) => {
    e.preventDefault();
    try {
      setQuestionSetLoading(true);
      const data = {
        title: setName,
        exam_description: setDescription,
        exam_duration: setDuration,
        exam_total_marks: totalMarks,
      };
      console.log(data);
      const response = await apiCall.put(`${updateExamApi}/${examId}`, data);
      console.log(response);
      if (response.status === 200) {
        toast.success("Question set updated Successfully");
        setTimeout(() => {
          navigate(-1);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in updating question set");
    } finally {
      setQuestionSetLoading(false);
    }
  };

  useEffect(() => {
    getExamData();
    getQuestionData();
  }, []);

  return (
    <>
      <div className={Style.adminCreateQuestionSetContainerPage}>
        <div className={Style.backSection}>
          <Button
            text="Back"
            isLink={true}
            link={`/admin/list/${examName}/${subjectName}`}
            className={Style.backButton}
            onDualMode={true}
            isHollow={true}
          >
            <FaArrowLeft />
          </Button>
        </div>
        {loading ? (
          <p>loading...</p>
        ) : (
          <div className={Style.createQuestionSetContainer}>
            <div className={Style.inputSection}>
              <label htmlFor="questionSet">Question Set Name</label>
              <input
                value={setName}
                type="text"
                id="questionSet"
                name="questionSet"
                placeholder="Enter Question Set Name"
                onChange={(e) => setSetName(e.target.value)}
              />
            </div>
            <div className={Style.inputSection}>
              <label htmlFor="questionSetDescription">Description</label>
              <textarea
                name="description"
                id="questionSetDescription"
                placeholder="Enter a Short Description for this Question set..."
                onChange={(e) => setSetDescription(e.target.value)}
                value={setDescription}
              ></textarea>
            </div>
            <div className={Style.inputSection}>
              <label htmlFor="questionSetDuration">
                Exam Duration (hours:min:sec)
              </label>
              <input
                type="text"
                id="questionSetDuration"
                name="questionSetDuration"
                placeholder=" 00:00:00"
                value={setDuration}
                onChange={(e) => setSetDuration(e.target.value)}
              />
            </div>

            <div className={Style.inputSection}>
              <label htmlFor="totalMarks">Total Marks (hours)</label>
              <input
                type="number"
                id="totalMarks"
                name="totalMarks"
                placeholder="Enter Total Marks"
                value={totalMarks}
                onChange={(e) => setTotalMarks(e.target.value)}
              />
            </div>

            <div className={Style.addQuestionSection}>
              <div className={Style.addQuestionLabel}>Add Questions</div>
              <div className={Style.questionList}>
                <div
                  className={Style.questionCardAdd}
                  onClick={() => {
                    // setQuestionNo([...questionNo, currentQuestionNo + 1]);
                    // setCurrentQuestionNo(currentQuestionNo + 1);
                    navigate(
                      `/admin/list/${examName}/${subjectName}/createQuestionSet/questionlist/${examId}/createQuestion`
                    );
                  }}
                >
                  <FaPlus />
                </div>
                {questionLoading
                  ? "Loading Questions.."
                  : questionNo && questionNo?.length > 0
                  ? questionNo.map((ele, index) => {
                      return (
                        <div className={Style.questionCardContainer}>
                          <IoCloseCircle
                            className={Style.close}
                            onClick={() => {
                              // const updatedQuestions = questionNo.filter(
                              //   (_, i) => i !== index
                              // );
                              // setQuestionNo(updatedQuestions);
                              handleDeleteQuestion(ele.question_id, index + 1);
                            }}
                          />
                          <Link
                            className={Style.questionCard}
                            to={`/admin/list/${examName}/${subjectName}/editQuestion/${ele.question_id}`}
                          >
                            {index + 1}
                          </Link>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
            <Button
              text="Update Set"
              className={Style.createButton}
              onClick={handleUpdateQuestionSet}
              isDisabled={questionSetLoading}
              isLoading={questionSetLoading}
            />
          </div>
        )}
      </div>
      <Toaster />
    </>
  );
};

export default EditQuestionSet;
