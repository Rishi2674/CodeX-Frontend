import React, { useEffect, useState } from "react";
import logo from "../Assets/logo.png";
import { CgMenuCheese } from "react-icons/cg";
import { MdLeaderboard } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
const UserPage = () => {
  const [questions,setQuestions]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:6969/api/problem").then((response)=>{
      setQuestions(response.data)
    })
  })
  return (
    <div className="bg-[#01042D] h-screen ">
      <div>
        <img
          src={logo}
          className="px-3 h-12 py-2 cursor-pointer hover:scale-105 duration-300 "
        />
      </div>

      <div className="mt-3">
        <div className="text-5xl text-[#D68536] font-bold p-4 border-b-2 border-b-[#707070]">
          Hack The Interview V
        </div>
      </div>

      <div className=" rounded-lg justify-between flex mx-8 mt-4 px-24 py-3 bg-[#282D36] text-[#F59837] text-[24px]">
        <div className="pr-36 cursor-pointer flex border-r-2 border-b-[#302d2d]">
          Current Rank: N/A
        </div>
        <Link to="/leaderboard">
          <div className=" pr-36 cursor-pointer flex border-r-2 border-b-[#302d2d]">
            <MdLeaderboard size={25} className="mr-2 mt-1" />
            Leaderboard
          </div>
        </Link>
        <Link to="/submissions">
          <div className="cursor-pointer flex">
            <CgMenuCheese size={25} className="mr-2 mt-1" /> Submissions
          </div>
        </Link>
      </div>
      <div className="text-2xl w-2/3 mx-8 flex  mt-6 text-gray-400 font-semibold justify-between">
        <p>Challenges</p>
        <p>2hr 45mins</p>
      </div>

      <div className="flex-col h-[600px] overflow-scroll mt-3 overflow-x-hidden">
        {questions.map((question,index)=>{
          const id=question._id
          return (
          <div className="w-2/3 h-[7.5rem] bg-[#282D36]  rounded-lg mt-2 mx-8">
          <div className="text-[#DA8D41] text-2xl p-5 font-bold">
            {question.title}
          </div>

          <div className="px-6  flex w-full items-center justify-between ">
            <div className="flex justify-between w-1/2">
              <div className="text-[#aaaaaa] flex text-xs gap-1 ">
                <div>Max Score:</div>
                <div className="font-bold">{question.points}</div>
              </div>
              
            </div>
            <div className="">
              <Link to={`/question/${id}`}>
                <button className="bg-[#B64320] flex justify-center  rounded-lg py-1 px-3 hover:scale-105 duration-300 w-[10rem]">
                  <div className="text-[#aaaaaa]  ">Solve challenge </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        )})}
        
        
        {/* mcq */}
        {/* <div className="w-2/3 h-[7.5rem] bg-[#282D36]  rounded-lg mt-2 mx-8">
          <div className="text-[#DA8D41] text-2xl p-5 font-bold">MCQ 1</div>

          <div className="px-6  flex w-full items-center justify-between ">
            <div className="flex justify-between w-1/2">
              <div className="text-[#aaaaaa] flex text-xs gap-1 ">
                <div>Max Score:</div>
                <div className="font-bold">10</div>
              </div>
              <div className="text-[#aaaaaa] flex text-xs gap-1">
                <div>Success Rate: </div>
                <div className="font-bold">67.9%</div>
              </div>
            </div>
            <div className="">
              <Link to="/mcq">
                <button className="bg-[#B64320] flex justify-center  rounded-lg py-1 px-3 hover:scale-105 duration-300 w-[10rem]">
                  <div className="text-[#aaaaaa]  ">Solve challenge </div>
                </button>
              </Link>
            </div>
          </div>
        </div> */}
        {/* mcq */}
        {/* mcq */}
        {/* <div className="w-2/3 h-[7.5rem] bg-[#282D36]  rounded-lg mt-2 mx-8">
          <div className="text-[#DA8D41] text-2xl p-5 font-bold">MCQ 2</div>

          <div className="px-6  flex w-full items-center justify-between ">
            <div className="flex justify-between w-1/2">
              <div className="text-[#aaaaaa] flex text-xs gap-1 ">
                <div>Max Score:</div>
                <div className="font-bold">10</div>
              </div>
              <div className="text-[#aaaaaa] flex text-xs gap-1">
                <div>Success Rate: </div>
                <div className="font-bold">67.9%</div>
              </div>
            </div>
            <div className="">
              <Link to="/mcq">
                <button className="bg-[#B64320] flex justify-center  rounded-lg py-1 px-3 hover:scale-105 duration-300 w-[10rem]">
                  <div className="text-[#aaaaaa]  ">Solve challenge </div>
                </button>
              </Link>
            </div>
          </div>
        </div> */}
        {/* mcq */}
        {/* <div className="w-2/3 h-[7.5rem] bg-[#282D36]  rounded-lg mt-2 mx-8">
          <div className="text-[#DA8D41] text-2xl p-5 font-bold">
            Essay Type 1
          </div>

          <div className="px-6  flex w-full items-center justify-between ">
            <div className="flex justify-between w-1/2">
              <div className="text-[#aaaaaa] flex text-xs gap-1 ">
                <div>Max Score:</div>
                <div className="font-bold">40</div>
              </div>
              <div className="text-[#aaaaaa] flex text-xs gap-1">
                <div>Success Rate: </div>
                <div className="font-bold">67.9%</div>
              </div>
            </div>
            <div className="">
              <Link to="/essay">
                <button className="bg-[#B64320] flex justify-center  rounded-lg py-1 px-3 hover:scale-105 duration-300 w-[10rem]">
                  <div className="text-[#aaaaaa]  ">Solve challenge </div>
                </button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default UserPage;
