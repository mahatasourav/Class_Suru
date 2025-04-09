import React, { useEffect, useState } from "react";
import Style from "../../css/nav.module.css";
import { useLocation } from "react-router-dom";

const TimeLeft = () => {
  const [hrs, sethrs] = useState(0);
  const [min, setmin] = useState(0);
  const [sec, setsec] = useState(0);
  // Convert initial time to seconds.
  // const initialSeconds = hrs * 3600 + min * 60 + sec;
  const [initialSeconds, setinitialSeconds] = useState(0);
  const location = useLocation();
  const isMainExamPage = location.pathname.includes("/MainExamPage");
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    if (isMainExamPage) {
      let time = JSON.parse(localStorage.getItem("exam")).exam_duration.split(
        ":"
      );
      console.log("time", time);
      sethrs(Number(time[0]));
      setmin(Number(time[1]));
      setsec(Number(time[2]));
      setTimeLeft(hrs * 3600 + min * 60 + sec);
      setinitialSeconds(hrs * 3600 + min * 60 + sec);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          // You can perform an action here when the timer ends.
          // e.g., submitExam();
          return 0;
        }
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

  // const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className={Style.timeLeft}>
      <div className={Style.timeLeftText}>Time Left:</div>
      <div className={Style.timeLeftBlocks}>
        <div className={Style.timeBlock}>{formatTime(timeLeft).hours}</div>
        <div className={Style.timeEsto}>:</div>
        <div className={Style.timeBlock}>{formatTime(timeLeft).minutes}</div>
        <div className={Style.timeEsto}>:</div>
        <div className={Style.timeBlock}>{formatTime(timeLeft).seconds}</div>
      </div>
    </div>
  );
};

export default TimeLeft;
