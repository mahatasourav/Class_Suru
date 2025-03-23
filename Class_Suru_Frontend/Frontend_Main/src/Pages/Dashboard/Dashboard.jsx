import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../Components";
import {
  logout,
  setUserData,
  setUserId,
  setUserStatus,
} from "../../Redux/features/userSlice";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { userDetailsApi } from "../../apis";
import { LoadingContext } from "../../Components/Loading/Loading";
import { useState } from "react";
import { usePopup } from "popine";
import Style from "../../css/profile.module.css";
import { getUserData } from "../../utils/getUserData";
import DashboardRightProfile from "./DashboardRightProfile";
import { Link } from "react-router-dom";
import DashboardRightRecentExam from "./DashboardRightRecentExam";
import { IoPersonSharp } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa6";
import { GrLogout } from "react-icons/gr";

const Dashboard = () => {
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("profile"); // State to track selection
  const { PopUp, pop } = usePopup();
  // const getUserData = async () => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     // console.log("Token is present");

  //     const user = jwtDecode(token);
  //     if (user.iat <= user.exp) {
  //       try {
  //         console.log("User id is:", user.id);

  //         const tokenObj = {
  //           token: token,
  //         };

  //         const user_data = await axios.post(
  //           `${userDetailsApi}/${user.id}`,
  //           tokenObj
  //         );

  //         if (user_data.status === 200) {
  //           console.log(user_data.data);
  //           dispatch(setUserId(user.id));
  //           dispatch(setUserStatus(true));
  //           dispatch(setUserData(user_data.data.user));
  //         } else {
  //           console.log("Error fetching data");
  //         }
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     }
  //   }
  // };
  let userExistToken;
  const handleUserData = async () => {
    const data = await getUserData();
    if (data !== null) {
      dispatch(setUserId(data.userId));
      dispatch(setUserStatus(true));
      dispatch(setUserData(data.user));
    }
  };
  useEffect(() => {
    userExistToken = localStorage.getItem("token");
    if (userExistToken === null) {
      navigate("/login");
    } else {
      handleUserData();
    }
  }, []);

  return (
    // <div>
    //   {userData && userData.name}
    //   <Button
    //     text="Logout"
    //     onClick={() => {
    //       localStorage.removeItem("token");
    //       // window.location.reload();
    //       dispatch(logout());
    //       navigate("/");
    //     }}
    //   />
    // </div>
    <>
      <PopUp />
      <div className={Style.userDashboardSection}>
        <div className={Style.userDashboardLeft}>
          <div className={Style.userDashboardButton}>
            <p
              className={selectedOption === "profile" ? Style.activeButton : ""}
              onClick={() => setSelectedOption("profile")}
            >
              <IoPersonSharp />
              <span>User Dashboard</span>
            </p>
          </div>
          <div className={Style.recentExamButton}>
            <p
              className={
                selectedOption === "recentExams" ? Style.activeButton : ""
              }
              onClick={() => setSelectedOption("recentExams")}
            >
              <FaFileInvoice />
              <span>Recent Exams</span>
            </p>
          </div>
          <div className={Style.logoutButton}>
            {" "}
            <p
              onClick={() => {
                const confirmLogout = window.confirm(
                  "Do you really want to logout?"
                );
                // pop.alert("Do you really want to logout?");
                if (confirmLogout) {
                  localStorage.removeItem("token");
                  dispatch(logout());
                  navigate("/");
                }
              }}
            >
              <GrLogout />
              <span>Log Out</span>
            </p>{" "}
          </div>
        </div>
        <div className={Style.userDashboardRight}>
          {selectedOption === "profile" ? (
            <DashboardRightProfile />
          ) : (
            <DashboardRightRecentExam />
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
