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

import Style from "../../css/profile.module.css"

const Dashboard = () => {
  const userData = useSelector((state)=>state.user.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  useEffect(() => {
    userExistToken  = localStorage.getItem("token");
    if(userExistToken === null){
      navigate("/login");
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
      <div className={Style.userProfileSection}>
        {/* <h1>hello world</h1> */}
        <div className={Style.text}><span>Welcome Back, </span><b>{userData && userData.name}</b></div>
      <Button
        text="Logout"
        onClick={() => {
          localStorage.removeItem("token");
          // window.location.reload();
          dispatch(logout());
          navigate("/");
        }}
        />
      </div>
    </>
  );
};

export default Dashboard;
