import React, { useEffect, useState } from "react";
import logo from "../Assets/logo.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function DisplayQues() {
  const {id}=useParams();
  const [question,setQuestion]=useState({})
  useEffect(()=>{
    axios.get(`http://localhost:6969/api/problem/${id}`).then((response)=>{
      setQuestion(response.data)
    })
  },[])
  return (
    <div className="bg-[#01042D]  h-screen overflow-x-hidden overflow-scroll">
      <div className="justify-between flex border-b-2  border-b-[#707070]">
        <Link to="/contest">
          <img
            src={logo}
            className="px-3 h-12 py-2 cursor-pointer hover:scale-105 duration-300 "
          />
        </Link>
        <p className="text-[#F59837] pt-12 p-6 text-2xl cursor-pointer">
          rishika_g31
        </p>
      </div>
      <div className=" rounded-lg justify-start gap-10 flex mx-8 mt-10 px-6 py-2 bg-[#282D36] text-[#F59837] text-[24px]">
        <Link to="/contest">
          <p className="cursor-pointer">Problems</p>
        </Link>
        <Link to={`/submitques/${id}`}>
          <p className="cursor-pointer">Submit</p>
        </Link>
        <Link to="/leaderboard">
          <p className="cursor-pointer">Leaderboard</p>
        </Link>
        <Link to="/submissions">
        </Link>
        <Link to="/submissions">
          <p className="cursor-pointer">My Submissions</p>
        </Link>
      </div>
      <div className=" p-4 mt-6">
        <p className="text-4xl text-[#D68536] font-bold text-center">
          {question.title}
        </p>
        <div className="text-2xl text-gray-300 pt-4 px-10">
          <p>
            {question.description}
          </p>

          {/* sample */}

          <div className="pt-8">
            <p className="text-3xl font-semibold">Example 1:</p>
            <div className="rounded-lg grid grid-cols-2 divide-x mt-4 p-3 bg-[#282D36] w-1/2">
              <div className=" border-r-2 border-r-gray-500 flex flex-col">
                <p className=" border-b-2 border-b-gray-500 pb-2">Input</p>
                <p className="pt-4">24 54 29 12 31</p>
              </div>
              <div className="">
                <p className="pl-4 border-b-2 border-b-gray-500 pb-2">Output</p>
                <p className="pl-4 pt-4">24</p>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <p className="text-3xl font-semibold">Example 1:</p>
            <div className="rounded-lg grid grid-cols-2 divide-x mt-4 p-3 bg-[#282D36] w-1/2">
              <div className=" border-r-2 border-r-gray-500 flex flex-col">
                <p className=" border-b-2 border-b-gray-500 pb-2">Input</p>
                <p className="pt-4">24 54 29 12 31</p>
              </div>
              <div className="">
                <p className="pl-4 border-b-2 border-b-gray-500 pb-2">Output</p>
                <p className="pl-4 pt-4">24</p>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <p className="text-3xl font-semibold">Example 1:</p>
            <div className="rounded-lg grid grid-cols-2 divide-x mt-4 p-3 bg-[#282D36] w-1/2">
              <div className=" border-r-2 border-r-gray-500 flex flex-col">
                <p className=" border-b-2 border-b-gray-500 pb-2">Input</p>
                <p className="pt-4">24 54 29 12 31</p>
              </div>
              <div className="">
                <p className="pl-4 border-b-2 border-b-gray-500 pb-2">Output</p>
                <p className="pl-4 pt-4">24</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayQues;
