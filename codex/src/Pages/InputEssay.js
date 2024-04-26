import React from "react";
import logo from "../Assets/logo.png";
const InputEssay = () => {
  return (
    <div className="bg-[#01042D] h-screen ">
      <div>
        <img
          src={logo}
          className="px-3 h-12 py-2 cursor-pointer hover:scale-105 duration-300 "
        />
      </div>

      <div className="mt-3">
        <div className="text-3xl text-[#cfcfcf] font-semibold p-4 border-b-2 border-b-[#707070]">
          Essay Type
        </div>

        <div className="text-[#F59837] text-2xl mb-1 mt-8 px-3">Max Point*</div>
        <input
          className="bg-[#22243E] w-[20%] h-12 border-[1px] border-[#F59837] px-3 text-[#a2a2a2] mt-4 mx-3 "
          placeholder="50"
          required
        />
      </div>

      <div className="text-[#a9a9a9] text-xl mb-1 mt-8 px-3">
        Type Your Essay Question Here:
      </div>
      <input
        className="bg-[#22243E] w-[80%] h-48 border-[1px] border-[#F59837] px-3 text-[#a2a2a2] mt-2 mx-3 "
        placeholder=""
        required
      />
      <button className="text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837] hover:scale-110 duration-300 hover:bg-[#22243E] mr-40 mx-3 mt-4">
        Submit
      </button>
    </div>
  );
};

export default InputEssay;
