import React from "react";
import logo from "../Assets/logo.png";
import { FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";
const SubmitQues = () => {
  return (
    <div className="bg-[#01042D] h-screen">
      <div>
        <Link to="/question">
          <img
            src={logo}
            className="px-3 h-12 py-2 cursor-pointer hover:scale-105 duration-300 "
          />
        </Link>
      </div>
      <div className="text-5xl text-[#D68536] font-bold p-4 border-b-[1px] border-b-[#707070]">
        Hack The Interview V
      </div>
      <div className="flex pt-8 px-4 justify-between">
        <div className="text-3xl font-bold text-gray-300 ">The XOR Problem</div>
        <button className=" text-[#F59837]  gap-2 flex items-center justify-center font-medium border-[#F59837] border-[1px] w-[250px] rounded-lg p-1 hover:scale-110 duration-300 hover:bg-[#22243E] mr-8">
          <div className="text-2xl">
            <FiUpload />
          </div>
          <div className="text-xl">Upload File</div>
        </button>
      </div>
      <div className="text-2xl text-gray-300 px-4 pt-10 ">Source code :</div>
      <div className="m-4">
        <textarea
          placeholder="// Write your code here"
          class="block p-4 text-xl placeholder:text-[#B49372] bg-[#22243E] w-2/3 rounded-lg h-[430px] border-[#F59837] border-[1px] text-[#B49372]"
        ></textarea>
      </div>
    </div>
  );
};

export default SubmitQues;
