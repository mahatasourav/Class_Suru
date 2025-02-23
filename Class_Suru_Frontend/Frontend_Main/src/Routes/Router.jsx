import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout";
import { Error, Home, Login, Dashboard, Questions, Register, Admin, AdminLogin } from "../Pages";
import ExamList from "../Pages/Admin/ExamList/ExamList";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/questions" element={<Questions/>} />

            {/* Admin Pages */}
            <Route path="/admin" element={<Admin/>} />
            <Route path="/admin/login" element={<AdminLogin/>} />
            <Route path="/admin/examlist" element={<ExamList/>} />
            <Route path="*" element={<Error/>} />
        </Route>
    )
)

export default router;