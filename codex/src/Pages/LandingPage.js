import React from "react";
import logo from "../Assets/logo.png";
import landing from "../Assets/landing.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="h-screen bg-[#01042D]">
      {/* logo and heading */}
      <div className="flex justify-between">
        <div>
          <img
            src={logo}
            className="pr-3 pl-5 h-14 pt-4 cursor-pointer hover:scale-105 duration-300 "
          />
        </div>
        <div className="mt-4 pr-6">
          <Link to="/login">
            <button className="text-white border-2 border-[#B64320] hover:scale-110 duration-300 rounded-lg px-6 py-1 mx-3">
              LOGIN
            </button>
          </Link>
          <Link to="/register">
            <button className="text-white border-2 border-[#B64320] hover:scale-110 duration-300 rounded-lg px-6 py-1 mx-3">
              SIGNUP
            </button>
          </Link>
        </div>
      </div>
      {/* main content  */}
      <div className="flex mt-24 p-4 h-[27rem]">
        {/* landing vector */}
        <div className="w-1/3 ">
          <img src={landing} />
        </div>
        <div className="w-2/3">
          <div className="flex justify-center text-[#E0E1DD] text-4xl">
            WELCOME
          </div>
          {/* left section */}
          <div className="flex">
            <div className=" p-3 w-2/3 mt-3 border-r-2 border-r-[#E0E1DD]">
              {/* Shape the future section */}
              <div className="text-[#E0E1DD] text-lg font-semi-bold mr-4 flex justify-end">
                SHAPE THE FUTURE WITH CODEX
              </div>
              {/* text area */}
              <div className="flex justify-end mt-2">
                <div className="text-[#E0E1DD]  text-sm w-2/3 font-semi-bold">
                  Go beyond the textbooks and textbooks and test your skills in
                  real-world scenarios. Take part in exciting innovation
                  challenges and hackathons organized by IIITA, collaborate with
                  peers, and develop groundbreaking solutions
                </div>
              </div>
              {/*Get started button  */}
              <div className="flex justify-end mt-6 mr-2">
                <button className="bg-[#FF7659] p-2 w-1/2 font-semibold hover:scale-105 duration-300">
                  Get Started !
                </button>
              </div>
            </div>
            {/* second portion start */}
            <div className="w-1/3 p-1">
              <div className="flex justify-start mt-12">
                <button className="bg-[#FF7659] p-2 w-1/2 font-semibold hover:scale-105 duration-300">
                  Contestant
                </button>
              </div>
              <div className="flex justify-start mt-8">
                <button className="bg-transparent text-[#E0E1DD] border-[#E0E1DD] border-[1px] p-2 w-1/2 font-semibold hover:scale-105 duration-300">
                  Organiser
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="h-[126px] bg-[#010112] mt-[2rem]">
        <div className="flex-col">
          <div className="flex justify-center ">
            <img src={logo} className=" h-14 p-3 mt-3" />
          </div>
          <div className="flex justify-center">
            <hr className="w-[30%] bg-[#404040]" />
          </div>
          <div className="text-[#505050] flex justify-center mt-4">
            Made By CodeHub
          </div>
        </div>
      </div>
    </div>
  );
}
