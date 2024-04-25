import React from "react";

const Example_card = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-[#22243E] bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="bg-[#22243E] p-2 rounded h-[20rem] w-[25rem] flex flex-col justify-around">
        <div>
          <div className="text-[#F59837] font-semibold text-2xl mb-1">
            Input*
          </div>
          <input
            className="bg-[#22243E] w-[90%] mx-4 py-2 border-[1px] border-[#F59837] px-2 text-[#a2a2a2]"
            placeholder="Input"
            required
          />
        </div>
        <div>
          <div className="text-[#F59837] font-semibold text-2xl mb-1">
            Output*
          </div>
          <input
            className="bg-[#22243E] w-[90%] mx-4 py-2 border-[1px] border-[#F59837] px-2 text-[#a2a2a2]"
            placeholder="Output"
            required
          />
        </div>
        <div>
          <div className="text-[#F59837] font-semibold text-2xl mb-1">
            Description*
          </div>
          <input
            className="bg-[#22243E] w-[90%] mx-4 py-2 border-[1px] border-[#F59837] px-2 text-[#a2a2a2]"
            placeholder="Provide Description"
            required
          />
        </div>
        <div className="flex w-full justify-center">
        <button className="bg-[#22243E] text-[#F59837] px-9 py-1 w-[50%] rounded-md border-[1px] border-[#F59837] flex justify-center">
          SAVE
        </button>
        </div>
      </div>
    </div>
  );
};

export default Example_card;
