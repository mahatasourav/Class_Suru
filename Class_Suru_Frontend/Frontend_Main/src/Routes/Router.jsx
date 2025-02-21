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
  Profile,
  Questions,
  Register,
  Exam,
} from "../Pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/exam" element={<Exam />} />
      <Route path="/dashboard" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

export default router;
