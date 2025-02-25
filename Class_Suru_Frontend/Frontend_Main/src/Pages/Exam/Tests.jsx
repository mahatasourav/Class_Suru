import React from "react";
import { Link, useParams } from "react-router-dom";
import Style from "../../css/Exam.module.css";
import Breadcrumb from "./Breadcrumb";
import { subjectTests } from "../../assets/ExamData/subjectTests";
import Button from "../../Components/Button/Button";
import { FaFileCircleQuestion } from "react-icons/fa6";
import { TfiTimer } from "react-icons/tfi";
import { TbTargetArrow } from "react-icons/tb";
const Tests = () => {
  const { examName, subjectName } = useParams(); // Get exam & subject from URL
  const Tests = subjectTests[subjectName] || []; // Get modules or empty array

  return (
    <div className={Style.TestSection}>
      <div>
        <Breadcrumb />
        {/* <input type="checkbox" />
        All */}
      </div>{" "}
      {/* Breadcrumb Navigation */}
      <div className={Style.Tests}>
        {Tests.length > 0 ? (
          Tests.map((Test, index) => (
            <p key={index} className={Style.Test}>
              <div>
                <h2> {Test}</h2>
                <p className={Style.TestLower}>
                  <span>
                    <FaFileCircleQuestion />
                    75 Question{" "}
                  </span>
                  <span>
                    <TfiTimer />
                    180 minutes
                  </span>
                  <span>
                    <TbTargetArrow />
                    300 Marks
                  </span>
                </p>
              </div>

              <Link to={`/exam/${examName}/${subjectName}/instruction`}>
                <Button text="Start Exam" />
              </Link>
            </p>
          ))
        ) : (
          <p>No modules found for this subject.</p>
        )}
      </div>
      {/* <Link to={`/exam/${examName}`} className={Style.BackToPrev}>
        🔙{" "}
      </Link> */}
    </div>
  );
};

export default Tests;
