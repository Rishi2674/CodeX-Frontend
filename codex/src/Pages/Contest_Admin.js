import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import { MdEdit } from "react-icons/md";
import { IoCalendarClear } from "react-icons/io5";
import { FaLastfm, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ContestContext } from "./ContestContextProvider";

const Contest_Admin = () => {
  const [ifBold1, setIfBold1] = useState("D68536");
  const [ifBold2, setIfBold2] = useState("B49372");
  const [ifBold3, setIfBold3] = useState("B49372");
  const [status, setStatus] = useState("problem");
  const [contest,setContest] = useContext(ContestContext);
  const [leaderboard,setLeaderbaord]=useState([]);
  // console.log("contest",contest)

   //const contest = localStorage.getItem("contestdetails")
console.log("contest",contest)


  const handleProblemChange = () => {
    setIfBold1("D68536");
    setIfBold2("B49372");
    setIfBold3("B49372");
    setStatus("problem");
  };

  const handleGuidelineChange = () => {
    setIfBold2("D68536");
    setIfBold1("B49372");
    setIfBold3("B49372");
    setStatus("guidelines");
  };

  const handleLeaderboardChange = () => {
    setIfBold3("D68536");
    setIfBold1("B49372");
    setIfBold2("B49372");
    setStatus("leaderboard");
  };

  return (
    <div className="bg-[#01042D] h-screen">
      {/* Logo start */}
      <div>
        <img
          src={logo}
          className="px-3 h-12 py-2   cursor-pointer hover:scale-105 duration-300 "
        />
      </div>
      {/* Edit Details option */}
      <div className="flex justify-end   border-b-[1px] border-b-[#a2a2a2]">
        <div className=" text-base flex text-[#D68536]  p-3  gap-3 items-center cursor-pointer">
          <div>Edit Details </div>
          <div className="text-xl">
            <MdEdit />
          </div>
        </div>
      </div>
      {/* Heading */}
      <div className="flex justify-between   items-center p-3 mt-6">
        <div className="text-[#D68536] text-4xl font-bold">
          {contest.title}
        </div>
        <div className="text-[#B49372] text-2xl font-semibold ">
          {contest.date.split('T')[0]}
        </div>
      </div>
      {/* Date and Calender Time */}
      <div className="flex    items-center px-3 ">
        <div className="text-[#D68536] text-4xl font-bold">
          <IoCalendarClear />
        </div>
        <div className="text-[#B49372] text-2xl font-bold ml-2">{contest.date.split('T')[0]}</div>
      </div>
      {/* Start and End time */}
      <div className="p-3 flex   items-center gap-10 mt-4">
        <div className="flex items-center">
          <div className="text-[#D68536] text-lg font-bold">Start Time-</div>
          <div className="text-[#B49372] text-lg font-bold">{contest.startTime.split('T')[1].split('.')[0]}</div>
        </div>
        <div className="flex items-center">
          <div className="text-[#D68536] text-lg font-bold">End Time-</div>
          <div className="text-[#B49372] text-lg font-bold">{contest.endTime.split('T')[1].split('.')[0]}</div>
        </div>
      </div>
      {/* Main section start */}

      <div className="p-3 flex mt-3   items-center w-2/3 justify-between">
        <button onClick={handleProblemChange}>
          <div className={`text-lg font-bold text-[#${ifBold1}]`}>
            Set Problems
          </div>
        </button>
        <button onClick={handleGuidelineChange}>
          <div className={`text-lg font-bold text-[#${ifBold2}]`}>
            View Guidelines
          </div>
        </button>
        <button onClick={handleLeaderboardChange}>
          <div className={`text-lg font-bold text-[#${ifBold3}]`}>
            LeaderBoard
          </div>
        </button>
      </div>
      <hr className=" text-[#B49372]" />
      {/* Section Palette */}
      {status === "problem" ? (
        // problem section start
        <div className="p-3">
          {/* add problem button */}
          <Link to="/choose">
            <button className=" bg-[#B64320] rounded-md mt-3 hover:scale-105 duration-300 mx-3">
              <div className="flex items-center px-3 py-1 gap-1">
                <div className="text-[#D6D6D7] text-base">
                  {" "}
                  <FaPlus />{" "}
                </div>
                <div className="text-[#D6D6D7] text-base">Add Problem</div>
              </div>
            </button>
          </Link>
          {/* view questions option */}
          <div className="flex-col h-[300px] overflow-scroll mt-3 overflow-x-hidden">
            {/* each questio card */}
            <div className="w-2/3 h-[7.5rem] bg-[#282D36]  rounded-lg mt-2 mx-3">
              <div className="text-[#DA8D41] text-2xl p-5 font-bold">
                New keyboard
              </div>

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
                  <button className="border-[1px] border-[#B64320] flex justify-center  rounded-lg py-1 px-3 hover:scale-105 duration-300 w-[10rem]">
                    <div className="text-[#aaaaaa]  ">Edit </div>
                  </button>
                </div>
              </div>
            </div>
            {/* question end */}
            {/* each questio card */}
            <div className="w-2/3 h-[7.5rem] bg-[#282D36]  rounded-lg mt-3 mx-3">
              <div className="text-[#DA8D41] text-2xl p-5 font-bold">
                New keyboard
              </div>

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
                  <button className="border-[1px] border-[#B64320] flex justify-center  rounded-lg py-1 px-3 hover:scale-105 duration-300 w-[10rem]">
                    <div className="text-[#aaaaaa]  ">Edit </div>
                  </button>
                </div>
              </div>
            </div>
            {/* question end */}
            {/* each questio card */}
            {/* mcq */}
            <div className="w-2/3 h-[7.5rem] bg-[#282D36]  rounded-lg mt-3 mx-3">
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
                  <button className="border-[1px] border-[#B64320] flex justify-center  rounded-lg py-1 px-3 hover:scale-105 duration-300 w-[10rem]">
                    <div className="text-[#aaaaaa]  ">Edit </div>
                  </button>
                </div>
              </div>
            </div>
            {/* mcq */}
            {/* mcq */}
            <div className="w-2/3 h-[7.5rem] bg-[#282D36]  rounded-lg mt-3 mx-3">
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
                  <button className="border-[1px] border-[#B64320] flex justify-center  rounded-lg py-1 px-3 hover:scale-105 duration-300 w-[10rem]">
                    <div className="text-[#aaaaaa]  ">Edit </div>
                  </button>
                </div>
              </div>
            </div>
            {/* mcq */}
            <div className="w-2/3 h-[7.5rem] bg-[#282D36]  rounded-lg mt-3 mx-3">
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
                  <button className="border-[1px] border-[#B64320] flex justify-center  rounded-lg py-1 px-3 hover:scale-105 duration-300 w-[10rem]">
                    <div className="text-[#aaaaaa]  ">Edit </div>
                  </button>
                </div>
              </div>
            </div>
            {/* each questio card */}
            <div className="w-2/3 h-[7.5rem] bg-[#282D36]  rounded-lg mt-3 mx-3">
              <div className="text-[#DA8D41] text-2xl p-5 font-bold">
                New keyboard
              </div>

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
                  <button className="border-[1px] border-[#B64320] flex justify-center  rounded-lg py-1 px-3 hover:scale-105 duration-300 w-[10rem]">
                    <div className="text-[#aaaaaa]  ">Edit </div>
                  </button>
                </div>
              </div>
            </div>
            {/* question end */}
          </div>
        </div>
      ) : status === "guidelines" ? (
        // guidelines section start
        <div className>
          {/* edit guidelines button */}
          <div className="flex justify-end">
            <div className=" text-base flex text-[#D68536]  p-3  gap-3 items-center cursor-pointer">
              <div>Edit Guidelines </div>
              <div className="text-xl">
                <MdEdit />
              </div>
            </div>
          </div>
          {/* guidelines button */}
          <div className="text-[#B49372] p-4 font-semibold text-xl">
            <div>The registration confirms that you:</div>
            {contest.guidelines}

            {/* <div className="mt-4">* have read the contest rules</div>
            <div className="mt-1">* will not violate the rules</div>
            <div className="mt-1">
              * will not communicate with other participants, use another
              person's code for solutions/generators, share ideas of solutions
              and hacks
            </div>
            <div className="mt-1">
              * will not attempt to deliberately destabilize the testing process
              and try to hack the contest system in any form
            </div>
            <div className="mt-1">
              * will not use multiple accounts and will take part in the contest
              using your personal and the single account.
            </div> */}
          </div>
        </div>
      ) : (
        // leaderboard section start
        <div>
          {/*search */}
          <div className="flex justify-center m-8">
            <div className=" w-2/3">
              <input
                type="text"
                className="h-10 placeholder:text-gray-300 rounded-2xl px-4 bg-[#1B243C] text-gray-300 w-full"
                placeholder="🔍 Search By Name"
              />
            </div>
          </div>
          {/* leaderboard heading start */}
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
              <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                <div className="flex justify-center">
                  <p>Last AC </p>
                </div>
              </div>
              <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                <div className="flex justify-center">
                  <p>P1 </p>
                </div>
              </div>
              <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                <div className="flex justify-center">
                  <p>P2 </p>
                </div>
              </div>
              <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                <div className="flex justify-center">
                  <p>P3 </p>
                </div>
              </div>
              <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                <div className="flex justify-center">
                  <p>P4 </p>
                </div>
              </div>
              <div className="w-full text-gray-100  p-2 md:text-[20px] sm:text-[15px] text-[13px]">
                <div className="flex justify-center">
                  <p>P5 </p>
                </div>
              </div>
            </div>
          </div>

          {/* Table entry start */}
          <div className="h-48 overflow-scroll overflow-x-hidden mt-4">
            {/* table */}
            <div className="flex items-center justify-center mt-1  ">
              <div className="flex justify-center  rounded-lg p-1  bg-[#1B243C] w-11/12  md:mt-2">
                <div className="w-full text-gray-100 border-r-[1px] p-2 md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>1100 </p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px]  p-2 md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>rishika_g31</p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>80 </p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>1:05:20</p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>+</p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>- </p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>+</p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>+</p>
                  </div>
                </div>
                <div className="w-full text-gray-100  p-2 md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>-</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ...... */}
            {/* table */}
            <div className="flex items-center justify-center mt-1  ">
              <div className="flex justify-center  rounded-lg p-1  bg-[#1B243C] w-11/12  md:mt-2">
                <div className="w-full text-gray-100 border-r-[1px] p-2 md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>1100 </p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px]  p-2 md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>rishika_g31</p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>80 </p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>1:05:20</p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>+</p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>- </p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>+</p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>+</p>
                  </div>
                </div>
                <div className="w-full text-gray-100  p-2 md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>-</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ...... */}
            {/* table */}
            <div className="flex items-center justify-center mt-1  ">
              <div className="flex justify-center  rounded-lg p-1  bg-[#1B243C] w-11/12  md:mt-2">
                <div className="w-full text-gray-100 border-r-[1px] p-2 md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>1100 </p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px]  p-2 md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>rishika_g31</p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>80 </p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>1:05:20</p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>+</p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>- </p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>+</p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>+</p>
                  </div>
                </div>
                <div className="w-full text-gray-100  p-2 md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>-</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ...... */}
            {/* table */}
            <div className="flex items-center justify-center mt-1  ">
              <div className="flex justify-center  rounded-lg p-1  bg-[#1B243C] w-11/12  md:mt-2">
                <div className="w-full text-gray-100 border-r-[1px] p-2 md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>1100 </p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px]  p-2 md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>rishika_g31</p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>80 </p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>1:05:20</p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>+</p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>- </p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>+</p>
                  </div>
                </div>
                <div className="w-full text-gray-100 border-r-[1px] p-2  md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>+</p>
                  </div>
                </div>
                <div className="w-full text-gray-100  p-2 md:text-[20px] sm:text-[15px] text-[13px]">
                  <div className="flex justify-center">
                    <p>-</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ...... */}
          </div>
        </div>
      )}
      {/*  */}
    </div>
  );
};

export default Contest_Admin;
