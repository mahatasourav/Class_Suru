import React, { useContext, useEffect, useState } from "react";
import { Footer, Navbar } from "../Components";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "../css/index.css";
import axios from "axios";
import { userDetailsApi } from "../apis";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import {
  setUserData,
  setUserId,
  setUserStatus,
} from "../Redux/features/userSlice";
import apiCall from "../utils/apiCall";
import { LoadingContext } from "../Components/Loading/Loading";
import { getUserData } from "../utils/getUserData";

// import { useLoadingContext } from "../Components/Loading/Loading";

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {addLoading, removeLoading} = useContext(LoadingContext)

  // const {addLoading, removeLoading} = useLoadingContext();

  const handleUserData = async () => {
    addLoading();
    const data = await getUserData();
    if(data !== null){
      dispatch(setUserId(data.userId));
      dispatch(setUserStatus(true));
      dispatch(setUserData(data.user));
    }
    removeLoading();
  }
  
  useEffect(() => {
    handleUserData();
    
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
