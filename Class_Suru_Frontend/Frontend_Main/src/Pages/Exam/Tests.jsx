import React from "react";
import { Link, useParams } from "react-router-dom";
import Style from "../../css/Exam.module.css";
import Breadcrumb from "./Breadcrumb";
import { subjectTests } from "../../assets/ExamData/subjectTests";

const Tests = () => {
  const { examName, subjectName } = useParams(); // Get exam & subject from URL
  const Tests = subjectTests[subjectName] || []; // Get modules or empty array

  return (
    <div className={Style.Modules}>
      <Breadcrumb /> {/* Breadcrumb Navigation */}
      <h2>{subjectName} - Test</h2>
      <ul>
        {Tests.length > 0 ? (
          Tests.map((Test, index) => (
            <li key={index}>
              <Link to={`/exam/${examName}/${subjectName}/instruction`}>
                {Test}
              </Link>
            </li>
          ))
        ) : (
          <p>No modules found for this subject.</p>
        )}
      </ul>
      <Link to={`/exam/${examName}`}>🔙 Back to {examName} Subjects</Link>
    </div>
  );
};

export default Tests;
