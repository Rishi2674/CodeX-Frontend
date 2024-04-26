import React, { useState } from "react";
import Test_case_card from "./Test_case_card";
import { Link } from "react-router-dom";
const Test_cases = () => {
  const [showMyModel, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="text-[#F59837] font-semibold text-2xl mb-1">
          Test Cases*
        </div>
        <p className="text-[#a2a2a2]">What Does Input/Output Look Like?</p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => setShowMyModal(true)}
          className="bg-[#22243E] text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837]"
        >
          Test case 1
        </button>
        <button
          onClick={() => setShowMyModal(true)}
          className="bg-[#22243E] text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837]"
        >
          Test case 2
        </button>
        <button
          onClick={() => setShowMyModal(true)}
          className="bg-[#22243E] text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837]"
        >
          Test case 3
        </button>
        <button
          onClick={() => setShowMyModal(true)}
          className="bg-[#22243E] text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837]"
        >
          Test case 4
        </button>
        <button
          onClick={() => setShowMyModal(true)}
          className="bg-[#22243E] text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837]"
        >
          Test case 5
        </button>
      </div>
      {/* <Example_card onClose={handleOnClose} visible={showMyModel} /> */}
      <Test_case_card onClose={handleOnClose} visible={showMyModel} />
    </div>
  );
};

export default Test_cases;
