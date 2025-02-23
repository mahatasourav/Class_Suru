import React from 'react'
import {Link}  from 'react-router-dom'
import Style from "../../../css/adminexamlist.module.css"
import { FaGreaterThan } from "react-icons/fa6";

const ExamList = () => {
  return (
    <>
        <div className={Style.adminExamListContainerPage}>
            <div className={Style.paths}>
            <Link to="/admin" className={Style.path}><FaGreaterThan  className={Style.pathIcon}/><span className={Style.pathText}>home</span></Link>
                <Link to="/admin/examlist" className={Style.path}><FaGreaterThan  className={Style.pathIcon}/><span className={Style.pathText}>exam list</span></Link>
            </div>
            <div className={Style.examListContainer}>
                <div className={Style.examListHeader}>
                    <span className={Style.examListHeaderText}>
                        <span>এক্সাম</span> নির্বাচন করুন
                    </span>
                </div>
                <div className={Style.examsTypeContainer}>
                    <div className={Style.examCard}>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ExamList