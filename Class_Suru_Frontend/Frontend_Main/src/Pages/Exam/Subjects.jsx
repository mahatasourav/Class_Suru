import React from "react";
import { Link, useParams } from "react-router-dom";
import Style from "../../css/Exam.module.css";
import Breadcrumb from "./Breadcrumb";

import { examlists } from "../../assets/ExamData/examList";
import ExamSelection from "./ExamSelection";

const Subjects = () => {
  const { examName } = useParams(); // Get exam name from URL
  const subjects = examlists[examName] || [];
  /* Here i Use the same class anme of component  <ExamSelection/> to get the same structures that's why class name may looks like unrealted to the content : */
  return (
    <div className={Style.ExamSelection}>
      <Breadcrumb />
      <ul className={Style.ExamLists}>
        {subjects.length > 0 ? (
          subjects.map((subject) => (
            <li key={subject} className={Style.ExamList}>
              <h2>{subject}</h2>
              <Link
                to={`/exam/${examName}/${subject}`}
                key={subject}
                className={Style.ExamButton}
              >
                Select
              </Link>
            </li>
          ))
        ) : (
          <p>No subjects found for this exam.</p>
        )}
      </ul>
      {/* <Link to="/exam" className={Style.BackToPrev}>
        🔙
      </Link> */}
    </div>
  );
};

export default Subjects;
