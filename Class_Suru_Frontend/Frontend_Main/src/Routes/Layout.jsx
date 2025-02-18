import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../Components";
import { Outlet } from "react-router-dom";
import "../css/index.css";
import axios from "axios";
import { userDetailsApi } from "../apis";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUserData, setUserId, setUserStatus } from "../Redux/features/userSlice";
import apiCall from "../utils/apiCall";
import { Loading } from "../Pages";

const Layout = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const getUserData = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      // console.log("Token is present");
      
      const user = jwtDecode(token);
      // console.log("User is:", user);
      
      if (user.iat <= user.exp) {
        try {
          // console.log("User id is:", user.id);
          setLoading(true);
          const tokenObj = {
            token : token
          }          
          
          const user_data = await apiCall.post(`${userDetailsApi}/${user.id}`, tokenObj)

          if(user_data.status === 200)
          {
            console.log(user_data.data);
            dispatch(setUserId(user.id));
            dispatch(setUserStatus(true));
            dispatch(setUserData(user_data.data.user));
            setLoading(false);
          }
          else
          {
            setLoading(false);
            console.log("Error fetching data");
          }
        } catch (error) {
          setLoading(false);
          console.error("Error fetching data:", error);
        }
      }

      
      
    }
  }
  useEffect(()=>{
    window.scrollTo(0,0);
    // console.log("laytout is called");
    
    getUserData();
  },[]);
  return (
    <div className="container">
      {
        loading && <Loading />
      }
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
