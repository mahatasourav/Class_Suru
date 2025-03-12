import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../../../Components";
import { FaArrowLeft } from "react-icons/fa";
import Style from "../../../css/createQuestionSet.module.css";
import { useParams } from "react-router-dom";
import JoditEditor from "jodit-react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";
import apiCall from "../../../utils/apiCall";
import {
  getExamByIdApi,
  getQuestionByIdApi,
  getQuestionListApi,
} from "../../../apis";

const EditQuestionSet = () => {
  const { examName, subjectName, examId } = useParams();

  const [setName, setSetName] = useState();
  const [setDescription, setSetDescription] = useState();
  const [setDuration, setSetDuration] = useState();
  const [questionNo, setQuestionNo] = useState();
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);

  const [loading, setLoading] = useState(false);
  const [questionLoading, setQuestionLoading] = useState(false);

  const getExamData = async () => {
    try {
      setLoading(true);
      const responseExam = await apiCall.get(`${getExamByIdApi}/${examId}`);

      if (responseExam.status === 200) {
        console.log("Exam Data", responseExam.data);
          setSetName(responseExam.data.exam.exam_subject);
          setSetDescription(responseExam.data.exam.exam_description && responseExam.data.exam.exam_description);
            setSetDuration(parseInt(responseExam.data.exam.exam_duration, 10));

          console.log("name",setName);
          console.log("description",setDescription);
          console.log("duration",setDuration);

          
        
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getQuestionData = async ()=>{
    try{
      setQuestionLoading(true);
      const responseQuestions = await apiCall.get(`${getQuestionListApi}/${examId}`);
      if(responseQuestions.status === 200)
      {
        console.log("Question Data",responseQuestions.data);
        setQuestionNo(responseQuestions.data.questions);
      }
    }catch(err)
    {
      console.log(err);
    }
    finally
    {
      setQuestionLoading(false);
    }
  }

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
              <label htmlFor="questionSetDuration">Exam Duration (hours)</label>
              <input
                type="number"
                id="questionSetDuration"
                name="questionSetDuration"
                placeholder="Enter Question Set Name"
                value={setDuration}
                onChange={(e) => setSetDuration(e.target.value)}
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
                  }}
                >
                  <FaPlus />
                </div>
                {questionLoading? "Loading Questions..":questionNo && questionNo?.length > 0
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
                            }}
                          />
                          <Link
                            className={Style.questionCard}
                            to={`/admin/list/${examName}/${subjectName}/editQuestion/${ele.question_id}`}
                          >
                            {index+1}
                          </Link>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
            <Button text="Submit" className={Style.createButton} />
          </div>
        )}
      </div>
    </>
  );
};

export default EditQuestionSet;
