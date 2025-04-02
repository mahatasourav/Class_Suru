import React, { useEffect, useState } from "react";
import Style from "../../css/nav.module.css";

const TimeLeft = ({ hrs = 0, min = 50, sec = 0 }) => {
  // Convert initial time to seconds.
  const initialSeconds = hrs * 3600 + min * 60 + sec;
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
