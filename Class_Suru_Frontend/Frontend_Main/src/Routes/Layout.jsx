import React, { useContext, useEffect } from "react";
import { Footer, Navbar } from "../Components";
import ExamNavbar from "../Pages/Exam/ExamNavbar";
import { Outlet, useLocation } from "react-router-dom";
import "../css/index.css";
import axios from "axios";
import { userDetailsApi } from "../apis";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserData,
  setUserId,
  setUserStatus,
} from "../Redux/features/userSlice";
import { LoadingContext } from "../Components/Loading/Loading";
import { getUserData } from "../utils/getUserData";
import AdminNavbar from "../Components/Navbar/AdminNavbar";
import Admin from "../Pages/Admin/Admin";

// import { useLoadingContext } from "../Components/Loading/Loading";

const Layout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const userState = useSelector((state)=>state.user.status)
  const isInstructionPage = location.pathname.includes("/instruction");

  const {addLoading, removeLoading} = useContext(LoadingContext)

  // const {addLoading, removeLoading} = useLoadingContext();

  const handleUserData = async () => {
    addLoading();
    const data = await getUserData();
    if (data) {
      dispatch(setUserId(data.userId));
      dispatch(setUserStatus(true));
      dispatch(setUserData(data.user));
    }
    removeLoading();
  };

  useEffect(() => {
    handleUserData();
  }, []);

  return (
    <div className="container">
      {/* 🔥 Completely remove Navbar instead of using display: none */}
      {!isInstructionPage && <Navbar />}

      <div
        className={
          isInstructionPage ? "instruction-container" : "child-container"
        }
      >
        {
          location.pathname.startsWith("/admin") ? <Admin/> : <Outlet />
        }
        {/* {isInstructionPage && <ExamNavbar />} */}
        
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
