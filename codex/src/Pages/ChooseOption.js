import React from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import coding from "../Assets/coding.png";
const ChooseOption = () => {
  return (
    <div className="bg-[#01042D] h-screen ">
      <div>
        <Link to="/admin">
          <img
            src={logo}
            className="px-3 h-12 py-2 cursor-pointer hover:scale-105 duration-300 "
          />
        </Link>
      </div>
      <div className=" mt-24 ">
        <div className="ml-[32rem]">
          <Link to="/ques">
            <button className="text-[#F59837] w-[40%] bg-[#22243E] h-16 px-9 py-1 rounded-md border-[1px] border-[#F59837] hover:scale-110 duration-300 hover:bg-[#22243E] mr-40 mx-3 mt-8">
              Coding Type
            </button>
          </Link>
          <Link to="/mcq">
            <button className="text-[#F59837] w-[40%] bg-[#22243E] h-16 px-9 py-1 rounded-md border-[1px] border-[#F59837] hover:scale-110 duration-300 hover:bg-[#22243E] mr-40 mx-3 mt-10">
              MCQ Type
            </button>{" "}
          </Link>
          <Link to="/essay">
            <button className="text-[#F59837] w-[40%] bg-[#22243E] h-16 px-9 py-1 rounded-md border-[1px] border-[#F59837] hover:scale-110 duration-300 hover:bg-[#22243E] mr-40 mx-3 mt-10">
              Essay Type
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseOption;
