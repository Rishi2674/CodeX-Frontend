import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { FaHandHolding } from "react-icons/fa";

const CreateContest = () => {

  const [name,setName] = useState("");
  const [date,setDate] = useState(Date.now());
  const [duration, setDuration] = useState("");
  const [starttime, setStarttime] = useState("");
  const [endtime, setEndtime] = useState("");
  const [guidelines, setGuidelines] = useState("");

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const data = {
      title: name,
      guidelines: guidelines,
      startTime: starttime,
      endTime: endtime,
      date: date,
    }
    const token= localStorage.getItem("jwt");
     try {
      await fetch('http://localhost:6969/api/contest',
      {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/json;charset=utf-8',
              'authorization' : `${token}`
          },
          body : JSON.stringify(data),
      })
      .then(res=>res.json()).then((result)=>{
          console.log(result);
          window.location.replace('/admin')
      })
     } catch (error) {
        console.log("error",error)
     }
  }
  


  return (
    <div className="bg-[#01042D]">
      {/* Logo start */}
      <div>
        <img
          src={logo}
          className="px-4 h-12 py-2 cursor-pointer hover:scale-105 duration-300 "
        />
      </div>
      {/* Create Contest Header */}
      <div className="mt-3">
        <div className="text-5xl text-[#D68536] font-bold p-4 border-b-2 border-b-[#707070]">
          CREATE CONTEST
        </div>
      </div>
      {/* Main content start */}
      <form onSubmit={handleSubmit} >
      <div className="p-4 mt-8">
        {/* COontest Name */}
        <div className="flex-col">
          <div className="text-[#D68536] font-semibold text-xl">
            Contest name*
          </div>
          <div className="mt-2">
            <input
              type="text"
              required
              onChange={(e)=>{
                setName(e.target.value)
              }}
              placeholder="Enter the name of contest"
              className=" placeholder:text-[#B49372] placeholder:text-sm placeholder:ml-2 bg-[#22243E] w-2/3 rounded-lg p-2  border-none text-[#B49372] h-10"
            ></input>
          </div>
        </div>
        {/* date and duration */}
        <div className="flex mt-12">
          {/* date */}
          <div className="flex-col w-1/4">
            <div className="text-[#D68536] font-semibold text-xl">
              Set Date*
            </div>
            <div className="mt-2">
              <input
                type="date"
                placeholder=" 📅 08/05/24"
                required
                onChange={(e)=>{
                  setDate(e.target.value)
                }}
                className=" placeholder:text-[#B49372] placeholder:text-sm placeholder:ml-2 bg-[#22243E] w-full rounded-lg p-2 border-none text-[#B49372] h-10"
              ></input>
            </div>
          </div>
          {/* duration */}
          <div className="flex-col ml-[100px] w-1/4">
            <div className="text-[#D68536] font-semibold text-xl">
              Set Duration*
            </div>
            <div className="mt-2">
              <input
                type="time"
                onChange={(e)=>{
                  setDuration(e.target.value)
                }}
                placeholder="⌛ 2 hours 45 minutes"
                className=" placeholder:text-[#B49372] placeholder:text-sm placeholder:ml-2 bg-[#22243E] w-full rounded-lg p-2 border-none text-[#B49372] h-10"
              ></input>
            </div>
          </div>
        </div>
        {/* start and end time */}
        <div className="flex mt-12">
          {/* start time */}
          <div className="flex-col w-1/4">
            <div className="text-[#D68536] font-semibold text-xl">
              Start Time*
            </div>
            <div className="mt-2">
              <input
                type="time"
                required
                onChange={(e)=>{
                  setStarttime(e.target.value)
                }}
                placeholder="Enter the name of contest here"
                className=" placeholder:text-[#B49372] placeholder:text-sm placeholder:ml-2 bg-[#22243E] w-full rounded-lg p-2 border-none text-[#B49372] h-10"
              ></input>
            </div>
          </div>
          {/* end time */}
          <div className="flex-col ml-[100px] w-1/4">
            <div className="text-[#D68536] font-semibold text-xl">
              End Time*
            </div>
            <div className="mt-2">
              <input
              required
                type="time"
                onChange={(e)=>{
                  setEndtime(e.target.value)
                }}
                placeholder="Enter the name of contest here"
                className=" placeholder:text-[#B49372] placeholder:text-sm placeholder:ml-2 bg-[#22243E] w-full rounded-lg p-2 border-none text-[#B49372] h-10"
              ></input>
            </div>
          </div>
        </div>
        {/* contest guidelines */}
        <div className="flex-col mt-12">
          <div className="text-[#D68536] font-semibold text-xl">
            Contest Guidelines*
          </div>
          <div className="mt-2">
            <input
              type="text"
              required
              onChange={(e)=>{
                setEndtime(e.target.value)
              }}
              placeholder="Enter the guidelines for contest"
              className=" placeholder:text-[#B49372] placeholder:text-sm placeholder:ml-2 bg-[#22243E] w-2/3 rounded-lg p-2 border-none text-[#B49372] h-10"
            ></input>
          </div>
        </div>
        {/* Create and Cancel buttons */}
        <div className="flex mt-12 gap-8">
          <button 
          type="submit"
          className="text-[#F59837] text-2xl font-medium border-[#F59837] border-[1px] w-[250px] rounded-lg p-1 hover:scale-110 duration-300 hover:bg-[#22243E]">
            CREATE
          </button>
          <button className="text-[#F59837] text-2xl font-medium border-[#F59837] border-[1px] w-[250px] rounded-lg p-1 hover:scale-110 duration-300 hover:bg-[#22243E]">
            CANCEL
          </button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default CreateContest;
