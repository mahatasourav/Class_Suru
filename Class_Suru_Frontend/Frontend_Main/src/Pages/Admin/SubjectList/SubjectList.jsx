import React from "react";
import { Link, useParams } from "react-router-dom";
import Style from "../../../css/adminexamlist.module.css";
import { FaGreaterThan } from "react-icons/fa6";
import { BreadCrumb, Button, ExamCard } from "../../../Components";

const SubjectList = () => {
    const examlists = {
        JEE: ["Math", "Physics", "Chemistry"],
        NEET: ["Biology", "Physics", "Chemistry"],
        GATE: ["Computer Science", "Mechanical", "Electrical"],
        UPSC: ["History", "Polity", "Geography"],
      };

    const { examName } = useParams();

  return (
    <>
      <div className={Style.adminExamListContainerPage}>
        {/* <div className={Style.paths}>
            <Link to="/admin" className={Style.path}><FaGreaterThan  className={Style.pathIcon}/><span className={Style.pathText}>home</span></Link>
                <Link to="/admin/examlist" className={Style.path}><FaGreaterThan  className={Style.pathIcon}/><span className={Style.pathText}>exam list</span></Link>
            </div> */}
        <BreadCrumb defalutlLink="/admin" />
        <div className={Style.examListContainer}>
          <div className={Style.examListHeader}>
            <span className={Style.examListHeaderText}>
              <span>বিষয়</span> নির্বাচন করুন
            </span>
            <span className={Style.examListLine}></span>
          </div>
          <div className={Style.examsTypeContainer}>
            {examlists[examName].map((subject, index) => (
              <ExamCard text={subject} link={`/admin/list/${examName}/${subject}`} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectList;
