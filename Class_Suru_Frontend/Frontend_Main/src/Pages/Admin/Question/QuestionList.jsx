import React, { useEffect, useState } from "react";
import Style from "../../../css/createQuestionSet.module.css";

import JoditEditor from "jodit-react";
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from "../../../Components";
import { getQuestionListApi } from "../../../apis";
import apiCall from "../../../utils/apiCall";

import toast, { Toaster } from "react-hot-toast";

const QuestionList = () => {
    const { examName, subjectName,examId } = useParams();
  const [questionNo, setQuestionNo] = useState();
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
  const navigate = useNavigate();

  const getQuestionList = async ()=>{
    try{
        const response = await apiCall.get(`${getQuestionListApi}/${examId}`);
        if(response.status === 200)
        {
            // console.log(response.data.questions);
            setQuestionNo(response.data.questions);
            // console.log(questionNo);
            
        }
    }catch(err)
    {
        console.log(err);
    }
  }

  // const handleDeleteQuestion = async (questionId)=>{
  //   try{
  //     const response = await apiCall.delete(`${getQuestionListApi}/${questionId}`);
  //     if(response.status === 200)
  //     {



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
            {questionNo && questionNo.length > 0
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
                          console.log("Delete Question id: ",index);
                          
                        }}
                      />
                      <Link
                        className={Style.questionCard}
                        // to={`/admin/list/${examName}/${subjectName}/createQuestionSet/${question}`}
                      >
                        {index+1}
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
