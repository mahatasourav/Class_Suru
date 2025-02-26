import React from "react";
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

const ExamsList = () => {
    const {examName,subjectName} = useParams();
    const Tests = subjectTests[subjectName] || [];
    console.log(examName,subjectName);
    
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
                  {Tests.length > 0 ? (
                    Tests.map((Test, index) => (
                      <div key={index} className={`${TestStyle.Test} ${Style.test}`}>
                        <div>
                          <h2 className={Style.testHeading}> {Test}</h2>
                          <p className={`${TestStyle.TestLower} ${Style.testLower}`}>
                            <span className={Style.testLowerText}>
                              <FaFileCircleQuestion />
                              75 Question{" "}
                            </span>
                            <span className={Style.testLowerText}>
                              <TfiTimer />
                              180 minutes
                            </span>
                            <span className={Style.testLowerText}>
                              <TbTargetArrow />
                              300 Marks
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
                    <p>No modules found for this subject.</p>
                  )}
                </div>
        </div>
      </div>
    </>
  );
};

export default ExamsList;
