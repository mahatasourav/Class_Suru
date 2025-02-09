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
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;