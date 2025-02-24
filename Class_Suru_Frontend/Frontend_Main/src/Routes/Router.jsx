import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import {
  Error,
  Home,
  Login,
  Dashboard,
  Questions,
  Register,
  Exam,
} from "../Pages";
import Subjects from "../Pages/Exam/Subjects";
import Tests from "../Pages/Exam/Tests";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/exam" element={<Exam />} />
      <Route path="/exam/:examName" element={<Subjects />} />
      <Route path="/exam/:examName/:subjectName" element={<Tests />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

export default router;
