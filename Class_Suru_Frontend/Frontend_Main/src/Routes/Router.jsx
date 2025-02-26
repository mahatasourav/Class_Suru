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
} from "../Pages";

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
      <Route path="/exam/:examName" element={<Subjects />} />
      <Route path="/exam/:examName/:subjectName" element={<Tests />} />
      <Route
        path="/exam/:examName/:subjectName/instruction"
        element={<InstructionPage />}
      />
      <Route
        path="/exam/:examName/:subjectName/instruction/MainExamPage"
        element={<MainExamPage />}
      />
      {/* Admin Routes */}
      {/* <Route path="/admin" element={<Admin />} /> */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/list" element={<ExamNameList />} />
      <Route path="/admin/list/:examName" element={<SubjectList />} />
      <Route path="/admin/list/:examName/:subjectName" element={<ExamsList />} />
      <Route path="/admin/list/:examName/:subjectName/createQuestionSet" element={<CreateQuestionSet/>} />
      <Route path="/admin/list/:examName/:subjectName/createQuestionSet/:qid" element={<Question/>} />

      <Route path="/admin/list/:examName/:subjectName/editQuestionSet" element={<EditQuestionSet/>} />
      {/* Error Page Routes */}
      <Route path="*" element={<Error />} />
    </Route>
  )
);

export default router;
