import React from "react";
import examData from "../../assets/examData";
import Style from "../../css/Home.module.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeSec4 = () => {
  return (
    <div className={Style.HomeSec4}>
      <div className={Style.HomeSec41}>
        <center>
          {" "}
          <h2>
            সবার জন্য <span className={Style.spancolor}>ফ্রি অনলাইন</span>{" "}
            পরীক্ষা
          </h2>
        </center>
      </div>
      <div className={Style.HomeSec42}>
        {examData.map((exam, index) => (
          <div className={Style.examSection} key={index}>
            <div className={Style.examInfo}>
              <h2>{exam.title}</h2>
              <h5>{exam.heading}</h5>
              <p>{exam.description}</p>
              <Link to={`/exam`} className={Style.examButton}>
                {exam.buttonText} <FaArrowCircleRight />
              </Link>
            </div>
            <img
              src={exam.image}
              alt={exam.title}
              className={Style.examImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSec4;
