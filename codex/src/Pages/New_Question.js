import React,{useState} from 'react'

const New_Question = () => {
  const [title,Settitle]=useState(" ");
  const [description,Setdescription]=useState(" ");
  const [difficulty,Setdifficulty]=useState(" ");
  const [timelimit,Settimelimit]=useState(" ");
  const [memorylimit,Setmemorylimit]=useState(" ");
  const [points,Setpoints]=useState(" ");
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
          className="bg-[#22243E] w-[80%] h-12 border-[1px] border-[#F59837] px-2 text-[#a2a2a2]"
          placeholder="Write Your Problem Statement"
          required
          onChange={(e) => Settitle(e.target.value)}
        />
      </div>
      <div>
        <div className="text-[#F59837] font-semibold text-2xl mb-1">
          Difficulty*
        </div>
        <input
          className="bg-[#22243E] w-[80%] h-12 border-[1px] border-[#F59837] px-2 text-[#a2a2a2]"
          placeholder="Set Difficulty"
          required
          type="number"
          onChange={(e) => Setdifficulty(e.target.value)}
        />
      </div>
      <div>
        <div className="text-[#F59837] font-semibold text-2xl mb-1">
          Time Limit*
        </div>
        <input
          className="bg-[#22243E] w-[80%] h-12 border-[1px] border-[#F59837] px-2 text-[#a2a2a2]"
          placeholder="Give Input as No. of Seconds"
          type="number"
          required
          onChange={(e) => Settimelimit(e.target.value)}
        />
      </div>
      <div>
        <div className="text-[#F59837] font-semibold text-2xl mb-1">
          Memory Limit*
        </div>
        <input
          className="bg-[#22243E] w-[80%] h-12 border-[1px] border-[#F59837] px-2 text-[#a2a2a2]"
          placeholder="Give Input as No. of MB"
          type="number"
          required
          onChange={(e) => Setmemorylimit(e.target.value)}
        />
      </div>
      <div>
        <div className="text-[#F59837] font-semibold text-2xl mb-1">
          Points*
        </div>
        <input
          className="bg-[#22243E] w-[80%] h-12 border-[1px] border-[#F59837] px-2 text-[#a2a2a2]"
          placeholder="Set Points"
          type="number"
          required
          onChange={(e) => Setpoints(e.target.value)}
        />
      </div>
    </div>
  );
}

export default New_Question
