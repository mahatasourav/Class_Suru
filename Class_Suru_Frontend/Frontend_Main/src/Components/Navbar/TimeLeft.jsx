import React, { useEffect, useState } from "react";
import Style from "../../css/nav.module.css";

const TimeLeft = ({ hrs = 3, min = 0, sec = 0 }) => {
  return (
    <div className={Style.timeLeft}>
      <div className={Style.timeLeftText}>Time Left:</div>
      <div className={Style.timeLeftBlocks}>
        <div className={Style.timeBlock}>00</div>
        <div className={Style.timeEsto}>:</div>
        <div className={Style.timeBlock}>
          00
        </div>
        <div className={Style.timeEsto}>:</div>
        <div className={Style.timeBlock}>
          00
        </div>
      </div>
    </div>
  );
};

export default TimeLeft;