import React from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
const Essay = () => {
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
          Hack The Interview V
        </div>
      </div>
      <div className="px-3">
        <div className=" mt-8">
          <div className="text-[#c5c5c5] font-semibold text-xl mb-1 w-[80%] ">
            Consider a situation where you have to explain something to someone
            who does not know the concept and has difficulty in understanding,
            what steps did you take?
          </div>
        </div>
        <div>
          <div className="text-[#F59837] text-xl mb-1 mt-6">
            Write Your Essay Here*
          </div>
          <input
            className="bg-[#22243E] w-[80%] h-[20rem] border-[1px] border-[#F59837] px-2 text-[#a2a2a2]"
            placeholder=""
            required
          />
        </div>
      </div>

      <button className="text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837] hover:scale-110 duration-300 hover:bg-[#22243E] mr-40 mx-3 mt-4">
        Submit
      </button>
    </div>
  );
};

export default Essay;
