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

// import { useLoadingContext } from "../Components/Loading/Loading";

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {addLoading, removeLoading} = useContext(LoadingContext)

  // const {addLoading, removeLoading} = useLoadingContext();

  const getUserData = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      // console.log("Token is present");

      const user = jwtDecode(token);
      // console.log("User is:", user);

      if (user.iat <= user.exp) {
        try {
          // console.log("User id is:", user.id);
          addLoading();

          const tokenObj = {
            token: token,
          };

          const user_data = await apiCall.post(
            `${userDetailsApi}/${user.id}`,
            tokenObj
          );

          if (user_data.status === 200) {
            console.log(user_data.data);
            dispatch(setUserId(user.id));
            dispatch(setUserStatus(true));
            dispatch(setUserData(user_data.data.user));
          } else {
            console.log("Error fetching data");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
        finally{
          removeLoading();
        }
      }
      else
      {
        removeLoading();
        localStorage.removeItem("token");
      }
    }
  };
  useEffect(() => {    
    if(location.pathname === "/dashboard")
    {
      getUserData();
    }
    // getUserData();
  }, [navigate,location]);

  return (
    <div className="container">
      
      
      <Navbar />
      <Outlet />
      
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
