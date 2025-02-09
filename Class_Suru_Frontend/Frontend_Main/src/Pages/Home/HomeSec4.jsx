import React from "react";
import examData from "../../assets/examData";
import Style from "../../css/Home.module.css";

const HomeSec4 = () => {
  return (
    <div className={Style.HomeSec4}>
      <div className={Style.HomeSec41}>
        <center>
          {" "}
          <h1>
            সবার জন্য <span>ফ্রি অনলাইন</span> পরীক্ষা
          </h1>
        </center>
      </div>
      <div className={Style.HomeSec42}>
        {examData.map((exam, index) => (
          <div className={Style.examSection} key={index}>
            <div className={Style.examInfo}>
              <h2>{exam.title}</h2>
              <h5>{exam.heading}</h5>
              <p>{exam.description}</p>
              <button className={Style.examButton}>{exam.buttonText}</button>
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
