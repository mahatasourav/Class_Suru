import React,{useEffect, useState} from "react";
import Style from "../../css/result.module.css";
import { GiSandsOfTime } from "react-icons/gi";
import { HiQuestionMarkCircle } from "react-icons/hi2";
import { FaCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { PiExclamationMarkFill } from "react-icons/pi";
import Button from "../../Components/Button/Button";
import { useParams } from "react-router-dom";
import { TbAlertSquareFilled } from "react-icons/tb";
import axios from "axios";
import { getResultByResultIdApi } from "../../apis";
import { IoMdCloseCircle } from "react-icons/io";

const UserResult = () => {
  const [resultData, setResultData] = useState(null);
  const {result_id} = useParams();
  const examErrorMsg = localStorage.getItem("examErrorMsg");

  if(examErrorMsg){
    alert(examErrorMsg);
    localStorage.removeItem("examErrorMsg");
  }
  // console.log(result_id);
  
  // React.useEffect(() => {
  //   window.history.pushState(null, null, window.location.href);
  //   const handlePopState = (event) => {
  //     window.history.pushState(null, null, window.location.href);
  //   };
  //   window.addEventListener("popstate", handlePopState);

  //   return () => {
  //     window.removeEventListener("popstate", handlePopState);
  //   };
  // }, []);

  const getResult = async () => {
    try {
      const result = await axios.get(`${getResultByResultIdApi}/${result_id}`);
      if(result.status === 200){
        setResultData(result.data.result);
        console.log(result.data.result);
        
      }
      
    } catch (error) {
      
    }
  }

  // Function to enter fullscreen mode
  // function exitFullScreen() {
  //   if (document.fullscreenElement) {
  //     document.exitFullscreen().catch((err) => {
  //     console.error(`Error attempting to exit fullscreen: ${err.message}`);
  //     });
  //   }
  // }

  useEffect(() => {
    // exitFullScreen();
    getResult()
  }, []);
  return (
    <div className={`${Style.Result} ${Style.resultContainer}`}>
      {/* UpperResult */}
        <div className={Style.UpperResult}>
          <div className={Style.UpperResultDiv1}>
            <h3>SCORE</h3>
            <h1 style={{  fontSize: "60px", textAlign: "center" }}
            className={`${Style.score} ${resultData?.accuracy < 40 ?Style.low: "" }${resultData?.accuracy > 41 && resultData?.accuracy < 60 ? Style.medium: "" }${resultData?.accuracy > 61 ? Style.good: "" }`}
            
            >{resultData?.score}</h1>
          <p>OUT OF <b> {resultData?.total_marks}</b></p>
        </div>

        <div className={Style.UpperResultDiv2}>
          {" "}
          {/* <GiSandsOfTime
            style={{
              color: "rgb(134, 46, 249)",
              backgroundColor: "white",
            }}
          /> */}
          {/* <span>10 minutes , 8 seconds</span> */}
        </div>
        <div className={Style.rangeContainer}>
          <div className={`${Style.range} ${resultData?.accuracy < 40 ?Style.low: "" }${resultData?.accuracy > 41 && resultData?.accuracy < 60 ? Style.medium: "" }${resultData?.accuracy > 61 ? Style.good: "" }`} style={{width: `${resultData?.accuracy}%` }}>
            
          </div>
        </div>
        <div>{resultData?.accuracy ? resultData.accuracy.toFixed(2) : "0.00"} % Accuracy</div>
      </div>
      {/* MidResult */}
      <div className={Style.MidResult}>
        <div>
          <p>
            <HiQuestionMarkCircle
              style={{
                color: "black",
                backgroundColor: "white",
                fontSize: "25px",
                marginTop: "2px"
              }}
            />
            Total Questions
          </p>
          <p>{resultData?.total_questions}</p>
        </div>
        <div>
          <p>
            <FaCheckCircle
              style={{
                color: "green",
                backgroundColor: "white",
                fontSize: "1.5rem",
              }}
            />
            Correct Answers
          </p>
          <p>{resultData?.total_correct_answers}</p>
        </div>
        <div>
          <p>
            <IoMdCloseCircle
              style={{
                color: "red",
                // backgroundColor: "red",
                fontSize: "28px",
              }}
            />
            Incorrect Answers
          </p>
          <p>{resultData?.total_incorrect_answers}</p>
        </div>
        <div>
          <p>
            <TbAlertSquareFilled
              style={{
                color: "#ffbb00",
                // backgroundColor: "Black",
                fontSize: "28px",
              }}
            />
            Unattempted Question
          </p>
          <p>{resultData?.total_unattempted_questions}</p>
        </div>
      </div>
      {/* LowerResult */}
      <div>
        <Button text="Go Back" isLink={true} link="/user/dashboard/recent-exams" />
      </div>
    </div>
  );
};

export default UserResult;
