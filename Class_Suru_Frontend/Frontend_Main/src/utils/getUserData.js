import { jwtDecode } from "jwt-decode";
import apiCall from "./apiCall";
import { userDetailsApi } from "../apis";
import { useDispatch } from "react-redux";

export const getUserData = async () => {

  const token = localStorage.getItem("token");
  if (token) {
    // console.log("Token is present");

    const user = jwtDecode(token);
    // console.log("User is:", user);

    if (user.iat <= user.exp) {
      try {
        // console.log("User id is:", user.id);

        const tokenObj = {
          token: token,
        };

        const user_data = await apiCall.post(
          `${userDetailsApi}/${user.id}`,
          tokenObj
        );

        if (user_data.status === 200) {
          console.log(user_data.data);
          return user_data.data;
        } else {
          console.log("Error fetching data");
          return null;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    } else {
      localStorage.removeItem("token");
      return null;
    }
  }
};
