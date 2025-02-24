import React from "react";
import { Link, useParams } from "react-router-dom";
import Style from "../../css/Exam.module.css";
import Breadcrumb from "./Breadcrumb";

import { examlists } from "../../assets/ExamData/examList";

const Subjects = () => {
  const { examName } = useParams(); // Get exam name from URL
  const subjects = examlists[examName] || []; // Get subjects or empty array if not found

  return (
    <div className={Style.Subjects}>
      <Breadcrumb /> {/* Breadcrumb Navigation */}
      <h2>{examName} Subjects</h2>
      <ul>
        {subjects.length > 0 ? (
          subjects.map((subject) => (
            <li key={subject}>
              <Link to={`/exam/${examName}/${subject}`}>{subject}</Link>
            </li>
          ))
        ) : (
          <p>No subjects found for this exam.</p>
        )}
      </ul>
      <Link to="/exam">🔙 Back to Exam Selection</Link>
    </div>
  );
};

export default Subjects;
