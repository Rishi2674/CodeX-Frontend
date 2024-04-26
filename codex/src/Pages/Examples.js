import React,{useState} from "react";
import Example_card from "./Example_card";

const Examples = () => {
  const [showMyModel, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="text-[#F59837] font-semibold text-2xl mb-1">
          Examples
        </div>
        <p className="text-[#a2a2a2]">
          It's Good To Provide Examples Which Will Help Users Understand Easily
        </p>
      </div>
      <div className="flex gap-4">
        <button
          className="bg-[#22243E] text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837]"
          onClick={() => setShowMyModal(true)}
        >
          Example 1
        </button>
        <button
          className="bg-[#22243E] text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837]"
          onClick={() => setShowMyModal(true)}
        >
          Example 2
        </button>
      </div>
      {/* <EditPassword onClose={handleOnClose} visible={showMyModel} /> */}
      <Example_card onClose={handleOnClose} visible={showMyModel} />
    </div>
  );
};

export default Examples;
