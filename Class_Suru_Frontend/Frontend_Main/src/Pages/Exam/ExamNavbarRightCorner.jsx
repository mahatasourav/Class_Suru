import Style from "../../css/nav.module.css";
import Button from "../../Components/Button/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ExamNavbarRight = () => {
  const userStatus = useSelector((state) => state.user.status);
  const navigate = useNavigate(); // Fixing undefined navigate

  return (
    <div className={Style.navButtons}>
      <Button
        text="Login/Signup"
        className={`${Style.navButton} ${userStatus ? "" : Style.active}`}
        isLink={true}
        link="/login"
      />

      <div
        className={`${Style.profile} ${userStatus ? Style.active : ""}`}
        onClick={() => navigate("/dashboard")}
      >
        <img
          className={Style.profileImg}
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="profile"
        />
      </div>
    </div>
  );
};

const ExamMainNavRight = () => {
  const [timeLeft, setTimeLeft] = useState(3 * 3600); // 10 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          submitExam();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <p>
        Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}
      </p>
    </div>
  );
};

export { ExamNavbarRight, ExamMainNavRight };

// ExamNavbarRight Corner Element
