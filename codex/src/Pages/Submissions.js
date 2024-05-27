import React, { useContext, useEffect, useState } from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { ContestContext } from "./ContestContextProvider";

const Submissions = () => {
  const [contest,setContest] = useContext(ContestContext);
  const [submissions,setSubmissions]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:6969/api/submission").then(response=>{
      setSubmissions(response.data)
      console.log(response.data)
    })
  })
  return (
    <div className="bg-[#01042D] h-screen ">
      <div>
        <Link to="/contest">
          <img
            src={logo}
            className="px-3 h-12 py-2 cursor-pointer hover:scale-105 duration-300 "
          />
        </Link>
      </div>

      <div className="mt-3">
        <div className="text-5xl text-[#D68536] font-bold p-4 border-b-2 border-b-[#707070]">
          {contest.title}
        </div>
      </div>
      <div className=" p-4 mt-6">
        <p className="text-5xl text-gray-300 font-semibold text-center">
          Submissions
        </p>

        <div className="flex items-center justify-center mt-8 font-medium  ">
          <div className="flex justify-center  rounded-lg p-1 bg-[#A55A0B] w-11/12  md:mt-2">
            <div className="w-full text-gray-100 border-r-[1px] p-2 md:text-[20px] sm:text-[15px] text-[13px]">
              <div className="flex justify-center">
                <p>Problem </p>
              </div>
            </div>
            <div className="w-full text-gray-100 border-r-[1px]  p-2 md:text-[20px] sm:text-[15px] text-[13px]">
              <div className="flex justify-center">
                <p>User </p>
              </div>
            </div>
            <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
              <div className="flex justify-center">
                <p>Time </p>
              </div>
            </div>
            <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
              <div className="flex justify-center">
                <p>Points </p>
              </div>
            </div>
            <div className="w-full text-gray-100  p-2 md:text-[20px] sm:text-[15px] text-[13px]">
              <div className="flex justify-center">
                <p>Status </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-80 overflow-scroll overflow-x-hidden mt-4">
        {
          submissions.map(submission=>(
            <div className="flex items-center justify-center mt-2 ">
            <div className="flex justify-center  rounded-lg p-1 bg-[#1B243C] w-11/12  md:mt-2">
              <div className="w-full text-gray-100 border-r-[1px] p-2 md:text-[20px] sm:text-[15px] text-[13px]">
                <div className="flex justify-center">
                  <p>{submission.problem.title}</p>
                </div>
              </div>
              <div className="w-full text-gray-100 border-r-[1px]  p-2 md:text-[20px] sm:text-[15px] text-[13px]">
                <div className="flex justify-center">
                  <p>{submission.user.username}</p>
                </div>
              </div>
              <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                <div className="flex justify-center">
                  <p>{submission.createdAt}</p>
                </div>
              </div>
              <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                <div className="flex justify-center">
                  <p>{submission.problem.points}</p>
                </div>
              </div>
              <div className="w-full text-gray-100  p-2 md:text-[20px] sm:text-[15px] text-[13px]">
                <div className="flex justify-center">
                  <p>{submission.result}</p>
                </div>
              </div>
            </div>
          </div>
          ))
        }
       
          
        </div>
      </div>
    </div>
  );
};

export default Submissions;
