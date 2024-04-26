import "./App.css";
import DisplayQues from "./Pages/DisplayQues";
import Submissions from "./Pages/Submissions";
import SubmitQues from "./Pages/SubmitQues";
import Contest_Admin from "./Pages/Contest_Admin";
import CreateContest from "./Pages/CreateContest";
import Leaderboard from "./Pages/Leaderboard";
import { FiLogIn } from "react-icons/fi";
import Login from "./Pages/Login";
import UserPage from "./Pages/UserPage";
import LandingPage from "./Pages/LandingPage";
import SignUp from "./Pages/SignUp";
import { Routes, Route } from "react-router-dom";
import Mcq from "./Pages/Mcq";
import Essay from "./Pages/Essay";
import Test_case_card from "./Pages/Test_case_card";
import InputEssay from "./Pages/InputEssay";
import InputMcq from "./Pages/InputMcq";
import Question_page from "./Pages/Question_page";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/create" element={<CreateContest />} />
        <Route exact path="/admin" element={<Contest_Admin />} />
        <Route exact path="/contest" element={<UserPage />} />
        <Route path="/question/:id" element={<DisplayQues />} />
        <Route exact path="/leaderboard" element={<Leaderboard />} />
        <Route exact path="/submissions" element={<Submissions />} />
        <Route exact path="/submitques" element={<SubmitQues />} />
        <Route exact path="/mcq" element={<Mcq />} />
        <Route exact path="/essay" element={<Essay />} />
        <Route exact path="/ques" element={<Question_page/>}/>
      </Routes>
      {/* <Mcq /> */}
      {/* <UserPage /> */}
      {/* <Contest_Admin /> */}
      {/* <InputEssay /> */}
      {/* <Question_page/> */}
    </>
  );
}

export default App;
