import React, { useState } from "react";
import Style from "../../css/examnav.module.css";
import logo from "../../assets/class_suru_logo.png";
import Button from "../Button/Button";
import TimeLeft from "./TimeLeft";
import { useLocation } from "react-router-dom";

const ExamNavbar = () => {
  const location = useLocation();
  const isMainExamPage = location.pathname.includes("/MainExamPage");
  // console.log(location);
  const [fullScreen, setFullScreen] = useState(false);
  const handleFullScreen = () => {
    if (fullScreen) {
      document.exitFullscreen();
      setFullScreen(false);
    } else {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    }
  };

  return (
    <>
      <nav className={`${Style.navContainer} ${Style.examNavContainer}`}>
        <div className={Style.navLower}>
          <div className={Style.nav}>
            <div className={Style.logo}>
              <img className={Style.logoImg} src={logo} alt="class suru logo" />
              <div className={Style.logoText}>
                Class Suru | <b>Exam Mock Test</b>
              </div>
            </div>

            
            {isMainExamPage && <TimeLeft />}
            {/* <div className={Style.navButtons}>
              <Button
                // className={Style.navButton}
                text={fullScreen ? "Exit Full Screen" : "Enter Full Screen"}
                onDualMode={true}
                isHollow={true}
                onClick={handleFullScreen}
                // className={Style.navButton}
              />
            </div> */}
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default ExamNavbar;
