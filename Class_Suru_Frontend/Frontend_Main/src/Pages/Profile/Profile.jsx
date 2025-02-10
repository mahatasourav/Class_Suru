import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../Components";
import { logout, setUserData, setUserId, setUserStatus } from "../../Redux/features/userSlice";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { userDetailsApi } from "../../apis";

const Profile = () => {
  const userId = useSelector((state) => state.user.status && state.user.userId);
  const userName = useSelector(
    (state) =>
      state.user.status && state.user.userData && state.user.userData.name
  );
  const userStatus = useSelector((state) => state.user.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserData = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      // console.log("Token is present");
      
      const user = jwtDecode(token);
      if (user.iat <= user.exp) {
        try {
          console.log("User id is:", user.id);

          const tokenObj = {
            token : token
          }
          
          const user_data = await axios.post(`${userDetailsApi}/${user.id}`, tokenObj)

          if(user_data.status === 200)
          {
            console.log(user_data.data);
            dispatch(setUserId(user.id));
            dispatch(setUserStatus(true));
            dispatch(setUserData(user_data.data.user));
          }
          else
          {
            console.log("Error fetching data");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      
      
    }
  }
  useEffect(() => {
    console.log(userId);
  }, [userId]);
  return (
    <div style={{ marginTop: "100px" }}>
      {userStatus ? `hello ${userName}` : "Loading ..."}
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
  );
};

export default Profile;
