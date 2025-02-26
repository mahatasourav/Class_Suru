import React, { useContext, useEffect } from "react";
import { Footer, Navbar } from "../Components";
import ExamNavbar from "../Pages/Exam/ExamNavbar";
import { Outlet, useLocation } from "react-router-dom";
import "../css/index.css";
import { useDispatch } from "react-redux";
import {
  setUserData,
  setUserId,
  setUserStatus,
} from "../Redux/features/userSlice";
import { LoadingContext } from "../Components/Loading/Loading";
import { getUserData } from "../utils/getUserData";

const Layout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { addLoading, removeLoading } = useContext(LoadingContext);

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

  // 🔹 Remove Navbar Completely from Instruction Page
  const isInstructionPage = location.pathname.includes("/instruction");
  return (
    <div className="container">
      {/* 🔥 Completely remove Navbar instead of using display: none */}
      {!isInstructionPage && <Navbar />}
      {isInstructionPage && <ExamNavbar />}

      <div
        className={
          isInstructionPage ? "instruction-container" : "child-container"
        }
      >
        <Outlet />
      </div>
      {!isInstructionPage && <Footer />}
    </div>
  );
};

export default Layout;
