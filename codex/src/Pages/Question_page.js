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
  const [title, Settitle] = useState(" ");
  const [description, Setdescription] = useState(" ");
  const [difficulty, Setdifficulty] = useState(0);
  const [timelimit, Settimelimit] = useState(0);
  const [memorylimit, Setmemorylimit] = useState(0);
  const [points, Setpoints] = useState(0);
  const SetQuestion = (event)=>{
    event.preventDefault();
    Setdifficulty(parseInt(difficulty));
    Settimelimit(parseInt(timelimit));
    Setmemorylimit(parseInt(memorylimit));
    Setpoints(parseInt(points));
    const body = {
        title:title,
        description:description,
        difficulty:difficulty,
        timeLimit:timelimit,
        memoryLimit:memorylimit,
        points:points,
      }
      const token = localStorage.getItem("jwt");
      console.log(token);
      console.log(body);
      fetch("http://localhost:6969/api/problem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          authorization: `${token}`,
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("okay")
          console.log(res);
          console.log(res.success);
          if(res.success===true){
            console.log("okay11");
            plusOne();
          }else{
            console.log("11");
          }
          // window.location.href = "/otp";
          // history.push('/otp')
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
            <form className="my-3 h-full" onSubmit={SetQuestion}>
              <div className="bg-[#01042D] flex flex-col justify-around h-full">
                <div>
                  <div className="text-[#F59837] font-semibold text-2xl mb-1">
                    Title*
                  </div>
                  <input
                    className="bg-[#22243E] w-[80%] h-12 border-[1px] border-[#F59837] px-2 text-[#a2a2a2]"
                    placeholder="Pick A Title"
                    required
                    onChange={(e) => Settitle(parseInt(e.target.value))}
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
                    onChange={(e) => Setdescription(parseInt(e.target.value))}
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
                    onChange={(e) => Setdifficulty(parseInt(e.target.value))}
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
                    onChange={(e) => Settimelimit(parseInt(e.target.value))}
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
                    onChange={(e) => Setmemorylimit(parseInt(e.target.value))}
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
                    onChange={(e) => Setpoints(parseInt(e.target.value))}
                  />
                </div>
              </div>
              <div>
                <button
                  className="bg-[#22243E] text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837]"
                  
                >
                  NEXT
                </button>
              </div>
            </form>
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
              <Test_cases />
              <div className="flex gap-4">
                <button
                  className="bg-[#22243E] text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837]"
                  onClick={minusOne}
                >
                  BACK
                </button>
                <button className="bg-[#22243E] text-[#F59837] px-9 py-1 rounded-md border-[1px] border-[#F59837]">
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
