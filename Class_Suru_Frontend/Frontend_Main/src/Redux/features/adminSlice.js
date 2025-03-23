import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  adminEmail: null,
  adminData: null,
  adminToken: null,
};

const adminSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAdminEmail: (state, action)=>{
      state.adminEmail = action.payload;
    },
    setAdminStatus: (state, action)=>{
      state.status = action.payload;
    },
    setAdminData: (state, action)=>{
      state.adminData = action.payload;
    },
    setAdminToken: (state, action)=>{
      state.adminToken = action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.adminEmail = null;
      state.adminData = null;
    },
  },
});

export default adminSlice.reducer;
export const { setAdminEmail, setAdminStatus, setAdminData, logout, setAdminToken } = adminSlice.actions;