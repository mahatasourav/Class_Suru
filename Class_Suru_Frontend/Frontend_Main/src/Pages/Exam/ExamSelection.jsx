import React from "react";
import Button from "../../Components/Button/Button";
import Style from "../../css/Exam.module.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
const examlists = ["JEE Mains", "NEET", "BOARD", "JENPAS"];
const ExamSelection = () => {
  return (
    <div className={Style.ExamSelection}>
      <Breadcrumb />
      <div className={Style.ExamSelectionHeading}>
        {" "}
        <h2>
          পরীক্ষা <span className={Style.spancolor}>পোর্টাল</span>
        </h2>
        <p>
          আমাদের পরীক্ষা পোর্টালে পাবেন প্রতিটি কম্পেটেটিভ এবং বোর্ড এক্সাম এর
          জন্য পরীক্ষা দেওয়ার ব্যাবস্থা , আপনার দক্ষতা যাচাই এবং উন্নতির জন্য
          এটি একটি আদর্শ প্ল্যাটফর্ম , এখানে কিছু পরীক্ষার পোর্টাল রয়েছে, যেমন
          :
        </p>
      </div>
      <div className={Style.ExamLists}>
        {examlists.map((exam, index) => (
          <div className={Style.ExamList}>
            <h2 key={index}>{exam}</h2>
            <Button text="Select" className={Style.ExamButton} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamSelection;
