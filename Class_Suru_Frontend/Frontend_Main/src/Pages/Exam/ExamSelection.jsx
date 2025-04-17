import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Style from "../../css/Exam.module.css";
import Breadcrumb from "./Breadcrumb";
import { ExamCard } from "../../Components";

import { examlists } from "../../assets/ExamData/examList"; // Adjust the path as necessary
import { useSelector } from "react-redux";

const ExamSelection = () => {
  const navigate = useNavigate();
  

  const userStatus =useSelector((state) => state.user.status);
   useEffect(() => {
      if (!userStatus) {
        localStorage.setItem("path", "/exam");
        navigate("/login");
      }
    }, [userStatus]);

  return (
    <div className={Style.ExamSelection}>
      <Breadcrumb />
      <div className={Style.ExamSelectionHeading}>
        <div className={Style.ExamSelectionHeadingText}>
          🧑‍🏫 <span className={Style.spancolor}>Exam Portal:</span> Your Ultimate
          Study Companion!
        </div>
        <p className={Style.ExamSelectionText}>
          আমাদের Exam Portal-এ আপনি পেয়ে যাবেন Board এবং Competitive Exams-এর
          জন্য আলাদা আলাদা test modules, যা আপনার প্রস্তুতিকে আরও স্মার্ট এবং
          কার্যকরী করে তুলবে। 📊 নিজের performance track করুন, ✍️ mock test
          দিয়ে প্রস্তুতি যাচাই করুন — all-in-one smart platform!
        </p>
      </div>
      <div className={Style.ExamLists}>
        {Object.keys(examlists).map((exam) => 
          
          
          (
          // <div key={exam} className={Style.ExamList}>
          //   <h2>{exam}</h2>
          //   <Link to={`/exam/${exam}`} className={Style.ExamButton}>
          //     Select
          //   </Link>
          // </div>
          
          <ExamCard text={exam} link={`/exam/${examlists[exam].link}`} key={exam} />
        ))}
      </div>
    </div>
  );
};

export default ExamSelection;
