import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Style from "../../../css/adminexamlist.module.css";
import { FaGreaterThan } from "react-icons/fa6";
import { BreadCrumb, Button, ExamCard } from "../../../Components";
import { subjectTests } from "../../../assets/ExamData/subjectTests";
import TestStyle from "../../../css/Exam.module.css";

import { FaFileCircleQuestion } from "react-icons/fa6";
import { TfiTimer } from "react-icons/tfi";
import { TbTargetArrow } from "react-icons/tb";

import { FaPlus } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import apiCall from "../../../utils/apiCall";
import { getExamsApi } from "../../../apis";

const ExamsList = () => {
    const {examName,subjectName} = useParams();

    const [test, setTest] = useState([]);
    const [loading, setLoading] = useState(false);
    
    
    const getTestData = async () => {
        try{
            setLoading(true);
            console.log(`${getExamsApi}/${subjectName}/${examName}`);
            
            
            const response = await apiCall.get(`${getExamsApi}/${subjectName}/${examName}`);
            if(response.status === 200)
            {
                // console.log(response.data);
                setTest(response.data.exam);
            }
            
        }catch(err)
        {
            console.log(err);
        }
        finally
        {
            setLoading(false);
        }
    }

    useEffect(() => {
        getTestData();
    }
    , []);
    
  return (
    <>
      <div className={Style.adminExamListContainerPage}>
        <BreadCrumb defalutlLink="/admin" />
        <div className={`${Style.examListContainer} ${Style.ExamTestSection}`}>
          <div className={Style.examListHeader}>
            <span className={Style.examListHeaderText}>
              <span>Question Set</span> নির্বাচন করুন
            </span>
            <span className={Style.examListLine}></span>
            <Button text="Add New" className={Style.createNew} isLink={true} link={`/admin/list/${examName}/${subjectName}/createQuestionSet`}>
                <FaPlus />
            </Button>
          </div>
          <div className={`${TestStyle.Tests} ${Style.testSection}`}>
                  {loading ? <p>Loading...</p> : test.length > 0 ? 
                  
                  (
                    test.map((ele, index) => (
                      <div key={index} className={`${TestStyle.Test} ${Style.test}`}>
                        <div>
                          <h2 className={Style.testHeading}> {ele.title}</h2>
                          <p className={`${TestStyle.TestLower} ${Style.testLower}`}>
                            {/* <span className={Style.testLowerText}>
                              <FaFileCircleQuestion />
                              75 Question{" "}
                            </span> */}
                            <span className={Style.testLowerText}>
                              <TfiTimer />
                              {ele.exam_duration}
                            </span>
                            <span className={Style.testLowerText}>
                              <TbTargetArrow />
                              {ele.exam_total_marks}Marks
                            </span>
                          </p>
                        </div>
          
                        <Link to={`/admin/list/${examName}/${subjectName}/editQuestionSet`}>
                          <Button text="Edit Exam" className={Style.editExam} onDualMode={true} isHollow={true} >
                          <MdEdit />
                          </Button>
                        </Link>
                      </div>
                    ))
                  ) : (
                    <p>No Test found for this subject.</p>
                  )}
                </div>
        </div>
      </div>
    </>
  );
};

export default ExamsList;
