import React from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
const InputMcq = () => {
  return (
    <div className="bg-[#01042D] h-screen pb-4 ">
      <div>
        <img
          src={logo}
          className="px-3 h-12 py-2 cursor-pointer hover:scale-105 duration-300 "
        />
      </div>

      <div className="">
        <div className="text-3xl text-[#cfcfcf] font-semibold p-3 border-b-2 border-b-[#707070]">
          MCQ Type
        </div>

        <div className="text-[#F59837] text-2xl mb-1 mt-4 px-3">Max Point*</div>
        <input
          className="bg-[#22243E] w-[20%] h-12 border-[1px] border-[#F59837] px-3 text-[#a2a2a2] mt-1 mx-3 "
          placeholder="50"
          required
        />
      </div>
      <div className="px-3">
        <div className="text-[#a9a9a9] text-xl mb-1 mt-4 ">
          Type Your MCQ Question Here:
        </div>
        <input
          className="bg-[#22243E] w-[80%] h-20 border-[1px] border-[#F59837]  text-[#a2a2a2] mt-1 "
          placeholder=""
          required
        />
      </div>

      <div className="px-3">
        <div className="text-[#F59837] text-2xl mb-1 mt-4">Options*</div>
        <div className="flex w-[60%]">
          <input
            className="bg-[#22243E] w-[40%] h-12 border-[1px] border-[#F59837]  text-[#a2a2a2] mt-1 px-2"
            placeholder="Option A"
            required
          />
          <input
            className="bg-[#22243E] w-[40%] h-12 border-[1px] border-[#F59837]  text-[#a2a2a2] mt-1 ml-12 px-2"
            placeholder="Option B"
            required
          />
        </div>
        <div className="flex w-[60%] mt-4">
          <input
            className="bg-[#22243E] w-[40%] h-12 border-[1px] border-[#F59837]  text-[#a2a2a2] mt-1 px-2"
            placeholder="Option C"
            required
          />
          <input
            className="bg-[#22243E] w-[40%] h-12 border-[1px] border-[#F59837]  text-[#a2a2a2] mt-1 ml-12 px-2"
            placeholder="Option D"
            required
          />
        </div>
      </div>

      <div className="px-3">
        <div className="text-[#F59837] text-2xl mb-1 mt-4">Correct Answer*</div>

        <input
          className="bg-[#22243E] w-[25%] h-12 border-[1px] border-[#F59837]  text-[#a2a2a2] mt-1 px-2"
          placeholder="Option A"
          required
        />
      </div>

      <button className="text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837] hover:scale-110 duration-300 hover:bg-[#22243E] mr-40 mx-3 mt-6">
        Submit
      </button>
    </div>
  );
};

export default InputMcq;
