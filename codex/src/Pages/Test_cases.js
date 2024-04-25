import React from "react";

const Test_cases = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="text-[#F59837] font-semibold text-2xl mb-1">
          Test Cases*
        </div>
        <p className="text-[#a2a2a2]">
          What Does Input/Output Look Like?
        </p>
      </div>
      <div className="flex gap-4">
        <button className="bg-[#22243E] text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837]">
          Test case 1
        </button>
        <button className="bg-[#22243E] text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837]">
          Test case 2
        </button>
        <button className="bg-[#22243E] text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837]">
          Test case 3
        </button>
        <button className="bg-[#22243E] text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837]">
          Test case 4
        </button>
        <button className="bg-[#22243E] text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837]">
          Test case 5
        </button>
      </div>
    </div>
  );
};

export default Test_cases;
