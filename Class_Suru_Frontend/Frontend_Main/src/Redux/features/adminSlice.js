import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  adminId: null,
  adminData: null,
};

const adminSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAdminId: (state, action)=>{
      state.adminId = action.payload;
    },
    setAdminStatus: (state, action)=>{
      state.status = action.payload;
    },
    setAdminData: (state, action)=>{
      state.adminData = action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.adminId = null;
      state.adminData = null;
    },
  },
});

export default adminSlice.reducer;
export const { setAdminId, setAdminStatus, setAdminData, logout } = adminSlice.actions;