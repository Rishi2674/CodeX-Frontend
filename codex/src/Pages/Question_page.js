import React, { useState } from "react";
import Progress_Bar from "./Progress_bar";
import logo from "../Assets/logo.png";
import New_Question from "./New_Question";
import Examples from "./Examples";
import Test_cases from "./Test_cases";

const Question_page = () => {
  const [size, setSize] = useState(25);
  const [page, SetPage] = useState(0);
  const plusOne = () => {
    SetPage((page + 1) % 3);
    setSize(size+25);
  };
  const minusOne = () => {
    SetPage((page - 1) % 3);
    setSize(size-25);
  };
  return (
    <div className="flex flex-col bg-[#01042D] w-full h-screen">
      <div>
        <img
          src={logo}
          className="px-3 h-12 py-2   cursor-pointer hover:scale-105 duration-300 "
        />
      </div>
      <div className="mx-3">
        <div className="flex justify-evenly mb-1 ml-3 text-lg text-[#A2A2A2]">
          <p className="text-[#F59837]">Question</p>
          <p className={page >= 1 ? "text-[#F59837]" : "text-[#a2a2a2]"}>
            Examples
          </p>
          <p className={page >= 2 ? "text-[#F59837]" : "text-[#a2a2a2]"}>
            Test Cases
          </p>
        </div>
      </div>
      <div>
        {page === 0 ? (
          <div className="my-3 mx-3 flex flex-col h-full">
            <Progress_Bar completed={size} />
            <div className="my-3 h-full">
              <New_Question />
              <div>
                <button
                  className="bg-[#22243E] text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837]"
                  onClick={plusOne}
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {page === 1 ? (
          <div className="my-3 mx-3 flex flex-col h-full">
            <Progress_Bar completed={size} />
            <div className="my-3 h-full flex flex-col justify-between">
              <Examples />
              <div className="flex gap-4">
                <button
                  className="bg-[#22243E] text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837]"
                  onClick={minusOne}
                >
                  BACK
                </button>
                <button
                  className="bg-[#22243E] text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837]"
                  onClick={plusOne}
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {page === 2 ? (
          <div className="my-3 mx-3 flex flex-col h-full">
            <Progress_Bar completed={size} />
            <div className="my-3 h-full flex flex-col justify-between">
              <Test_cases/>
              <div className="flex gap-4">
                <button
                  className="bg-[#22243E] text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837]"
                  onClick={minusOne}
                >
                  BACK
                </button>
                <button
                  className="bg-[#22243E] text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837]"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Question_page;
