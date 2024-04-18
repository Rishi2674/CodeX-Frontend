import React from "react";
import logo from "../Assets/logo.png";

const SubmitQues = () => {
  return (
    <div className="bg-[#01042D] h-screen">
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
      <div className="flex pt-8 px-4 justify-between">
        <div className="text-3xl font-bold text-gray-300 ">The XOR Problem</div>
        <button className=" text-[#F59837] text-2xl mr-[38rem] font-medium border-[#F59837] border-[1px] w-[250px] rounded-lg p-1 hover:scale-110 duration-300 hover:bg-[#22243E]">
          Upload
        </button>
      </div>
      <div className="text-3xl text-gray-300 px-4 pt-10 ">Source code :</div>
      <div className="m-4">
        <textarea
          placeholder="// Write your code here"
          class="block p-4 text-xl placeholder:text-[#B49372] bg-[#22243E] w-2/3 rounded-lg h-[530px] border-[#F59837] border-[1px] text-[#B49372]"
        ></textarea>
      </div>
    </div>
  );
};

export default SubmitQues;
