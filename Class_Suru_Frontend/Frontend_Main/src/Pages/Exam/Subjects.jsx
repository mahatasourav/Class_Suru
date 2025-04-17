import React from "react";
import { Link, useParams } from "react-router-dom";
import Style from "../../css/Exam.module.css";
import Breadcrumb from "./Breadcrumb";

import { examlists } from "../../assets/ExamData/examList";
import ExamSelection from "./ExamSelection";
import { ExamCard } from "../../Components";

const Subjects = () => {
  const { examName } = useParams(); // Get exam name from URL
  const exam = Object.keys(examlists).map((exam) => {
    return examlists[exam].link === examName ? examlists[exam] : null;
  })
  const filteredExam = exam.filter((item) => item !== null);

  console.log(filteredExam);
  
  
  // const exam = examlists.find((exam) => exam.link === examName);
  const subjects = filteredExam[0] ? filteredExam[0].subjects : []; // Get subjects for the selected exam
  
  // const subjects = exam ? exam.subjects : [];
  /* Here i Use the same class anme of component  <ExamSelection/> to get the same structures that's why class name may looks like unrealted to the content : */
  return (
    <div className={Style.ExamSelection}>
      <Breadcrumb />
      <ul className={Style.ExamLists}>
        {subjects.length > 0 ? (
          subjects.map((subject) => (
            // <li key={subject} className={Style.ExamList}>
            //   <h2>{subject}</h2>
            //   <Link
            //     to={`/exam/${examName}/${subject}`}
            //     key={subject}
            //     className={Style.ExamButton}
            //   >
            //     Select
            //   </Link>
            // </li>
            <ExamCard text={subject} link={`/exam/${examName}/${subject}`}  key={subject}/>
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
