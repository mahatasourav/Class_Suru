import React from "react";
import { Link } from "react-router-dom";
import Style from "../../css/Exam.module.css";
import Breadcrumb from "./Breadcrumb";
import { ExamCard } from "../../Components";

const examlists = {
  JEE: ["Math", "Physics", "Chemistry"],
  NEET: ["Biology", "Physics", "Chemistry"],
  UPSC: ["Computer Science", "Mechanical", "Electrical"],
  GATE: ["History", "Polity", "Geography"],
};

const ExamSelection = () => {
  return (
    <div className={Style.ExamSelection}>
      <Breadcrumb />
      <div className={Style.ExamSelectionHeading}>
        <div className={Style.ExamSelectionHeadingText}>
          পরীক্ষা <span className={Style.spancolor}>পোর্টাল</span>
        </div>
        <p className={Style.ExamSelectionText}>
          আমাদের পরীক্ষা পোর্টালে পাবেন প্রতিটি কম্পেটেটিভ এবং বোর্ড এক্সাম এর
          জন্য পরীক্ষা দেওয়ার ব্যাবস্থা , আপনার দক্ষতা যাচাই এবং উন্নতির জন্য
          এটি একটি আদর্শ প্ল্যাটফর্ম , এখানে কিছু পরীক্ষার পোর্টাল রয়েছে, যেমন
          :
        </p>
      </div>
      <div className={Style.ExamLists}>
        {Object.keys(examlists).map((exam) => (
          // <div key={exam} className={Style.ExamList}>
          //   <h2>{exam}</h2>
          //   <Link to={`/exam/${exam}`} className={Style.ExamButton}>
          //     Select
          //   </Link>
          // </div>
          <ExamCard text={exam} link={`/exam/${exam}`} key={exam}  />
        ))}
      </div>
    </div>
  );
};

export default ExamSelection;
