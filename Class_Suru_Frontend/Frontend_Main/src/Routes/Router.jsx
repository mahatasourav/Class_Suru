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
  Admin,
  AdminLogin,
  Users,
  QuestionList,
} from "../Pages";
import About from "../Components/About Us/about";
import Services from "../Components/Servicess/Services";
import CoursesMainPage from "../Pages/Courses/CoursesMainPage";

import Subjects from "../Pages/Exam/Subjects";
import Tests from "../Pages/Exam/Tests";
import InstructionPage from "../Pages/Exam/InstructionPage";
import MainExamPage from "../Pages/Exam/MainExamPage";
// import ExamList from "../Pages/Admin/ExamList/ExamList";
import SubjectList from "../Pages/Admin/SubjectList/SubjectList";
import ExamNameList from "../Pages/Admin/ExamNameList/ExamNameList";
import ExamsList from "../Pages/Admin/ExamsList/ExamsList";
import CreateQuestionSet from "../Pages/Admin/CreateQuestionSet/CreateQuestionSet";
import EditQuestionSet from "../Pages/Admin/EditQuestionSet/EditQuestionSet";
import Question from "../Pages/Admin/Question/Question";
//importing Dashboard Profiles and recent exam
import DashboardRightProfile from "../Pages/Dashboard/DashboardRightProfile";
import DashboardRightRecentExam from "../Pages/Dashboard/DashboardRightRecentExam";
import EditQuestion from "../Pages/Admin/Question/EditQuestion";
import OTP from "../Pages/Admin/Login/OTP";
import AdminHome from "../Pages/Admin/AdminHome/AdminHome";
import Result from "../Pages/Exam/Result";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/questions" element={<Questions />} />
      {/* Exam Routes */}
      <Route path="/exam" element={<Exam />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/courses" element={<CoursesMainPage />} />
      <Route path="/exam/:examName" element={<Subjects />} />
      <Route path="/exam/:examName/:subjectName" element={<Tests />} />
      <Route
        path="/exam/:examName/:subjectName/instruction/:examId"
        element={<InstructionPage />}
      />
      <Route
        path="/exam/:examName/:subjectName/:examId/MainExamPage"
        element={<MainExamPage />}
      />
      <Route path="/exam/result/:result_id" element={<Result />} />
      {/* Admin Routes */}
      {/* <Route path="/admin" element={<Admin />} /> */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/login/otp" element={<OTP />} />
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/admin/list" element={<ExamNameList />} />
      <Route path="/admin/list/:examName" element={<SubjectList />} />
      <Route
        path="/admin/list/:examName/:subjectName"
        element={<ExamsList />}
      />
      <Route
        path="/admin/list/:examName/:subjectName/createQuestionSet"
        element={<CreateQuestionSet />}
      />
      <Route
        path="/admin/list/:examName/:subjectName/createQuestionSet/questionlist/:examId/createQuestion"
        element={<Question />}
      />
      <Route
        path="/admin/list/:examName/:subjectName/createQuestionSet/questionlist/:examId"
        element={<QuestionList />}
      />
      <Route
        path="/admin/list/:examName/:subjectName/editQuestionSet/:examId"
        element={<EditQuestionSet />}
      />
      <Route
        path="/admin/list/:examName/:subjectName/editQuestion/:questionId"
        element={<EditQuestion />}
      />
      <Route path="/admin/users" element={<Users />} />

      {/* Error Page Routes */}
      <Route path="*" element={<Error />} />
    </Route>
  )
);

export default router;
