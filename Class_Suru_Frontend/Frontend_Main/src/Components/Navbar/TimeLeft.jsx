import React, { useEffect, useState } from "react";
import Style from "../../css/examnav.module.css";
import { useLocation } from "react-router-dom";

const TimeLeft = () => {

  const hrs = JSON.parse(localStorage.getItem("exam")).exam_duration.split(":")[0];
  const min = JSON.parse(localStorage.getItem("exam")).exam_duration.split(":")[1];
  const sec = JSON.parse(localStorage.getItem("exam")).exam_duration.split(":")[2];
  
  const initialSeconds = Number(hrs) * 3600 + Number(min) * 60 + Number(sec);
  const location = useLocation();
  const isMainExamPage = location.pathname.includes("/MainExamPage");
  const [timeLeft, setTimeLeft] = useState(initialSeconds);


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          
          clearInterval(timer);
          // You can perform an action here when the timer ends.
          // e.g., submitExam();
          return 0;
        }
        localStorage.setItem("timeLeft", JSON.stringify(prevTime - 1));
        return prevTime - 1;
      });
      
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return {
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className={Style.timeLeft}>
      <div className={Style.timeLeftText}>Time Left:</div>
      <div className={Style.timeLeftBlocks}>
        <div className={Style.timeBlock}>{hours}</div>
        <div className={Style.timeEsto}>:</div>
        <div className={Style.timeBlock}>{minutes}</div>
        <div className={Style.timeEsto}>:</div>
        <div className={Style.timeBlock}>{seconds}</div>
      </div>
    </div>
  );
};

export default TimeLeft;
