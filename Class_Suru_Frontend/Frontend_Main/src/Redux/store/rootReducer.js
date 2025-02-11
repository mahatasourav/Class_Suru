import { combineReducers } from "@reduxjs/toolkit";
// import userSlice from "./userSlice";


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userId: null,
  userData: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserId: (state, action)=>{
      state.userId = action.payload;
    },
    setUserStatus: (state, action)=>{
      state.status = action.payload;
    },
    setUserData: (state, action)=>{
      state.userData = action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.userId = null;
      state.userData = null;
    },
  },
});

const rootReducer = combineReducers({
    user: userSlice.reducer,
})

export const { setUserId, setUserStatus, setUserData, logout } = userSlice.actions;
// export default userSlice.reducer;



export default rootReducer;