import React from "react";
import Style from "../../css/result.module.css";
import { GiSandsOfTime } from "react-icons/gi";
import { HiQuestionMarkCircle } from "react-icons/hi2";
import { FaCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { PiExclamationMarkFill } from "react-icons/pi";
import Button from "../../Components/Button/Button";

const Result = () => {
  React.useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    const handlePopState = (event) => {
      window.history.pushState(null, null, window.location.href);
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
  return (
    <div className={Style.Result}>
      {/* UpperResult */}
      <div className={Style.UpperResult}>
        <div className={Style.UpperResultDiv1}>
          <h3>SCORE</h3>
          <h1 style={{ color: "rgb(35, 128, 249)", fontSize: "60px" }}>0</h1>
          <p>OUT OF 300</p>
        </div>

        <div className={Style.UpperResultDiv2}>
          {" "}
          <GiSandsOfTime
            style={{
              color: "rgb(134, 46, 249)",
              backgroundColor: "white",
            }}
          />
          <span>10 minutes , 8 seconds</span>
        </div>
        <div>
          <input type="range" value={50} />
        </div>
        <div>50% Accuracy</div>
      </div>
      {/* MidResult */}
      <div className={Style.MidResult}>
        <div>
          <p>
            <HiQuestionMarkCircle
              style={{
                color: "black",
                backgroundColor: "white",
                fontSize: "1.5rem",
              }}
            />
            Total Questions
          </p>
          <p>75</p>
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
          <p>3</p>
        </div>
        <div>
          <p>
            <RxCrossCircled
              style={{
                color: "white",
                backgroundColor: "red",
                fontSize: "1.5rem",
              }}
            />
            Incorrect Answers
          </p>
          <p>1</p>
        </div>
        <div>
          <p>
            <PiExclamationMarkFill
              style={{
                color: "white",
                backgroundColor: "Black",
                fontSize: "1.5rem",
              }}
            />
            Unattempted Question
          </p>
          <p>71</p>
        </div>
      </div>
      {/* LowerResult */}
      <div>
        <Button text="Go to Exam Page" isLink={true} link="/exam" />
      </div>
    </div>
  );
};

export default Result;
