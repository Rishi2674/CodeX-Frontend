import React, { useContext, useEffect, useState } from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import axios from "axios"
import { ContestContext } from "./ContestContextProvider";

const Leaderboard = () => {
  const [leaderboard,setLeaderbaord]=useState([]);
  const [contest,setContest] = useContext(ContestContext);
  useEffect(()=>{
    axios.get("http://localhost:6969/api/leaderboard/").then(response=>{
      setLeaderbaord(response.data.leaderboard)
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
          Hack The interview
        </div>
      </div>
      <div className=" p-4 mt-6">
        <p className="text-5xl text-gray-300 font-semibold text-center">
          Leaderboard
        </p>
        {/* 


      search */}
        <div className="mx-8 my-3 mt-8 flex justify-center items-center">
          <input
            type="text"
            className="h-10 placeholder:text-gray-300 rounded-2xl px-4 bg-[#1B243C] text-gray-300 w-full"
            placeholder="🔍 Search By Name"
          />
        </div>

        {/* tabel */}
        <div className="flex items-center justify-center mt-8 font-medium  ">
          <div className="flex justify-center  rounded-lg p-1 bg-[#A55A0B] w-11/12  md:mt-2">
            <div className="w-full text-gray-100 border-r-[1px] p-2 md:text-[20px] sm:text-[15px] text-[13px]">
              <div className="flex justify-center">
                <p>Rank </p>
              </div>
            </div>
            <div className="w-full text-gray-100 border-r-[1px]  p-2 md:text-[20px] sm:text-[15px] text-[13px]">
              <div className="flex justify-center">
                <p>Name</p>
              </div>
            </div>
            <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
              <div className="flex justify-center">
                <p>Total score </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-80 overflow-scroll overflow-x-hidden mt-4">
          {/* table */
          
          leaderboard.map((entry,index)=>(
          <div className="flex items-center justify-center mt-1  ">
            <div className="flex justify-center  rounded-lg p-1  bg-[#1B243C] w-11/12  md:mt-2">
              <div className="w-full text-gray-100 border-r-[1px] p-2 md:text-[20px] sm:text-[15px] text-[13px]">
                <div className="flex justify-center">
                  <p>{index+1}</p>
                </div>
              </div>
              <div className="w-full text-gray-100 border-r-[1px]  p-2 md:text-[20px] sm:text-[15px] text-[13px]">
                <div className="flex justify-center">
                  <p>{entry.username}</p>
                </div>
              </div>
              <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                <div className="flex justify-center">
                  <p>{entry.currentPoints} </p>
                </div>
              </div>
            </div>
          </div>
    ))}
          
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
