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
import {BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    
    <Routes>
      <Route exact path = '/' element = {<LandingPage/>} />
      <Route exact path = '/login' element = {<Login />} />
      <Route exact path = '/register' element = {<SignUp/>}/>
    </Routes>
    </>
  );
}

export default App;
