import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import adminSlice from "../features/adminSlice";


const rootReducer = combineReducers({
    user: userSlice,
    admin: adminSlice
})

export default rootReducer;