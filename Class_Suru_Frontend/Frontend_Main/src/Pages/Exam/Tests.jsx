import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Style from "../../css/Exam.module.css";
import Breadcrumb from "./Breadcrumb";
// import { subjectTests } from "../../assets/ExamData/subjectTests";
import Button from "../../Components/Button/Button";
import { FaFileCircleQuestion } from "react-icons/fa6";
import { TfiTimer } from "react-icons/tfi";
import { TbTargetArrow } from "react-icons/tb";
import axios from "axios";
import { getExamsApi } from "../../apis";
import { ExamCard } from "../../Components";

const Tests = () => {
  const { examName, subjectName } = useParams(); // Get exam & subject from URL
  // const Tests = subjectTests[subjectName] || []; // Get modules or empty array

  const [loading, setLoading] = useState(false);

  const [examData, setexamData] = useState([]);
  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${getExamsApi}/${subjectName}/${examName}`
      );
      console.log(response);
      if (response.status === 200) {
        setexamData(response.data.exam);
      }
    } catch (error) {
      console.log("error", error);
    }
    finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handelSaveCurrentExam = (index) => {
    localStorage.setItem("exam", JSON.stringify(examData[index]));
  };
  return (
    <div className={Style.TestSection}>
      <div>
        <Breadcrumb />
        {/* <input type="checkbox" />
        All */}
      </div>{" "}
      {/* Breadcrumb Navigation */}
      <div className={Style.Tests}>
        {examData.length > 0 ? (
          examData.map((Test, index) => (
            <p key={index} className={Style.Test}>
              <div>
                <h2> {Test.title}</h2>
                <p className={Style.TestLower}>
                  <span>
                    <FaFileCircleQuestion />
                    75 Question{" "}
                  </span>
                  <span>
                    <TfiTimer />
                    {Test.exam_duration} hours
                  </span>
                  <span>
                    <TbTargetArrow />
                    {Test.exam_total_marks} Marks
                  </span>
                </p>
              </div>

              <Button
                text="Start Exam"
                isLink={true}
                link={`/exam/${examName}/${subjectName}/instruction/${Test.id}`}
                onClick={() => handelSaveCurrentExam(index)}
              />
            </p>
            
          ))
        ) : (
          loading ? (
            <div className={Style.loading}>
              <div className={Style.loader}></div>
            </div>
          ) : (
            <p className={Style.Test}>
              No modules found for this subject.
            </p>
          )
          
        )}
      </div>
      {/* <Link to={`/exam/${examName}`} className={Style.BackToPrev}>
        🔙{" "}
      </Link> */}
    </div>
  );
};

export default Tests;
