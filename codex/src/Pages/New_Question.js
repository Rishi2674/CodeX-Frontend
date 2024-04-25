import React from 'react'

const New_Question = () => {
  return (
    <div className="bg-[#01042D] flex flex-col justify-around h-full">
      <div>
        <div className="text-[#F59837] font-semibold text-2xl mb-1">Title*</div>
        <input
          className="bg-[#22243E] w-[80%] h-12 border-[1px] border-[#F59837] px-2 text-[#a2a2a2]"
          placeholder="Pick A Title"
          required
        />
      </div>
      <div>
        <div className="text-[#F59837] font-semibold text-2xl mb-1">
          Description*
        </div>
        <input
          className="bg-[#22243E] w-[80%] h-[24rem] border-[1px] border-[#F59837] px-2 text-[#a2a2a2]"
          placeholder="Write Your Problem Statement"
          required
        />
      </div>
    </div>
  );
}

export default New_Question
