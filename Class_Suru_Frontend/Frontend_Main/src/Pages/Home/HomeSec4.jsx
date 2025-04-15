import React from "react";
import examData from "../../assets/examData";
import Style from "../../css/Home.module.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeSec4 = () => {
  return (
    <div className={Style.HomeSec4}>
          <div className={Style.headingSection4}>
            সবার জন্য <span>ফ্রি অনলাইন</span>{" "}
            পরীক্ষা
          </div>
      <div className={Style.HomeSec42}>
        {examData.map((exam, index) => (
          <div className={Style.examSection} key={index}>
            <div className={Style.examInfo}>
              <div className={Style.examSectionHeading}>{exam.title}</div>
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
